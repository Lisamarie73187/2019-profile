import React from 'react';
import {FaBehanceSquare, FaEnvelopeSquare, FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import {Header} from '../components/Header';
import {Project} from '../components/Project';

// a passionate creattive turned to a determined web/mobile developer consinstantly looking for the next challenge

export const Home = () => {
  return (
    <div>
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
      <div className="border" />
      <Project />
      <div className="copy">©2019 Lisa Herzberg</div>
    </div>
  );
};
