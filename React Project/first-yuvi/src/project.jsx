import React from 'react';
import './first.css';
import logo from './foodlogo.png';
import bannerImage from './banner.jpg'; 
import Menu from './menu';
const CountYuvi = () => { 
    return (
        <div className="Yuvi">
            <header className="Yuvi-header">
           <div class= "image">
           <img src ={logo} alt="logo image"></img>
           </div>
           <Menu/>
           </header>
           <div className="banner">
      <img src={bannerImage} alt="Banner"/>
</div>
        </div>
    );
}

export default CountYuvi; 
