import React, {createContext, useCallback, useState} from 'react';
import axios from 'axios';

import api from '../api/api';

export const Context= createContext();

export const AppContext = ({children}) => {
  const [meals, setMeals]= useState([]);
  const [categories, setCategories]= useState([]);
  const [randomMeal, setRandomMeal]= useState([]);

  const fetchSearchMeals= useCallback(async (search) => {
    const res = await axios.get(api.SEARCH_BY_NAME + search);
    console.log(res.data.meals)
    setMeals(res.data.meals);
  }, []);

  const fetchCategories= useCallback(async () => {
    const res = await axios.get(api.CATEGORIES);
    console.log(res.data.categories)
    setCategories(res.data.categories);
  }, []);

  const fetchRandomMeal= useCallback(async () => {
    const res = await axios.get(api.RAMDOM_MEAL);
    setRandomMeal(res.data.meals[0]);
  }, []);

  return (
    <Context.Provider value={{
      fetchSearchMeals,
      meals,
      fetchCategories,
      categories,
      fetchRandomMeal,
      randomMeal
    }}>
      {children}
    </Context.Provider>
  )
}