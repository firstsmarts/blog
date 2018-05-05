import React, { Component } from 'react'
import './index.css'

export default class Slogn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: 'I MEET YOU , TREASURE YOU , LOVE YOU , EVEN , I MISS YOU ...',
            current: 0,
            timer: null
        }
    }
    componentDidMount() {
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
            }, 800)
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }


    render() {
        const list = this.state.word.split('')
        return (<p className="slogn">
            {
                list.map((item, i) => <span key={i} className={`muletter ${item == ' ' ? 'space' : ''} ${this.state.current == i ? 'current' : ''}`}>{item == ' ' ? '' : item}</span>)
            }
        </p>)
    }
}