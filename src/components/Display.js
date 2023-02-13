import React, { useState } from 'react'
import Info from './Info';


function Display({ recipes }) {
  const [preview, setPreview] = useState(false);
  const [indivRecipe, setIndivRecipe] = useState();
  console.log(recipes)
  if (recipes.length===0) {
    return (<div id="noresult-div"><h5 id="no-result">No results found</h5></div>)
  }
  return (
    
    <div className="row">
    
      {recipes.map((object) => {
        let thumbnail= object.recipe.images.SMALL.url;
        let title= object.recipe.label;
        let serving= object.recipe.yield

        if (thumbnail != undefined && title != undefined) {
          return (
            <div className="popup">
            <div onClick={() => {setPreview(true);setIndivRecipe(object)}}>
              {/*  <div onClick={()=>{setShow(true);setItem(item)}}> */}
              <div className='img'><img src={thumbnail} alt="oh no" className='thumb'></img></div>
            <div className="popup-text">
              <p>{title}</p>
              <p>Serving size: {serving}</p>
            </div>
            </div>
            <Info preview={preview} object={indivRecipe} onClose={() => setPreview(false)} />
            </div>
          )};
      }
    )}
      
    </div>
  )
}

export default Display