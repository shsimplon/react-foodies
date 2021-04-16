
import React from 'react';
import { BrowserRouter  , Switch , Route } from "react-router-dom"
import Favoris from './pages/Favoris';
import Home from './pages/Home';

import Recette from './pages/Recette';

function App () {
  return (
   <BrowserRouter>
   <Switch>
<Route path="/" exact component={Home}/>
<Route path="/recette" exact component={Recette}/>

<Route path="/recette/favoris" exact component={Favoris}/>



   </Switch>
   
   
   
   </BrowserRouter>
  );
};

export default App;
