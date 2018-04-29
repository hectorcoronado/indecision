'use strict';

// const app = {
//   title: 'indecision app',
//   subtitle: 'strive for katastematic state',
//   options: ['one', 'two']
// }
//
// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
//   </div>
// )

/**
 * how do we set up an e.g. onClick attribute such that it evaluates
 * as a JS expression?
 */

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

/**
 * and to re-render our app when a user clicks on the buttons:
 */
var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne, className: 'btn' },
      '+'
    ),
    React.createElement(
      'button',
      { onClick: minusOne, className: 'btn' },
      '-'
    ),
    React.createElement(
      'button',
      { onClick: reset, className: 'btn' },
      'reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
