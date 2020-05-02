import React from 'react';
import {Route,Router,Switch} from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login'
import './css/main.css'

function App() {
  return (
    <Switch>
      <Route path="/" component="Main"></Route>
      <Route path="/login" component="Login"></Route>
    </Switch>
  );
}

export default App;
