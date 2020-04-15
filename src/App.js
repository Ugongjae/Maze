import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gnb from './Components/GNB';
import Main from './Components/main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Gnb/>
      <Header/>
      <Main/>
      <Footer/>
      
    </div>
  );
}

export default App;
