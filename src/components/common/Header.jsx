import React from 'react';
import '../../assets/css/header.css';

import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/keycutstock_logo.png';

const Header = () => {

  return(
    <header className="App-header bg-primary" >
        
      {/* <NavLink to="/">  */}
        <img src={logo} className="App-logo" alt="logo" />
      {/* </NavLink> */}
         
      
      <div className='gnb_box'>
        <b>KEYCUTstock</b>
        <p>Langauge Pack Tool</p>
      </div>
    </header>
  );
};

export default Header;