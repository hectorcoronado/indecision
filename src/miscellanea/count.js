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
      count: 0
    }
  }

  /**
   * this lifecycle method fires when the component FIRST gets
   * - mounted to the DOM; we'll use it to retrieve data from
   * - localStorage if there's a `count` there
   *
   * we use a try/catch block to ascertain that there is no invalid
   * - data in localStorage
   */
  componentDidMount () {
    try {
      // localStorage saves everything as a string, so we retrieve it...
      const stringCount = localStorage.getItem('count')
      // ...and convert it to a number:
      const count = parseInt(stringCount, 10)

      // only save to localStorage if count is NOT NaN:
      if (!isNaN(count)) {
        this.setState(() => ({ count }))
      }
    } catch (e) {
      // no op
    }
  }

  /**
   * this lifecycle method fires after the component updates (after
   * - e.g. state or props values change); we'll use it to save to
   * - localStorage if and when user updates count:
   */
  componentDidUpdate (prevProps, prevState) {
    // only save to localStorage if count changed:
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
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

// Counter.defaultProps = {
//   count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'))
