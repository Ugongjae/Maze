import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'

class mainRouter extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route path="/" component={Home}></Route>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default mainRouter