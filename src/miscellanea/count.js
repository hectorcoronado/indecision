// /**
//  * how do we set up an e.g. onClick attribute such that it evaluates
//  * as a JS expression?
//  */
//
// let count = 0
//
// const addOne = () => {
//   count++
//   renderCounterApp()
// }
//
// const minusOne = () => {
//   count--
//   renderCounterApp()
// }
//
// const reset = () => {
//   count = 0
//   renderCounterApp()
// }
//
// const appRoot = document.getElementById('app')
//
// /**
//  * and to re-render our app when a user clicks on the buttons:
//  */
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={addOne} className='btn'>+</button>
//       <button onClick={minusOne} className='btn'>-</button>
//       <button onClick={reset} className='btn'>reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot)
// }
//
// renderCounterApp()
class Counter extends React.Component {
  constructor (props) {
    super(props)

    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)

    /**
     * state is initialized here in constructor:
     */
    this.state = {
      count: props.count
    }
  }

  /**
   * never update state manually -- the following is INVALID:
   *
   *  handleAddOne () {
   *    this.state.count = this.state.count ++
   *  }
   *
   * ...instead, state is only ever updated via the `setState` function
   */
  handleAddOne () {
    // state's val's before update are by default available in 1st arg:
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne () {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset () {
    // previous state is irrelevant here:
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render () {
    return (
      <div>
        <div>
          <p>count: {this.state.count}</p>
          <button onClick={this.handleAddOne} className=''>+</button>
          <button onClick={this.handleMinusOne} className=''>-</button>
          <button onClick={this.handleReset} className=''>reset</button>
        </div>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'))
