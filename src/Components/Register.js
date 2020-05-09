import React from 'react';

class Register extends React.Component{
    render(){
        return(
            <div>
                <input type='text' name='username'></input>
                <input type='password' name='password'></input>
                <input type="submit"></input>
            </div>
        )
    }
}

export default Register;