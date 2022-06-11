import React from 'react'

export const LoadingBox = (props) => {
  return (
    <div className={'spinner-border text-' + props.variant} role="status">
      <span className="sr-only"></span>
    </div>
  )
}
