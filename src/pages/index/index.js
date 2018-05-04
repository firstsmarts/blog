import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: 'I MEET YOU , TREASURE YOU , LOVE YOU , EVEN , I MISS YOU ...',
            current: 0,
            timer: null
        }
    }

    componentDidMount(){
        const len = this.state.word.length
        this.setState({
            timer: setInterval(() => {
                if (this.state.current == len) {
                    this.setState({
                        current: 0
                    })
                    return
                }
                this.setState({
                    current: this.state.current + 1
                })
            },800)
        })
    }
    render() {
        const list = this.state.word.split('')
        return (
            <div className="content">
                <div className="header">
                    <div className="logo">
                        <img className="logoimg" src={require('../../asset/images/logo.png')} alt=""/>
                    </div>
                    <p className="slogn">
                        {
                            list.map((item,i) => <span key={i} className={`muletter ${item == ' ' ? 'space' : ''} ${this.state.current == i ? 'current' : ''}`}>{item == ' ' ? '' : item}</span>)
                        }
                    </p>
                    <div className="nav">
                        <Link className="nav-item" to="/">Home</Link>
                        <Link className="nav-item" to="/about">About</Link>
                        <Link className="nav-item" to="/profiles">profiles</Link>
                    </div>
                </div>
            </div>
        )
    }
}