import React from 'react'

const Action = props => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        do what?
      </button>
    </div>
  )
}

export default Action
