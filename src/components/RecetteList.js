import React, {useEffect, useState} from 'react';
import axios from "axios";
import Recherche from './Recherche';
import * as AiIcons from "react-icons/ai";



const RecetteList=()=>{

// récuperer les données: les recettes
const [data,setData]=useState([]);
const[searchMeal,setSearchMeal]= useState("");


useEffect(()=> {   

  
axios.get("https://themealdb.com/api/json/v1/1/search.php?s")
.then((res) => {  setData(res.data.meals); 
 
             


    });
}

,[]);
console.log(data)
// filtre par name

const handlesearch = (e) =>{
        
    let value =e.target.value;
    setSearchMeal(value);
 };
 console.log(searchMeal);





return (
<div>
    
    
        <div className="searchBar">
      <label for="site-search"> <AiIcons.AiOutlineSearch/>  </label>
      <input type="text" name="searchBar" id="searchBar" placeholder="je recherche une recette" onChange={handlesearch}
       aria-label="Search through site content"/>
     </div>
          
                   

    <div className="recettes">
        <ul className="recette-list">

        {data.filter((val,index)=>{
             return val.strMeal.toLowerCase().includes(searchMeal.toLowerCase());
        }).map((recette)=>(
            // chaque recette on la mis dans une props
            <Recherche recette={recette} key ={recette.strMeal}/>

        ))}
        </ul>

      </div>
      </div>
  
    );
    

}


export default RecetteList;