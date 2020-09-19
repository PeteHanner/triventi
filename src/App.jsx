import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './components/root/WelcomePage';
import GamePage from './components/play/GamePage';

function App() {
  return (
    <Switch>
      <Route path="/" component={WelcomePage} exact />
      <Route path="/play" component={GamePage} />
    </Switch>
  );
}

export default App;
