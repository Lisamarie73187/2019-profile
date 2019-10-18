import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {About} from './pages/About';
import {Project} from './pages/Project';

export const RouterHome = () => {
  return (
    <Switch>
      <Route exact path="/" component={Project} />
      <Route path="/About" component={About} />
    </Switch>
  );
};
