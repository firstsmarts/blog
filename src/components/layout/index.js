import React, { Component } from 'react'
import { Link, Route , Switch} from 'react-router-dom'
import './index.css'
import Slogn from '../slogn/index';
import io from 'socket.io-client'

class DumpItem extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentWillMount(){
        const {removeSelf} = this.props
        setTimeout(() => {
            removeSelf()
        }, 5000);
    }
    render(){
        return <p className="dump-item">{this.props.item}</p>
    }
}

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dumpList: []
        }
    }
    popDump(itself){
        console.log(this.refs[itself])
    }
    componentWillMount(){
        const client = io('http://localhost:3000')
        client.emit('chat','hello')
        client.on('server',data => {
            let dumpList = this.state.dumpList.slice(0)
            dumpList.push(data)
            console.log(dumpList)
            this.setState({dumpList})
        })
    }
    render() {
        const { routersConfig } = this.props
        return (
            <div className="content">
                <div className="header">
                    {
                        this.state.dumpList.map((item,i) => <DumpItem ref={`dum${i}`} removeSelf={() => this.popDump(`dum${i}`)} key={i} item={item} />)
                    }
                   
                    <div className="logo">
                        <img className="logoimg" src={require('../../asset/images/logo.png')} alt="" />
                    </div>

                    <Slogn />
                    <div className="nav">
                        <Link className="nav-item" to="/">Home</Link>
                        <Link className="nav-item" to="/about">About</Link>
                        <Link className="nav-item" to="/profiles">profiles</Link>
                    </div>
                </div>
                <div className="maincontent">
                    <Switch>
                    {
                        Object.keys(routersConfig).map((item, i) => <Route exact key={i} path={item} component={routersConfig[item]} />)
                    }
                    </Switch>
                </div>
            </div>
        )
    }
}