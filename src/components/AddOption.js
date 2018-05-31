import React, { Component } from 'react'

export default class AddOption extends Component {
  /**
    * since we have `transform-class-properties` plugin for babel installed, we can define
    * - properties directly to our classes, as opposed to just methods.
    *
    * this obviates need for `constructor` lifecycle method, as we don't need to bind event
    * - handlers' `this` context, and we may instantiate `state` as an object literal
    */

  // default state defined as class property b/c of `transform-class-properties`
  state = {
    error: null
  }

  /**
    * event handler defined as class property b/c of `transform-class-properties`;
    * - must be arrow func, & `this` need not be bound
    */
  handleFormSubmit = e => {
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
        { this.state.error &&
          <p className='add-option-error'>{this.state.error}</p> }
        <form className='add-option' onSubmit={this.handleFormSubmit}>
          <input className='add-option__input' type='text' name='option' />
          <button className='button'>add an option</button>
        </form>
      </div>
    )
  }
}
