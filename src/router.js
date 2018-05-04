import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {browserHistory} from 'react-router'

import BaseLayout from 'bundle-loader?lazy&name=index!@/index'
import { createComponent } from './utils/utils'
// const createComponent = (Com) => (props) => (
//     <Bundle load={Com}>
//         {(Com) => Com
//             ? <Com {...props} />
//             : ''
// }
//     </Bundle>
// )

const getRouter = () => {
    return (
        <Router history={browserHistory}>
            <div>
                <Route path="/" component={createComponent(BaseLayout)}/>
            </div>
        </Router>
    )
}

export default getRouter