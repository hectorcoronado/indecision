const app = {
  title: 'indecision app',
  subtitle: 'strive for katastematic state',
  options: []
}

const onFormSubmit = e => {
  e.preventDefault()

  // `e.target` points to the element that the event started on
  // `elements` contains all elements alphabetized by name, so
  // - we can access our input w/`option` (& `value` like JS)
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
  }
}

const removeOptions = () => {
  app.options = []
  renderApp()
}

const appRoot = document.getElementById('app')

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0
        ? 'here are your options'
        : 'no options'}
      </p>
      <p>{app.options.length}</p>
      <button onClick={removeOptions}>remove all</button>
      <ol>
        {app.options.map(
          option => <li key={app.options.indexOf(option)}>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>add option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()
