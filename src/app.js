class IndecisionContainer extends React.Component {
  constructor (props) {
    super(props)

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)

    this.state = {
      options: []
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

  /**
   * this method requires an argument, because it will be updating our
   * - state, not just reading from it as the two above:
   */
  handleAddOption (option) {
    if (!option) {
      return 'enter something.'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'you\'re already procrastinating this'
    }

    this.setState(prevState => {
      /**
       * we want to use `concat` as opposed to e.g. `push`, because we
       * - never want to manipulate state or prevState directly
       */
      return {
        options: prevState.options.concat(option)
      }
    })
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
        <AddOption
          handleAddOption={this.handleAddOption}
        />
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
  constructor (props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)

    /**
     * we need state to keep track of outcome of `handleAddOption`,
     * - if there is an error, we must render it to UI
     */
    this.state = {
      error: null
    }
  }
  /**
   * unlike in our other components, we want to keep a separate method here
   * - and then call our `handleAddOption` that we get from props; this is
   * - because we still want to add some behavior such as `preventDefault`
   */
  handleFormSubmit (e) {
    e.preventDefault()

    // `e.target` points to the element where event originated &
    // - `elements` contains all elements alphabetized by name, so
    // - we can access our input w/`option` (& `value` like JS)
    const option = e.target.elements.option.value.trim()
    /**
     * we validate form in `handleAddOption` signature; if there is a
     * - return value, that means an error has occurred, otherwise we
     * - can add the option to state.
     */
    const error = this.props.handleAddOption(option)

    this.setState(() => {
      return { error }
    })
    e.target.elements.option.value = null
  }
  render () {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleFormSubmit}>
          <input type='text' name='option' />
          <button>add an option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionContainer />, document.getElementById('app'))
