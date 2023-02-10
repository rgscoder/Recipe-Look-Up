import React from 'react'
import React, { useState } from "react";

function Recipes({ recipe }) {
    const [view, setView] = useState(false);
    const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div>
        
    </div>
  )
}

export default Recipes