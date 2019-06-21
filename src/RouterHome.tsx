import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {About} from './pages/About';
import {Home} from './pages/Home';

export const RouterHome = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
    </Switch>
  );
};
