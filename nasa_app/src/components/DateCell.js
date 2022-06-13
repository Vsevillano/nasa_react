import React from 'react'

export const DateCell = (props) => {

  const { date, image, title } = props;

  return (
    
      <div className="card h-100">
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><small className="text-muted">{date}</small></p>
        </div>
      </div>
    
  )
}
