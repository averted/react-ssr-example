const React = require('react')

class App extends React.Component {
  render() {
    return React.createElement('div', {
      children: [
        React.createElement('span', {}, `App route`),
        React.createElement('span', {}, this.props.children)
      ]
    })
  }
}

module.exports = App
