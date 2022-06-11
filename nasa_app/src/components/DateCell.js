import React from 'react'
import { Link } from 'react-router-dom';

export const DateCell = (props) => {

  const { date, image, title } = props;

  return (
    <Link to={`/detail/${date}`} className="text-decoration-none text-reset" >
      <div className="card h-100">
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><small className="text-muted">{date}</small></p>
        </div>
      </div>
    </Link>
  )
}
