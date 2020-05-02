import React from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Footer from './Footer';
import Gnb from './GNB';
import Game from './game';
import '../css/main.css';

class Main extends React.Component{
    render(){
        return(
            <div className="App">
                <Gnb/>
                <Header/>
                <Game/>
                <Footer/>
            
            </div>
        )
    }
}

export default Main