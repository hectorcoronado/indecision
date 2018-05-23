import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  /**
    * we get `selectedOption` prop from IndecisionContainer, where it makes up part of state
    *
    * `onRequestClose` comes from `react-modal` itself, it allows modal to close clicking esc or
    * - clicking outside of modal
    */
  <Modal
    contentLabel='selected option'
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearModal}
  >
    <h4>selected option</h4>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button
      onClick={props.handleClearModal}
    >
      okay
    </button>
  </Modal>
)

export default OptionModal
