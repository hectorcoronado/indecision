import React from 'react'

const Action = props => (
  <div>
    <button
      className='big-button'
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      do what?
    </button>
  </div>
)

export default Action
