import React, {useEffect, useState} from 'react';
import axios from "axios";
import Recherche from './Recherche';
import * as AiIcons from "react-icons/ai";
import { useParams } from 'react-router-dom'; 

import Select from "react-dropdown-select";
import 'react-dropdown/style.css';



const RecetteList=()=>{

// récuperer les données: les recettes
const [data,setData]=useState([]);
const [CategoryData,setCategoryData]=useState([]);
const [PaysData,setPaysData]=useState([]);
const [PaysRecetteData,setPaysRecetteData]=useState([]);

const [IngData,setIngData]=useState([]);
const [IngRecetteData,setIngRecetteData]=useState([]);

const [CategoryRecetteData,setCategoryRecetteData]=useState([]);
const[searchMeal,setSearchMeal]= useState("");
const { id ,idPays,idIng} = useParams(true);


useEffect(()=> {   

  
axios.get("https://themealdb.com/api/json/v1/1/search.php?s")
.then((res) => {  setData(res.data.meals); 
  });
axios.get("https://themealdb.com/api/json/v1/1/categories.php")
.then((res) => {  setCategoryData(res.data.categories); 
});
axios.get("https://themealdb.com/api/json/v1/1/filter.php?c="+id)
.then((res) => {  setCategoryRecetteData(res.data.meals); 
  });
  axios.get("https://themealdb.com/api/json/v1/1/list.php?a=list")
.then((res) => {  setPaysData(res.data.meals); 
});
axios.get("https://themealdb.com/api/json/v1/1/filter.php?a="+idPays)
.then((res) => {  setPaysRecetteData(res.data.meals); 
  });

  axios.get("https://themealdb.com/api/json/v1/1/list.php?i=list")
  .then((res) => {  setIngData(res.data.meals); 
  });
  axios.get("https://themealdb.com/api/json/v1/1/filter.php?i="+idIng)
  .then((res) => {  setIngRecetteData(res.data.meals); 
    });
}

,[]);
console.log(CategoryData)
// const options = [];
// CategoryData.map(key=>{
//  options.push(key.strCategory);
 
// })

const options = CategoryData.map(d => ({
  "value" : d.strCategory,
  "label" : d.strCategory
}))

const optionsPays = PaysData.map(d => ({
  "value" : d.strArea,
  "label" : d.strArea
}))
const optionsIng = IngData.map(d => ({
  "value" : d.strIngredient,
  "label" : d.strIngredient
}))


const handlesearch = (e) =>{
        
    let value =e.target.value;
    setSearchMeal(value);
 };





 const handleChange=(e)=>{
 

  window.open("/category/"+e[0].value,"_self");
 }

 const handleChangePays=(e)=>{
 

  window.open("/pays/"+e[0].value,"_self");
 }
 const handleChangeIng=(e)=>{
 

  window.open("/ingredient/"+e[0].value,"_self");
 }



return (
<div>
       
<label for="site-search"> <AiIcons.AiOutlineSearch/></label>  
      <input type="text" name="searchBar" id="searchBar" placeholder="je recherche une recette" onChange={handlesearch}
       aria-label="Search through site content"/> 
    
        <div className="searchBar">
       
       <Select options={options}  onChange={handleChange.bind(this)} placeholder="Choisir une Categorie"/>
     <Select options={optionsPays}  onChange={handleChangePays.bind(this)} placeholder="Choisir une Recette par Pays" />
     <Select options={optionsIng}  onChange={handleChangeIng.bind(this)} placeholder="Choisir un Ingredient" />
   
     </div>
     
    
     {/* <Select options={options}  onChange={handleChange.bind(this)} placeholder="Choisir une Categorie"/>
     <Select options={optionsPays}  onChange={handleChangePays.bind(this)} placeholder="Choisir une Recette par Pays" />
     <Select options={optionsIng}  onChange={handleChangeIng.bind(this)} placeholder="Choisir un Ingredient" /> */}
   
     {/* <div id="category">
        {CategoryData.map(key=>
       <a href={ '/category/'+ key.strCategory}>{key.strCategory}</a>)}
      </div> */}

          
           

    <div className="recettes">
        <ul className="recette-list">



        {data.filter((val,index)=>{
             return val.strMeal.toLowerCase().includes(searchMeal.toLowerCase());
        }).map((recette)=>(
            // chaque recette on la mis dans une props
            <Recherche recette={recette} key ={recette.strMeal}/>

        ))}
          
        {id &&  CategoryRecetteData.map((recette)=>(
            // chaque recette on la mis dans une props
            <Recherche recette={recette} key ={recette.strMeal}/>

        ))}


{idPays &&  PaysRecetteData.map((recette)=>(
            // chaque recette on la mis dans une props
            <Recherche recette={recette} key ={recette.strMeal}/>

        ))}

{idIng &&  IngRecetteData.map((recette)=>(
            // chaque recette on la mis dans une props
            <Recherche recette={recette} key ={recette.strMeal}/>

        ))}

        
{/* si ya pas par cette recherche revient à la page d'accueil */}
        {id==null&&idPays==null&&idIng==null &&
        data.filter((val,index)=>{
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