import React from 'react'
import {render} from 'react-dom'
import getRouter from './router'
import {AppContainer} from 'react-hot-loader'
import './index.css'

render((
    <AppContainer>
      {getRouter()}
    </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module
    .hot
    .accept('./pages/index', () => {
      const NextRootContainer = require('./pages/index');

      render((
          <AppContainer>
            {NextRootContainer()}
          </AppContainer>
      ), document.getElementById('root'));
    })
}
