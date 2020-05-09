import React from 'react';
import axios from 'axios';

class Login extends React.Component{
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

    submitHandler=()=>{
        let login_info={
            method:"POST",
            body:JSON.stringify(this.state),
            headers:{
                "Content-Type":"application/json"
            }
        }
        axios.post("http://localhost:8080/login",login_info)
            .then((res)=>{
                let response=res.headers;
                alert(response)
            })

    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="id" onChange={this.setUsername}></input>
                    <input type="text" name="pw" onChange={this.setPassword}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default Login