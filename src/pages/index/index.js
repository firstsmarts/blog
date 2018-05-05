import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'


export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div className="left">
                    <div className="articles">
                        <div className="art-item">
                            <Link to="/">
                                <h3 className="art-title">
                                    饿了么PWA升级实践
                                </h3>
                                <p className="art-desc">今年 9 月份的时候，《程序员》杂志社就邀请我写一篇关于 PWA 的文章。后来花式拖稿，拖过了 10 月的 QCon，11 月的 GDG DevFest，终于在 12 月把这篇长文熬了出来。几次分享的不成熟，这次的结构算是比较满意了。「 可能是目前中文世界里对 PWA 最全面详细的长文了」，希望你能喜欢。
                              本文首发于 CSDN 与《程序员》2017 年 2 月刊，同步发布于 Hux B...</p>
                            </Link>
                            <p className="pubdate">
                                published by ck on june 24,2017
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    world
                </div>
            </div>
        )
    }
}