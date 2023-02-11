import React from 'react'


const Info=({preview,object,onClose}) => {
  

  if(!preview)
  {
    return null;
  }
  // try with .SMALL
  // else {
  let thumbnail= object.recipe.images.REGULAR.url;
let list = object.recipe.ingredientLines
  // let list=JSON. stringify(object.recipe.ingredientLines)
  // console.log(list)
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
{/*  */}
            <div>
            <h2>Ingredients</h2>
           {/* <li>{object.recipe.ingredientLines}</li> */}
           <ul>
                    {list.map((el,i) => <li key={i}>{el}</li> )}
                </ul>
            
            </div>
{/*  */}
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