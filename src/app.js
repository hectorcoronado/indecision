class IndecisionContainer extends React.Component {
  constructor (props) {
    super(props)

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)

    this.state = {
      options: props.options
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
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption (optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  }

  handlePick () {
    const { options } = this.state
    const randomNum = Math.floor(Math.random() * options.length)
    const option = options[randomNum]
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

    /**
    * we want to use `concat` as opposed to e.g. `push`, because we
    * - never want to manipulate state or prevState directly
    */
    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))
  }

  render () {
    const subtitle = 'strive for a katastematic state through kinetic pleasures'
    return (
      <div>
        <Header subtitle={subtitle} />
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
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionContainer.defaultProps = {
  options: []
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

    this.setState(() => ({ error }))

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

const Header = props => {
  return (
    <div>
      <h4>{props.title}</h4>
      {props.subtitle && <p>{props.subtitle}</p>}
    </div>
  )
}

Header.defaultProps = {
  title: 'indecisive'
}

const Action = props => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        what to do
      </button>
    </div>
  )
}

const OptionsContainer = props => {
  return (
    <div>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
      <button onClick={props.handleDeleteOptions}>remove all</button>
    </div>
  )
}

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={() => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  )
}

ReactDOM.render(<IndecisionContainer />, document.getElementById('app'))
