import React from 'react';
import {Route,Router,Switch} from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login'
import Register from './Components/Register'
import './css/main.css'

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
  );
}

export default App;
