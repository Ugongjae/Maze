import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div class="div login">
                <form>
                    <input type="text" name="id"></input>
                    <input type="text" name="pw"></input>
                </form>
            </div>
        )
    }
}

export default Login