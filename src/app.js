class IndecisionContainer extends React.Component {
  render () {
    return (
      <div>
        <Header title='test title' />
        <Header title='other title' />
        <Action />
        <OptionsContainer />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    /**
     * `this` works much the same way it does in ES6 `class` statements
     * - we can define custom attributes in our component instances;
     * - `this` refers to INSTANCES of our component, not to the class.
     * - If we define a custom attribute, such as `title` in one or
     * - more of our instances, we can access it via `props`, such
     * - that the following would result in logging thusly:
     *
     * console.log(this.props)
     * // {title: "test title"}
     * // {title: "other title"}
     *
     * - ...as we can see, our custom attributes are available to us
     * - in the form of key/value pairs.
     */
    console.log(this.props)
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
