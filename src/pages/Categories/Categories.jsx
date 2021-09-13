import React, {useEffect, useContext} from 'react'

import {Context} from '../../context/context';

import './Categories.scss';
import Card from '../../components/Card/Card';

const Categories = () => {
  const { fetchCategories, categories } = useContext(Context);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <main>
      <div className="container">
        <div className="categories">
          {
            categories && categories.length 
            ? categories.map(
              category => <Card key={category.idCategory} data={{
                title: category.strCategory,
                thumb: category.strCategoryThumb
              }}/>
            )
            : null
          }
        </div>
      </div>
    </main>
  )
}

export default Categories
