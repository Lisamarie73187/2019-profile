import React from 'react';
import {FaBehanceSquare, FaEnvelopeSquare, FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import LMHlogo from '../assets/LMHlogo.png';

export const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="headerContainer">
        <div className="nameWrapper">
          <img src={LMHlogo} height={40} width={40} />
          <div className="name">Lisa Herzberg</div>
        </div>
        <div className="menuWrapper">
          <div className="menu">About</div>
          <div className="menu">Projects</div>
          <div className="menu">Resume</div>
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
            <a href="mailto:lisamarieherzberg@gmail.com">
              <FaEnvelopeSquare className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
