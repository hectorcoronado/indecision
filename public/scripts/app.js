'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionContainer = function (_React$Component) {
  _inherits(IndecisionContainer, _React$Component);

  function IndecisionContainer(props) {
    _classCallCheck(this, IndecisionContainer);

    var _this = _possibleConstructorReturn(this, (IndecisionContainer.__proto__ || Object.getPrototypeOf(IndecisionContainer)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);

    _this.state = {
      options: []
    };
    return _this;
  }

  /**
   * since some of our components (Action & Option) must
   *  - manipulate state, we define methods *here* that are
   *  - then passed down to components as props, so that they
   *  - can have an effect on state
   */


  _createClass(IndecisionContainer, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      // no need for prevState, just return empty array as val of `options`
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var options = this.state.options;

      var randomNum = Math.floor(Math.random() * options.length);
      var option = options[randomNum];

      console.log(option);
    }

    /**
     * this method requires an argument, because it will be updating our
     * - state, not just reading from it as the two above:
     */

  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'enter something.';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'you\'re already procrastinating this';
      }

      this.setState(function (prevState) {
        /**
         * we want to use `concat` as opposed to e.g. `push`, because we
         * - never want to manipulate state or prevState directly
         */
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'indecision';
      var subtitle = 'strive for a katastematic state';
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(OptionsContainer, {
          options: this.state.options
          /**
           * create prop that references method defined above, so that
           * - we can manipulate state from child component (same process
           * - as above, in Action component's `handlePick` prop)
           */
          , handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionContainer;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
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
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h4',
          null,
          this.props.title
        ),
        React.createElement(
          'p',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.handlePick
            /**
             * this component should only be enabled/visible if
             * - there are options to pick; set up a prop `hasOptions`
             * - that is set to a boolean
             */
            , disabled: !this.props.hasOptions
          },
          'what to do'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var OptionsContainer = function (_React$Component4) {
  _inherits(OptionsContainer, _React$Component4);

  function OptionsContainer() {
    _classCallCheck(this, OptionsContainer);

    return _possibleConstructorReturn(this, (OptionsContainer.__proto__ || Object.getPrototypeOf(OptionsContainer)).apply(this, arguments));
  }

  _createClass(OptionsContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        }),
        React.createElement(
          'button',
          { onClick: this.props.handleDeleteOptions },
          'remove all'
        )
      );
    }
  }]);

  return OptionsContainer;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h5',
          null,
          this.props.optionText
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.handleFormSubmit = _this6.handleFormSubmit.bind(_this6);

    /**
     * we need state to keep track of outcome of `handleAddOption`,
     * - if there is an error, we must render it to UI
     */
    _this6.state = {
      error: null
    };
    return _this6;
  }
  /**
   * unlike in our other components, we want to keep a separate method here
   * - and then call our `handleAddOption` that we get from props; this is
   * - because we still want to add some behavior such as `preventDefault`
   */


  _createClass(AddOption, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(e) {
      e.preventDefault();

      // `e.target` points to the element where event originated &
      // - `elements` contains all elements alphabetized by name, so
      // - we can access our input w/`option` (& `value` like JS)
      var option = e.target.elements.option.value.trim();
      /**
       * we validate form in `handleAddOption` signature; if there is a
       * - return value, that means an error has occurred, otherwise we
       * - can add the option to state.
       */
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });
      e.target.elements.option.value = null;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleFormSubmit },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'add an option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionContainer, null), document.getElementById('app'));
