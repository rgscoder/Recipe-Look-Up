import React, { useState } from 'react'
import Info from './Info';


function Display({recipe}) {
  const [preview, setPreview] = useState(false);
  const [indivRecipe, setIndivRecipe] = useState();
  console.log(recipe)
  return (
    
    <div>
    
      {recipe.map((object) => {
        let thumbnail= object.recipe.images.SMALL.url;
        let title= object.recipe.label;
        let serving= object.recipe.yield

        if (thumbnail!= NaN && title!= NaN) 
          return (
            <div>
            <div onClick={() =>{setPreview(true); setIndivRecipe(recipe)}}>
              <img src={thumbnail} alt="oh no"></img>
            <div>
              <p>{title}</p>
              <p>Serving size:{serving}</p>
            </div>
            </div>
            <Info preview={preview} object={indivRecipe} onClose={() => setPreview(false)}/>
            </div>
          )
      }
    )}
      
    </div>
  )
}

export default Display