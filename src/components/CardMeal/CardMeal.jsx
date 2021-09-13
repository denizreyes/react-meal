import React from 'react'

import './CardMeal.scss';

const CardMeal = ({data}) => {
  return (
    <div className="cardmeal">
      <div className="cardmeal_image">
        <img src={data.strMealThumb} alt="#" />
      </div>
      <div className="cardmeal_title">
        <h3>{data.strMeal}</h3>
      </div>
    </div>
  )
}

export default CardMeal
