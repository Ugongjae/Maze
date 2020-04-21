import React from 'react';
import map from '../modules/map';
import downbtn from 'img/down.png';
import leftbtn from 'img/left.png';
import rightbtn from 'img/right.png';
import upbtn from 'img/up.png';


class main extends React.Component{
    
    state={
        x:1,
        y:1,
        m:map
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
            if(this.state.m[this.state.x-1][this.state.y]===0)
                up=<button onClick={this.goUp}><img src={upbtn} alt="UpBtn" width="48" height="48"></img></button>
            else
                up=null;
        }else{
            up=null;
        }
        if(this.state.x<8){
            if(this.state.m[this.state.x+1][this.state.y]===0)
                down=<button onClick={this.goDown}><img src={downbtn} alt="DownBtn" width="48" height="48"></img></button>
            else
                down=null;
        }else{
            down=null;
        }if(this.state.y>0){
            if(this.state.m[this.state.x][this.state.y-1]===0)
                left=<button onClick={this.goLeft}><img src={leftbtn} alt="LeftBtn" width="48" height="48"></img></button>
            else
                left=null;
        }else{
            left=null;
        }if(this.state.y<8){
            if(this.state.m[this.state.x][this.state.y+1]===0)
                right=<button onClick={this.goRight}><img src={rightbtn} alt="RightBtn" width="48" height="48"></img></button>
            else
                right=null;
        }else{
            right=null;
        }

        return(
            <div id="game">
                
                <div class="middle">
                    <div class="btn up">
                        {up}
                    </div>
                    <div class="btn left">
                        {left}
                    </div>
                    <div class="btn right">
                        {right}
                    </div>
                    <div class="btn down">
                        {down}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default main;