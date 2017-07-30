import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import PostDetail from './components/PostDetail'
import registerServiceWorker from './registerServiceWorker'
import './asserts/index.css'
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/post(/:id)" component={PostDetail} />
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
