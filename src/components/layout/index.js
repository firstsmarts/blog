import React, { Component } from 'react'
import { Link, Route , Switch} from 'react-router-dom'
import './index.css'
import Slogn from '../slogn/index';


export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { routersConfig } = this.props
        return (
            <div className="content">
                <div className="header">
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