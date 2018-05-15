import React from 'react'

const Header = props => {
  return (
    <div>
      <h4>{props.title}</h4>
      {props.subtitle && <p>{props.subtitle}</p>}
    </div>
  )
}

Header.defaultProps = {
  title: 'indecisive'
}

export default Header
