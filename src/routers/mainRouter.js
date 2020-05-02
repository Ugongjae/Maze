import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import Main from '../Components/Main'
import Login from '../Components/Login'

class mainRouter extends React.Component{
    render(){
        return(
                    <Router>
                            <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route path="/login" component={Login}></Route>
                        </Switch>
                    </Router>
        )
    }
}

export default mainRouter