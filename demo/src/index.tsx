import { createEffectorMiddleware } from '@alanqthomas/redux-effector'
import React from 'react'
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './App'
import rootReducer from './state/reducer'
import rootEffect from './state/effects'
import 'typeface-roboto'

const effectorMiddleware = createEffectorMiddleware(rootEffect)

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(effectorMiddleware)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
