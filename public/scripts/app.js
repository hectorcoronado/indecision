'use strict';

var app = {
  title: 'indecision app',
  subtitle: 'strive for katastematic state',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  // `e.target` points to the element that the event started on
  // `elements` contains all elements alphabetized by name, so
  // - we can access our input w/`option` (& `value` like JS)
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var removeOptions = function removeOptions() {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'here are your options' : 'no options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeOptions },
      'remove all'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: app.options.indexOf(option) },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'add option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
