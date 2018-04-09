import React, {Component} from 'react'

import './index.css'

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 1
        }
        this.changeTabe = (i) => {
            console.log(i)
            this.setState({type: i})
        }
    }
    render() {
        return (
            <div className="content">
                hello
            </div>
        )
    }
}