import React from 'react';
import './App.css';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {RouterHome} from './RouterHome';
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="homeWrapper">
        <Header />
        <RouterHome />
        <Footer />
      </div>
    </div>
  );
};

export default App;
