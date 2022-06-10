import React from 'react'
import { Link } from 'react-router-dom';

export const DateCell = (props) => {

    const { key, date} = props;

  return (
    <div className='grid-cell' key={key}><Link to={`/detail/${date}`}>{date}</Link></div>
  )
}
