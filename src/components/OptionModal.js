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
    className='modal'
    closeTimeoutMS={200}
    contentLabel='selected option'
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearModal}
  >
    <h3 className='modal__title'>selected option</h3>
    {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
    <button
      className='button'
      onClick={props.handleClearModal}
    >
      okay
    </button>
  </Modal>
)

export default OptionModal
