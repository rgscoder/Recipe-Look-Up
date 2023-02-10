import React, { useState } from 'react'
import axios from 'axios';


function Main() {
    const [search, setSearch] = useState("");
    const [food, setFood] = useState([]);
    
    const searchFood = (e)=> {
        if(e.key==="Enter") {
            axios.get('https://api.edamam.com/api/recipes/v2?type=public&q='+ search +'&app_id=d1247ebb&app_key=8222ea91343ff1721c1371721d2afb33')
            .then(res=>console.log(res.data.hits))
            .catch(err=>console.log(err));
                // searchFood.catch((error) => {
                //     console.error(error);
                // })
                
        }//setFood(res.)
    }
  return (
    <div>
        <h1>How to Cook That!</h1>
        <hr></hr>
            <div>
                <input placeholder="Enter Food Type Here" type="text" name= "search" value={search} 
                onChange={event=>setSearch(event.target.value)} onKeyPress={searchFood}>

                </input>
                <button></button>
            </div>
    </div>
  )
}

export default Main