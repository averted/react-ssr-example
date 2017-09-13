const App = require('./App')
const About = require('./About')

module.exports = {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'about',
      component: About
    },
    {
      path: 'redirect',
      onEnter: (state, replace) => replace('/about')
    }
  ]
}
