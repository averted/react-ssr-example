const path = require('path')
const express = require('express')
const React = require('react')
const ReactDOM = require('react-dom/server')
const Router = require('react-router')
const routes = require('./src/routes')

const app = express()
const SERVER_RENDERING = process.env.SERVER_RENDERING === 'on'

app.use('/public/', express.static(path.join(process.cwd(), '.build')))
app.get('*', (req, res) => {
  if (!SERVER_RENDERING) {
    return res.sendFile(path.join(process.cwd(), '.build', 'index.html'))
  }

  Router.match({
    routes,
    location: req.url
  }, (err, redirect, params) => {
    let markup = ''
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
      <html>
        <head>
          <title>SSR Example</title>
        </head>
        <body>
          <div id="app">${markup}</div>
          <script src="/public/app.js"></script>
        <body>
      </html>
    `)
  })
})

app.listen(3090, () => {
  console.log('SSR example started on port 3090')
})
