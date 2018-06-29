import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'


export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    
    componentWillMount(){
        (function () { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://firstsmarts.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
        
        fetch('/api/getlist').then(res => res.json()).then(res => {
            this.setState({
                list: res.data
            })
        })
    }
    render() {
        return (
            <div>
                <div className="left">
                    <div className="articles">
                        {
                            this.state.list.map(item => (
                                <div className="art-item" key={item.id}>
                                    <Link to="/">
                                        <h3 className="art-title">
                                            {item.title}
                                        </h3>
                                        <p className="art-desc">{item.desc}</p>
                                    </Link>
                                    <p className="pubdate">
                                        published by {item.author} on {item.create_time}
                            </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="right">
                    <div id="disqus_thread"></div>
                </div>
            </div>
        )
    }
}