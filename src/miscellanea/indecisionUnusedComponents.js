/**
 * a file to keep components for reference.
 */

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

const User = (props) => {
  return (
    <div>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </div>
  )
}
