import React from 'react'
console.log("whhy")

const Info=({preview,object,onClose}) => {
  if(!preview)
  {
    console.log("hi")
    return null;
  }
  // try with .SMALL
  // else {
  let thumbnail= object.recipe.images.REGULAR.url;
  return (
    <>
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
              <h1>{object.recipe.label}</h1>
            <h2>({object.recipe.cuisineType})</h2>
            <h3><i>{object.recipe.mealType}</i></h3>

            <div>
            <h2>ingredients</h2>
            <p>{object.recipe.ingredients.text}</p>
            </div>
            <hr></hr>
            <h2>Additional Information</h2>
            <h3>Total Calories</h3>
            <p>{object.recipe.calories}</p>
            <h3>Dietary Restrictions</h3>
            <p>{object.recipe.dietLabels}</p>
            <h3>Best served during:</h3>
            <p>{object.recipe.mealType}</p>
            </li>
            </ul>
            <a href={object.recipe.url}><button>View Full Recipe Description</button></a>
            
          
          </div>
      </div>
    </div>
  </>)
};
//  }

export default Info