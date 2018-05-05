import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {browserHistory} from 'react-router'
import BaseLayout from '@components/layout'
import Index from 'bundle-loader?lazy&name=i!@/index'
import About from 'bundle-loader?lazy&name=at!@/about'
import { createComponent } from './utils/utils';

const routersConfig = {
    '/': createComponent(Index),
    '/about': createComponent(About)
}



const getRouter = () => {
    return (
        <Router history={browserHistory}>
            <div>
                <Route path="/"  render={() => <BaseLayout routersConfig={routersConfig} />}/>
            </div>
        </Router>
    )
}

export default getRouter