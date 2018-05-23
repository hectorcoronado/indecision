import React, { Component } from 'react'

import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import OptionsContainer from './OptionsContainer'
import OptionModal from './OptionModal'

class IndecisionContainer extends Component {
  /**
    * since we have `transform-class-properties` plugin for babel installed, we can define
    * - properties directly to our classes, as opposed to just methods.
    *
    * this obviates need for `constructor` lifecycle method, as we don't need to bind event
    * - handlers' `this` context, and we may instantiate `state` as an object literal
    */

  /**
    * default state defined as class property b/c of `transform-class-properties`
    *
    * selectedOption is prop passed down to OptionModal component to keep track of whether
    * - the modal is open or closed
    */
  state = {
    options: [],
    selectedOption: undefined
  }

  /**
    * event handlers defined as class property b/c of `transform-class-properties`;
    * - must be arrow func, & `this` need not be bound
    */

  /**
   * since some of our components (Action, Option, OptionModal) must
   *  - manipulate state, we define methods *here* that are
   *  - then passed down to components as props, so that they
   *  - can have an effect on state
   */

  /**
  * this method requires an argument, because it will be updating our
  * - state, not just reading from it:
  */
  handleAddOption = option => {
    if (!option) {
      return 'enter something.'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'you\'re already procrastinating this'
    }

    /**
    * we want to use `concat` as opposed to e.g. `push`, because we
    * - never manipulate state or prevState directly
    */
    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))
  }

  handleClearModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  }


  handleDeleteAllOptions = () => {
    // no need for prevState, just return empty array as val of `options`
    this.setState(() => ({ options: [] }))
  }

  handlePick = () => {
    const { options } = this.state
    const randomNum = Math.floor(Math.random() * options.length)
    const option = options[randomNum]

    this.setState(() => ({
      selectedOption: option
    }))
  }


  /**
   * this lifecycle method fires when the component FIRST gets
   * - mounted to the DOM; we'll use it to retrieve data from
   * - localStorage if there is anything there.
   *
   * we use a try/catch block to ascertain that there is no invalid
   * - data in localStorage
   */
  componentDidMount () {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // do nothing in case of error.
    }
  }

  /**
   * this lifecycle method fires after the component updates (after
   * - e.g. state or props values change); we'll use it to save to
   * - localStorage if and when user adds option
   */
  componentDidUpdate (prevProps, prevState) {
    // only save to localStorage if options have changed:
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      /**
       * localStorage is just a key/value pair storage available in
       * - browser; calling `setItem` allows us to save sth to it;
       * - 1st arg is the key, 2nd arg is the value:
       */
      localStorage.setItem('options', json)
    }
  }

  /**
   * this lifecycle method fires immediately prior to a component being
   * - removed from the DOM
   */
  componentWillUnmount () {
    console.log('component will unmount')
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
           * - as above, in Action components handlePick prop)
           */
          handleDeleteAllOptions={this.handleDeleteAllOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearModal={this.handleClearModal}
        />
      </div>
    )
  }
}

export default IndecisionContainer
