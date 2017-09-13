// @flow
const React = require('react')
const ReactDOM = require('react-dom')
const Router = require('react-router')
const App = require('./App')
const About = require('./About')

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
    {
      path: 'redirect',
      onEnter: (state, replace) => replace('/about')
    }
  ]
}

const history = Router.browserHistory

// Render app
ReactDOM.render(
  React.createElement(Router.Router, Object.assign({}, { routes, history })),
  document.getElementById('app')
)
