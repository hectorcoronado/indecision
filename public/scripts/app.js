console.log('app.js')

var template = React.createElement(
  'p',
  { id: 'someId' },
  'this is jsx.'
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
