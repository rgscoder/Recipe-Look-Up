import React, { useState } from 'react'
import axios from 'axios';
import Display from './Display';



function Main() {
    const [search, setSearch] = useState("");
    const [food, setFood] = useState([]);
    
    const searchFood = (e)=> {
        if(e.key==="Enter") {
            axios.get('https://api.edamam.com/api/recipes/v2?type=public&q='+ search +'&app_id=d1247ebb&app_key=8222ea91343ff1721c1371721d2afb33')
            .then(res=>setFood(res.data.hits))
            .catch(error=>console.log(error))
                // searchFood.catch((error) => {
                //     console.error(error);
                // })
        
             
        }//setFood(res.)
    }
  return (
  <div className="-">
    <div className='main'>
        <h1 id="sub-title">Find a Recipe!</h1>
        <br></br>
            <div className="search-all">
                
                <input id='searchbar' placeholder="Enter Food Type Here" type="text" value={search} 
                onChange={event=>setSearch(event.target.value)} onKeyPress={searchFood}></input>
                
            
            </div>
            </div>
            <div>
            {<Display recipes={food}/>}
        </div>

    </div>
  )
}

export default Main