import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AnonMessenger from './pages/AnonMessenger';

import './App.scss';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={SignupPage} />
          <Route path="/message/:anon" component={AnonMessenger} />
          <Route path="/" component={HomePage} />
          
        </Switch>
    </div>
  );
}

export default App;
