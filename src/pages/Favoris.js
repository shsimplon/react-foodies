import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Favorites from '../components/Favorites';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';

const Favoris = () => {
    return (
        <div>
          
            <Logo/>
            <NavBar/>
        <Navigation/>
        <Favorites/>
        {/* <Footer/> */}
        </div>
    );
};

export default Favoris;