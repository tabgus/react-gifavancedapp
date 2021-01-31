import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  

  //La siguiente linea es el useState
  const [categories, setCategories] = useState( ['One Punch']);

  // const handleAdd = () => {
  //   //setCategories( [...categories, 'Hunters'] );
  //   setCategories(cats => [...categories, 'Hunters']);
  // }


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories= { setCategories }/>
      <hr/>

      <ol>
        {
          categories.map(category => (
            <GifGrid 
            key={ category }
            category={ category } 
            />
            ))
        }
      </ol>
    </>    
  )
}
