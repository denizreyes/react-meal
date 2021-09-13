import React from 'react'

import './Card.scss';

const Card = ({data}) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={data.thumb} alt="#" />
      </div>
      <div className="card_title">
        <h3>{data.title}</h3>
      </div>
    </div>
  )
}

export default Card
