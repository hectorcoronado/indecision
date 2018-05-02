'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionContainer = function (_React$Component) {
  _inherits(IndecisionContainer, _React$Component);

  function IndecisionContainer() {
    _classCallCheck(this, IndecisionContainer);

    return _possibleConstructorReturn(this, (IndecisionContainer.__proto__ || Object.getPrototypeOf(IndecisionContainer)).apply(this, arguments));
  }

  _createClass(IndecisionContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: 'test title' }),
        React.createElement(Header, { title: 'other title' }),
        React.createElement(Action, null),
        React.createElement(OptionsContainer, null),
        React.createElement(AddOption, null)
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
      console.log(this.props);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h5',
          null,
          'indecision'
        ),
        React.createElement(
          'p',
          null,
          'put your life in the hands of a computer'
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
          null,
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
      return React.createElement(Option, null);
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
          'p',
          null,
          'option component here'
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'add an option'
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionContainer, null), document.getElementById('app'));
