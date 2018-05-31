import React from 'react'

import Option from './Option'

const OptionsContainer = props => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__title'>your options</h3>
      <button
        className='button button__link'
        onClick={props.handleDeleteAllOptions}
      >
          remove all
      </button>
    </div>
    {props.options.length === 0 && <p className='widget__message'>add things. get started.</p>}
    {props.options.map((option, index) => (
      <Option
        count={index + 1}
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
)

export default OptionsContainer
