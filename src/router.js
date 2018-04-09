import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {browserHistory} from 'react-router'
import Bundle from './utils/bundles'
import Index from 'bundle-loader?lazy&name=index!@/index'

const createComponent = (Com) => (props) => (
    <Bundle load={Com}>
        {(Com) => Com
            ? <Com {...props} />
            : ''
}
    </Bundle>
)

const getRouter = () => {
    return (
        <Router history={browserHistory}>
            <div>
                <Route path="/" component={createComponent(Index)}/>
            </div>
        </Router>
    )
}

export default getRouter