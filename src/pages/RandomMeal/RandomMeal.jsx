import React, {useEffect, useContext} from 'react'

import {Context} from '../../context/context';

import './RandomMeal.scss';

const RandomMeal = () => {
  const {fetchRandomMeal, randomMeal}= useContext(Context);
  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal])
  useEffect(()=>{
    console.log(randomMeal)
  },[randomMeal])
  return (
    <main>
      <div className="container">
        <div className="random">
          {
            randomMeal && (
              <div className="random_grid">
                <div className="random_grid_controls">
                  <img src={randomMeal.strMealThumb} alt="#" />
                  <button onClick={() => fetchRandomMeal()}>
                    Generate Another Meal
                  </button>
                </div>
                <div className="random_grid_instructions">
                  <h4>Instructions</h4>
                  <p>
                    {randomMeal.strInstructions}
                  </p>
                </div>
              </div>
            )
           }
        </div>
      </div>
    </main>
  )
}

export default RandomMeal
