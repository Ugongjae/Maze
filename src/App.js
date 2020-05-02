import React from 'react';
import {Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Router from './routers/mainRouter'
import './css/main.css'

function App() {
  return (
    <div>
      <Router></Router>
    </div>
  );
}

export default App;
