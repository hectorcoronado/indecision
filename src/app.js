class Header extends React.Component {
  render() {
    return <p>this is from header</p>
  }
}

const jsx = (
  <div>
    <h1>title</h1>
    <Header />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
