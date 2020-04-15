import React from 'react';
import '../css/main.css'

class main extends React.Component{
    state={
        x:0,
        y:0
    }
    goUp=()=>{
        this.setState(
            ({y})=>({
                y:y-1
            })
        );
    }
    goDown=()=>{
        this.setState(
            ({y})=>({
                y:y+1
            })
        );
    }
    goLeft=()=>{
        this.setState(
            ({x})=>({
                x:x-1
            })
        );
    }
    goRight=()=>{
        this.setState(
            ({x})=>({
                x:x+1
            })
        );
    }
    Check=()=>{
        alert(this.state.y);
    }

    render(){
        return(
            <div class="game">
                <p>{this.state.x}</p>
                <div class="btn up">
                    <input type="button" value="ss" onClick={this.goUp}></input>
                </div>
                <div class="middle">
                    <div class="btn left">
                        <input type="button" value="left" onClick={this.goLeft}></input>
                    </div>
                    <div class="btn right">
                        <input type="button" value="right" onClick={this.goRight}></input>
                    </div>
                </div>
                <div class="btn down">
                    <input type="button" value="down" onClick={this.goDown}></input>
                </div>
            </div>
        )
    }
}

export default main;