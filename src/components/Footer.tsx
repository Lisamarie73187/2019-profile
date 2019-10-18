import React from 'react';
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerLinks">
        <Link to="/About" className="noDecor">
          <div className="footerLink">About</div>
        </Link>
        <Link to="/" className="noDecor">
          <div className="footerLink">Projects</div>
        </Link>
        <a href="https://indd.adobe.com/view/364c2a85-eab2-417b-ac78-b5b7b5d05670" target="_blank" className="resumeLink">
          <div className="footerLink">Resume</div>
        </a>
      </div>
      <div className="copyWrapper">
        {'\u00A9'}
        <span className="copy">2019 Lisa Herzberg</span>
      </div>
    </div>
  );
};
