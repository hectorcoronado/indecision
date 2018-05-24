import React from 'react'

import Option from './Option'

const OptionsContainer = props => (
  <div>
    {props.options.length === 0 && <p>add things. get started.</p>}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
    <button onClick={props.handleDeleteAllOptions}>remove all</button>
  </div>
)

export default OptionsContainer
