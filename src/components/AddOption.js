import React, { Component } from 'react'

export default class AddOption extends Component {
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

    if (!error) {
      e.target.elements.option.value = ''
    }
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
