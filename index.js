const express = require('express')
const React = require('react')
const ReactDOM = require('react-dom/server')
const Router = require('react-router')
const App = require('./src/App')
const About = require('./src/About')

const app = express()

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
  ]
}

app.get('*', function(req, res) {
  Router.match({
    routes: routes,
    location: req.url
  }, (
    err,
    redirect,
    params
  ) => {
    let html
    let status = 200

    if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search)
    }

    if (params) {
      html = ReactDOM.renderToString(
        React.createElement(
          Router.RouterContext,
          Object.assign({}, params)
        )
      )
    } else {
      status = 404
      html = ReactDOM.renderToString(
        React.createElement('div', {}, 'NOT FOUND')
      )
    }

    res.status(status).send(html)
  })
})

app.listen(3090, function() {
  console.log('SSR example started on port 3090')
})
