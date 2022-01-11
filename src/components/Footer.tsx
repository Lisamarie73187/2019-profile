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
        <a href="mailto:lisamarieherzberg@gmail.com?subject=I%20have%20the%20perfect%20job%20for%20you!" target="_blank" className="resumeLink">
          <div className="footerLink">Resume</div>
        </a>
      </div>
      <div className="copyWrapper">
        {'\u00A9'}
        <span className="copy">2021 Lisa Herzberg</span>
      </div>
    </div>
  );
};
