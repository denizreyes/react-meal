import React, {useEffect, useCallback, useState, useContext} from 'react'

import {Context} from '../../context/context';

import './Home.scss';
import CardMeal from '../../components/CardMeal/CardMeal';

const Home = () => {
  const [search, setSearch]= useState('')
  const {fetchSearchMeals, meals}= useContext(Context);

  const handleFetchSearch= useCallback(() => {
    fetchSearchMeals(search);
  }, [search, fetchSearchMeals]);

  return (
    <main>
      <div className="container">
        <div className="home">
          <div className="home_search">
            <input 
              type="text" 
              placeholder="Type a meal name..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleFetchSearch}>Search</button>
          </div>
          <div className="home_meals">
            {
              meals 
              ? (meals.length ? meals.map(meal => <CardMeal key={meal.id} data={meal}/>) : null)
              : (<h2>No meals found. Try another word...</h2>)
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
