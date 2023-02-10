import React from 'react'

function Info({preview, object, onClose}) {
  if(!preview)
  {
    return "NaN";
  }
  // try with .SMALL
  else {
  let thumbnail= object.recipe.images && object.recipe.images.REGULAR.url;
  return (
    <div>
      <button onClick={onClose}>close</button>
      {/* close when clicked outside of */}
      <div>
        <img src={thumbnail} alt="image"></img>
          <div>
            <ul>
              <li>
                {/* seperate  */}
                {/* add headers */}
              <p>{object.recipe.label}</p>
            <p>{object.recipe.cuisineType}</p>
            <p>{object.recipe.mealType}</p>
            <p>{object.recipe.ingredients}</p>
            <p>{object.recipe.calories}</p>
            <p>{object.recipe.dietLabels}</p>
            <p>{object.recipe.mealType}</p>
            </li>
            <a href={object.recipe.url}><button>View Full Recipe Description</button></a>
            </ul>
          
          </div>
      </div>
    </div>
  )};
}

export default Info