import React from 'react';
import '../css/main.css'

class main extends React.Component{
    state={
        x:0,
        y:0
    }
    goUp=async ()=>{
        this.setState(
            ({x})=>({
                x:x-1
            })
        );
    }
    goDown=async ()=>{
        this.setState(
            ({x})=>({
                x:x+1
            })
        );
    }
    goLeft=async ()=>{
        this.setState(
            ({y})=>({
                y:y-1
            })
        );
    }
    goRight=async ()=>{
        this.setState(
            ({y})=>({
                y:y+1
            })
        );
    }
    Check=()=>{
        alert(this.state.y);
    }


    render(){
        let up=null;
        let down=null;
        let left=null;
        let right=null;
        if(this.state.x>0){
            up=<button onClick={this.goUp}>Up</button>
        }else{
            up=null;
        }
        if(this.state.x<10){
            down=<button onClick={this.goDown}>Down</button>
        }else{
            down=null;
        }if(this.state.y>0){
            left=<button onClick={this.goLeft}>Left</button>
        }else{
            left=null;
        }if(this.state.y<10){
            right=<button onClick={this.goRight}>Right</button>
        }else{
            right=null;
        }

        return(
            <div class="game">
                {this.state.x},{this.state.y}
                <div class="btn up">
                    {up}
                </div>
                <div class="middle">
                    <div class="btn left">
                        {left}
                    </div>
                    <button onClick={this.Check}>check</button>
                    <div class="btn right">
                        {right}
                    </div>
                </div>
                <div class="btn down">
                    {down}
                </div>
            </div>
        )
    }
}

export default main;