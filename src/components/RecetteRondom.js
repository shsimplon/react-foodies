import React, {useEffect, useState} from 'react';

import axios from "axios";


const RecetteRandom = () => {

const [data,setData]=useState([]);

useEffect(()=> {   
    
      
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => {  setData(res.data.meals); 
     
                 

        });
    }
    
    ,[]);
    console.log(data)





    return (
        <div className="recette-Random" >
<p>
Le hazard a choisi pour toi , voici ta recette de jour
    </p>
{data.map((recette) =>(


    <div className='list-data'>
   <img src={recette.strMealThumb} alt='photo recette'/>
<h3>{recette.strMeal}</h3>
   
<>
<ul>
             
              <li>{recette.strTags}</li>
              <li>{recette.strArea}</li>
              <li>{recette.strTags}</li>
              <li>{recette.strCategory}</li>
            <li>{recette.strIngredient}</li>
</ul>
</>
   </div>
)

)}


            
        </div>
    );
};

export default RecetteRandom;