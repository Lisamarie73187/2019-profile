import React from 'react';
import './App.css';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {RouterHome} from './RouterHome';
const App: React.FC = () => {
  return (
    <div>
      <div className="App">
        <div className="homeWrapper">
          <Header />
          <RouterHome />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
