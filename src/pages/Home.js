import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import RecetteList from '../components/RecetteList';


const Home = () => {
    return (
        <div className="home">
    
<Logo/>  
<Navigation/> 

<RecetteList/>
 
        </div>
    );
};

export default Home;