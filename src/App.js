const React = require('react')
const Link = require('react-router').Link

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      something: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ something: true })
      console.log('-- something updated')
    }, 1000)
  }

  render() {
    return React.createElement('div', {
      children: [
        React.createElement('div', {
          style: { width: '100%', height: '50px', backgroundColor: '#555' },
          children: [
            React.createElement('ul', {
              style: { margin: 0, padding: 0, listStyle: 'none', lineHeight: '48px' },
              children: [
                React.createElement('li', {
                  style: { display: 'inline-block' },
                  children: [
                    React.createElement(Link, {
                      to: '/',
                      style: { color: '#fff', padding: '0 10px', textDecoration: 'none' }
                    }, 'Home')
                  ]
                }),
                React.createElement('li', {
                  style: { display: 'inline-block' },
                  children: [
                    React.createElement(Link, {
                      to: '/about',
                      style: { color: '#fff', padding: '0 10px', textDecoration: 'none' }
                    }, 'About')
                  ]
                })
              ]
            })
          ]
        }),
        React.createElement('span', {}, `App route`),
        React.createElement('span', {}, this.props.children)
      ]
    })
  }
}

module.exports = App
