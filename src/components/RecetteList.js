import React, {useEffect, useState} from 'react';
import axios from "axios";
import Recherche from './Recherche';

const RecetteList=()=>{

// récuperer les données: les recettes
const [data,setData]=useState([]);

useEffect(()=> {   

  
axios.get("https://themealdb.com/api/json/v1/1/search.php?s")
.then((res) => {  setData(res.data.meals); 
 
             


    });
}

,[]);
console.log(data)



return (

    <div className="recettes">
        <ul className="recette-list">
        {data.map((recette)=>(
            // chaque recette on la mis dans une props
            <Recherche recette={recette} key ={recette.strMeal}/>

        ))}
        </ul>
    
    </div>
    );
    

}


export default RecetteList;