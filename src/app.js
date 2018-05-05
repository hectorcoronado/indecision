class IndecisionContainer extends React.Component {
  render () {
    const title = 'indecision'
    const subtitle = 'strive for a katastematic state'
    const options = ['thing one', 'thing two', 'thing three']
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <OptionsContainer options={options} />
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
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick () {
    console.log('click')
  }
  render () {
    return (
      <div>
        { /** `this` refers to **instance** of Action,
            *   - and we just need to reference (not call)
            *   - our method:
        */}
        <button onClick={this.handlePick}>what to do</button>
      </div>
    )
  }
}

class OptionsContainer extends React.Component {
  handleRemoveAll () {
    console.log('remove all')
  }
  render () {
    return (
      <div>
        {
          this.props.options.map(
            option =>
              <Option key={option} optionText={option} />
          )
        }
        <button onClick={this.handleRemoveAll}>remove all</button>
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        <h5>{this.props.optionText}</h5>
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption (e) {
    e.preventDefault()

    // `e.target` points to the element where event originated &
    // - `elements` contains all elements alphabetized by name, so
    // - we can access our input w/`option` (& `value` like JS)
    const option = e.target.elements.option.value.trim()

    if (option) {
      console.log(option)
    }
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>add an option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionContainer />, document.getElementById('app'))
