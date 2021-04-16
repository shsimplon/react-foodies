import React, {useEffect, useState} from 'react';
import axios from "axios";
import Recherche from './Recherche';


const Favorites=()=>{

    const [favorites, setFavorites] = useState([]); 
    const [data,setData]=useState([]);
   
    const[searchMeal,setSearchMeal]= useState("");
    const getArray=JSON.parse(localStorage.getItem("favorites")); //get favorites from localStorage
    
 
 let arrayFavoritesMeal=[];
 let promises=[];
 useEffect(()=> {     
 
    getArray.forEach(idMeal => {
      // console.log(element);
      promises.push(
           axios.get("https://themealdb.com/api/json/v1/1/lookup.php?i="+idMeal)
          .then((res) => {     // setDataMeal(res.data.meals); 
           arrayFavoritesMeal.push(res.data.meals[0]);
           
           
          
               })
      )
         
      });

       Promise.all(promises).then(() => setData(arrayFavoritesMeal));
      }
      
      ,[]); 
 
     
  
  
     
 const handlesearch = (e) =>{
        
     let value =e.target.value;
     setSearchMeal(value);
  };
 

console.log(data)



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


export default Favorites;