import React from 'react'
import Card from './card';
async function Recipies() {
  let res = await fetch("https://dummyjson.com/recipes");
  let data = await res.json();
let recipes = data.recipes;
console.log(recipes);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-11 bg-white">
      {recipes.map((recipe) => {
        return (
          <Card
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.name}
          />
        );
      })}      
    </div>
  )
}

export default Recipies