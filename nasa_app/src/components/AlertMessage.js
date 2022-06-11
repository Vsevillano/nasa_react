import React from 'react'

export const AlertMessage = (props) => {
  return (
    <div className={'alert alert-' + props.variant}>
      <div className="d-flex flex-column">
        <span>{props.message}</span>
      </div>
    </div>
  )
}
