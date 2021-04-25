
import React from 'react';
import { BrowserRouter  , Switch , Route } from "react-router-dom"
import Favoris from './pages/Favoris';
import Home from './pages/Home';

import Recette from './pages/Recette';


function App () {
  return (
   <BrowserRouter>
   <switch>
<Route path="/" exact component={Home}/>
<Route path="/recette" exact component={Recette}/>
<Route path="/recette/:id"  component={Recette}/>
<Route path="/category/:id"  component={Home}/>
<Route path="/pays/:idPays"  component={Home}/>
<Route path="/ingredient/:idIng"  component={Home}/>
<Route path="/favoris"  exact component={Favoris}/>



   </switch>
   
   
   
   </BrowserRouter>
  );
};

export default App;
