import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    state={
        username:"",
        password:""
    }

    setUsername=e=>{
        this.setState(
            ({
                username:e.target.value
            }
            
        )
        )
    }

    setPassword=e=>{
        this.setState(({
            password:e.target.value
        }))
    }

    submitHandler=async ()=>{
        let login_info={
            method:"POST",
            body:JSON.stringify(this.state),
            headers:{
                "Content-Type":"application/json"
            }
        }
        fetch("http://localhost:8080/login",this.state)
            .then(
                (res)=>{
                    console.log("s"+res)
                }
            )
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" name="id" onChange={this.setUsername}></input>
                    <input type="text" name="pw" onChange={this.setPassword}></input>
                    <input type="submit" onClick={this.submitHandler}></input>
                </form>
            </div>
        )
    }
}

export default Login