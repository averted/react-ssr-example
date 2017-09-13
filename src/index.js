const React = require('react')
const ReactDOM = require('react-dom')
const Router = require('react-router')
const routes = require('./routes')

const history = Router.browserHistory

// Render app
ReactDOM.render(
  React.createElement(Router.Router, Object.assign({}, { routes, history })),
  document.getElementById('app')
)
