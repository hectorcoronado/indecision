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
      options: props.options
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
      var subtitle = 'strive for a katastematic state through kinetic pleasures';
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
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

IndecisionContainer.defaultProps = {
  options: []
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleFormSubmit = _this2.handleFormSubmit.bind(_this2);

    /**
     * we need state to keep track of outcome of `handleAddOption`,
     * - if there is an error, we must render it to UI
     */
    _this2.state = {
      error: null
    };
    return _this2;
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

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h4',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'p',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'indecisive'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'what to do'
    )
  );
};

var OptionsContainer = function OptionsContainer(props) {
  return React.createElement(
    'div',
    null,
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    }),
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'remove all'
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h5',
      null,
      props.optionText
    )
  );
};

ReactDOM.render(React.createElement(IndecisionContainer, null), document.getElementById('app'));
