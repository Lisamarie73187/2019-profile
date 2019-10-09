import React from 'react';
import {Link} from 'react-router-dom';
import LMHlogo from '../assets/LMHlogo.png';


export const Header = () => {
  return (
    <div className="homeWrapper">
      <div className="headerContainer">
        <div className="nameWrapper">
          <img src={LMHlogo} height={40} width={40} />
          <div className="name">Lisa Herzberg</div>
        </div>
        <div className="menuWrapper">
          <Link to="/About" className="noDecor">
            <div className="menu">About</div>
          </Link>
          <Link to="/" className="noDecor">
            <div className="menu">Projects</div>
          </Link>
          <Link to="/About" className="noDecor">
            <div className="menu">Resume</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
