import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {RouterHome} from './RouterHome';
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="homeWrapper">
        <Header />
        <RouterHome />
      </div>
    </div>
  );
};

export default App;
