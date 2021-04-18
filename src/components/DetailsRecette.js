
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Logo from './Logo'; 
import ReactPlayer from 'react-player'



const DetailsRecette = () => {


    const [data,setData]=useState([]);
    const { id } = useParams(true);




    useEffect(()=> {   
        
        if (id)  {
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
        .then((res) => {  setData(res.data.meals); 
         
                     
    
            });}
            else{
                  
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => {  setData(res.data.meals); 
     
                 

        });

            }
        }
        
        ,[]);
        console.log(data)








    return (
    
     
        <div className="recette-Random" >

        
        {data.map((recette) =>(
        
        
        <div className='list-data'>
            
          <h3>{recette.strMeal}</h3>
        <img src={recette.strMealThumb} alt='photo recette'/>
     
         
         <>            
     
<ul>
             
              <li>{recette.strTags}</li>
              <li>{recette.strArea}</li>
              <li>{recette.strCategory}</li>
             
             <div className ="ingredients">
            <h5>Ingrédients</h5>
          
            <li>  {recette.strMeasure1 ? <span>{recette.strMeasure1}-{recette.strIngredient1}</span>: ""}</li> 
            <li>  {recette.strMeasure2 ? <span>{recette.strMeasure2}-{recette.strIngredient2}</span>: ""}</li> 
            <li>  {recette.strMeasure3? <span>{recette.strMeasure3}-{recette.strIngredient3}</span>: ""}</li> 
            <li>  {recette.strMeasure4 ? <span>{recette.strMeasure4}-{recette.strIngredien41}</span>: ""}</li> 
            <li>  {recette.strMeasure5 ? <span>{recette.strMeasure5}-{recette.strIngredient5}</span>: ""}</li> 
            <li>  {recette.strMeasure6 ? <span>{recette.strMeasure6}-{recette.strIngredient6}</span>: ""}</li> 
            <li>  {recette.strMeasure7 ? <span>{recette.strMeasure7}-{recette.strIngredient7}</span>: ""}</li> 
            <li>  {recette.strMeasure8 ? <span>{recette.strMeasure8}-{recette.strIngredient8}</span>: ""}</li> 
            <li>  {recette.strMeasure9 ? <span>{recette.strMeasure9}-{recette.strIngredient9}</span>: ""}</li> 
            <li>  {recette.strMeasure10 ? <span>{recette.strMeasure10}-{recette.strIngredient10}</span>: ""}</li> 
            <li>  {recette.strMeasure11? <span>{recette.strMeasure11}-{recette.strIngredient11}</span>: ""}</li> 
            <li>  {recette.strMeasure12 ? <span>{recette.strMeasure12}-{recette.strIngredient12}</span>: ""}</li> 
            <li>  {recette.strMeasure13 ? <span>{recette.strMeasure13}-{recette.strIngredient13}</span>: ""}</li> 
            <li>  {recette.strMeasure14? <span>{recette.strMeasure14}-{recette.strIngredient14}</span>: ""}</li> 
            <li>  {recette.strMeasure15 ? <span>{recette.strMeasure15}-{recette.strIngredient15}</span>: ""}</li> 
            <li>  {recette.strMeasure16? <span>{recette.strMeasure16}-{recette.strIngredient16}</span>: ""}</li> 
            <li>  {recette.strMeasure17? <span>{recette.strMeasure17}-{recette.strIngredient17}</span>: ""}</li> 
            <li>  {recette.strMeasure18? <span>{recette.strMeasure18}-{recette.strIngredient18}</span>: ""}</li> 
            <li>  {recette.strMeasure19? <span>{recette.strMeasure19}-{recette.strIngredient19}</span>: ""}</li> 
            <li>  {recette.strMeasure20? <span>{recette.strMeasure20}-{recette.strIngredient20}</span>: ""}</li> 
            </div>

            <span className="video">
     <ReactPlayer url={recette.strYoutube} /></span>
<h5>Etapes</h5>
            <li className= "instruction">{recette.strInstructions}</li>
</ul>
</>
        
           </div>
           
        )
        
        )}
        
        
                    
                </div>
    );
};

export default DetailsRecette;