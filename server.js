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
    {
      path: 'redirect',
      onEnter: (state, replace) => replace('/about')
    },
  ]
}

app.get('*', (req, res) => {
  Router.match({
    routes: routes,
    location: req.url
  }, (err, redirect, params) => {
    let markup
    let status = 200

    if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search)
    }

    if (params) {
      markup = ReactDOM.renderToString(
        React.createElement(
          Router.RouterContext,
          Object.assign({}, params)
        )
      )
    } else {
      status = 404
      markup = ReactDOM.renderToString(
        React.createElement('div', {}, 'NOT FOUND')
      )
    }

    res.status(status).send(`
      <!doctype html>
        <head>
          <title>SSR Example</title>
        </head>
        <body>${markup}<body>
      </html>
    `)
  })
})

app.listen(3090, () => {
  console.log('SSR example started on port 3090')
})
