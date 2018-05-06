class IndecisionContainer extends React.Component {
  constructor (props) {
    super(props)

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)

    this.state = {
      options: ['thing one', 'thing two', 'thing three']
    }
  }

  /**
   * since some of our components (Action & Option) must
   *  - manipulate state, we define methods *here* that are
   *  - then passed down to components as props, so that they
   *  - can have an effect on state
   */
  handleDeleteOptions () {
    // no need for prevState, just return empty array as val of `options`
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick () {
    const { options } = this.state
    const randomNum = Math.floor(Math.random() * options.length)
    const option = options[randomNum]

    console.log(option)
  }

  render () {
    const title = 'indecision'
    const subtitle = 'strive for a katastematic state'
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <OptionsContainer
          options={this.state.options}
          /**
           * create prop that references method defined above, so that
           * - we can manipulate state from child component (same process
           * - as above, in Action component's `handlePick` prop)
           */
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
  render () {
    return (
      <div>
        { /** `this` refers to **instance** of Action,
            *   - and we just need to reference (not call)
            *   - our method:
            *
            * `hasOptions` is prop that any instance of this
            *   - button will check to enable/disable self
        */}
        <button
          onClick={this.props.handlePick}
          /**
           * this component should only be enabled/visible if
           * - there are options to pick; set up a prop `hasOptions`
           * - that is set to a boolean
           */
          disabled={!this.props.hasOptions}
        >
          what to do
        </button>
      </div>
    )
  }
}

class OptionsContainer extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.options.map(
            option =>
              <Option key={option} optionText={option} />
          )
        }
        <button onClick={this.props.handleDeleteOptions}>remove all</button>
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
