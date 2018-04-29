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

let count = 0

const addOne = () => {
  count++
  renderCounterApp()
}

const minusOne = () => {
  count--
  renderCounterApp()
}

const reset = () => {
  count = 0
  renderCounterApp()
}

const appRoot = document.getElementById('app')

/**
 * and to re-render our app when a user clicks on the buttons:
 */
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>count: {count}</h1>
      <button onClick={addOne} className='btn'>+</button>
      <button onClick={minusOne} className='btn'>-</button>
      <button onClick={reset} className='btn'>reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()
