// const details = {
//   deets: 'katastematic',
//   isShowing: false
// }
//
// const toggleDetails = () => {
//   details.isShowing = !details.isShowing
//   renderApp()
// }
//
// const renderApp = () => {
//   const template = (
//     <div>
//       <p>visibility....</p>
//       <button onClick={toggleDetails}>
//         {details.isShowing ? 'hide' : 'show'}
//       </button>
//       <p>{details.isShowing && details.deets}</p>
//     </div>
//   )
//   ReactDOM.render(template, appRoot)
// }
//
// renderApp()
class Visibilia extends React.Component {
  constructor (props) {
    super(props)

    this.toggleIsShowing = this.toggleIsShowing.bind(this)

    this.state = {
      isShowing: false,
      text: 'katastematic'
    }
  }

  toggleIsShowing () {
    this.setState(prevState => {
      return {
        isShowing: !prevState.isShowing
      }
    })
  }

  render () {
    return (
      <div>
        <p>visibility...</p>
        <button onClick={this.toggleIsShowing}>
          {this.state.isShowing ? 'hide' : 'show'}
        </button>
        <p>{this.state.isShowing && this.state.text}</p>
      </div>
    )
  }
}

const appRoot = document.getElementById('app')

ReactDOM.render(<Visibilia />, appRoot)
