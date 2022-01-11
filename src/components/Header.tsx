import React from 'react';
import {FaBehanceSquare, FaEnvelopeSquare, FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import LMHlogo from '../assets/LMHlogo.png';

export const Header = () => {
  return (
    <div className="homeWrapper">
      <div className="headerContainer">
        <div className="nameWrapper">
          <img src={LMHlogo} className="logo" />
          <div className="name">Lisa Herzberg</div>
        </div>
        <div className="menuWrapper">
          <Link to="/About" className="noDecor">
            <div className="menu" >About</div>
          </Link>
          <Link to="/" className="noDecor">
            <div className="menu">Projects</div>
          </Link>
          <a href="mailto:lisamarieherzberg@gmail.com?subject=I%20have%20the%20perfect%20job%20for%20you!" target="_blank" className="resumeLink">
            <div className="menu">Resume</div>
          </a>
        </div>
      </div>
      <div className="heroContainer">
        <div className="aboutText">I am a passionate full stack developer with expertise in React and React Native</div>
        <div className="linksWrapper">
          <a href="https://github.com/Lisamarie73187" target="https://github.com/Lisamarie73187">
            <FaGithubSquare className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/lisaherzberg/" target="https://www.linkedin.com/in/lisaherzberg/">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://www.behance.net/lherzber0f53" target="https://www.behance.net/lherzber0f53">
            <FaBehanceSquare className="icon" />
          </a>
          <div>
            <a href="mailto:lisamarieherzberg@gmail.com" target="_blank">
              <FaEnvelopeSquare className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="border" />
    </div>
  );
};
