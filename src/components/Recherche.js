import React, {useEffect, useState} from 'react';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";


const Recherche = (props) => {

    // cda recette.un truc
    const {recette}=props;
    //ZK --favorites
    const [favorites, setFavorites] = useState([]); 
    const getArray=JSON.parse(localStorage.getItem("favorites")); //get favorites from localStorage
    useEffect(()=>{
     if(getArray){
        setFavorites([...getArray]);
     }
    },[]);
    //ZK --favorites
const addFav=(idMeal)=>{
   
    let array=favorites;
    array.push(idMeal);
    setFavorites([...array]);
   
    localStorage.setItem("favorites",JSON.stringify(favorites));
    window.location.reload()
    
}

const removeFav=(idMeal)=>{
   
    let array=favorites;
    const index = array.indexOf(idMeal);
     if (index > -1) {
     array.splice(index, 1);
    }
    setFavorites([...array]);
   localStorage.setItem("favorites",JSON.stringify(favorites));
   window.location.reload()
    
}
    
    
    
    return (

        <li className='recherche'>
       <img src={recette.strMealThumb} alt='photo recette'/>
       <div className='data-container'>

      


      
          <ul>
              <li>{recette.strMeal}</li>
              <li>{recette.strTags}</li>
              <li>{recette.strArea}</li>
              <li>
              {
                //ZK--favorites
                  favorites.includes(recette.idMeal)?(
                      <IoIosHeart  class="favori" onClick={()=>removeFav(recette.idMeal)}
                      style={{color:'red'}} /> ):(
                          <IoIosHeartEmpty class="favori" onClick={()=>addFav(recette.idMeal)}
                          style={{color:'red'}}/>
                      )
                  
              }
              </li>

          </ul>
      </div>
        </li>
    );

};

export default Recherche;