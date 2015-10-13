// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Router, Route } from 'react-router'

// Components
import App from './components/app';
import Steps from './components/steps';


ReactDOM.render(
  <Router>
    <Route path='/' component={App}>
      <Route path='step1' component={Steps.Step1} />
      <Route path='final' component={Steps.StepFinal} />
      <IndexRedirect to='/final' />
    </Route>
  </Router>,
  document.getElementById('drone-app')
);
