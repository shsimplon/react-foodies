import React from 'react';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';
import RecetteList from '../components/RecetteList';


const Home = () => {
    return (
        <div className="home">
   
<Logo/> 
<NavBar/> 
<Navigation/> 

<RecetteList/>
 
        </div>
    );
};

export default Home;