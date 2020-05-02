import React from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Footer from './Footer';
import Gnb from './GNB';
import Main from './main';
import '../css/main.css';

class Home extends React.Component{
    render(){
        return(
            <div className="App">
                <Gnb/>
                <Header/>
                <Main/>
                <Footer/>
            
            </div>
        )
    }
}

export default Home