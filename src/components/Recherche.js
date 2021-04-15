import React from 'react';


const Recherche = (props) => {

    // cda recette.un truc
    const {recette}=props;

    return (

        <li className='recherche'>
       <img src={recette.strMealThumb} alt='photo recette'/>
       <div className='data-container'>

      


      
          <ul>
              <li>{recette.strMeal}</li>
              <li>{recette.strTags}</li>
              <li>{recette.strArea}</li>

          </ul>
      </div>
        </li>
    );
};

export default Recherche;