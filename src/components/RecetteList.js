import React, {useEffect, useState} from 'react';
import axios from "axios";
import Recherche from './Recherche';

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
    
    const handlesearch = (e) =>{
            
        let value =e.target.value;
        setSearchMeal(value);
     };
     
    
    

     
    
    
    return (
    <div>
        
        
            <div className="searchBar">
          <label for="site-search"></label>
          <input type="text" name="searchBar" id="searchBar" placeholder="search" onChange={handlesearch}
           aria-label="Search through site content"/>
    
         <button>Search</button>
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