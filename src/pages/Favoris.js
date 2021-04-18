import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Favorites from '../components/Favorites';
import NavBar from '../components/NavBar';

const Favoris = () => {
    return (
        <div>
          
            <Logo/>
            <NavBar/>
        <Navigation/>
        <Favorites/>
        </div>
    );
};

export default Favoris;