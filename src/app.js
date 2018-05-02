class IndecisionContainer extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Action />
        <OptionsContainer />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h5>indecision</h5>
        <p>put your life in the hands of a computer</p>
      </div>
    )
  }
}

class Action extends React.Component {
  render () {
    return (
      <div>
        <button>what to do</button>
      </div>
    )
  }
}

class OptionsContainer extends React.Component {
  render () {
    return (
      <Option />
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        <p>option component here</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>
        <p>add an option</p>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionContainer />, document.getElementById('app'))
