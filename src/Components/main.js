import React from 'react';
import axios from 'axios';
import map from '../modules/map';
import downbtn from 'img/down.png';
import leftbtn from 'img/left.png';
import rightbtn from 'img/right.png';
import upbtn from 'img/up.png';


class main extends React.Component{
    
    state={
        x:1,
        y:1,
        up:true,
        down:true,
        left:true,
        right:true
    }
    

    goUp=async ()=>{
        axios.get("http://localhost:8080/game/move",{headers:{"x":this.state.x-1,"y":this.state.y}})
            .then((res)=>{
                console.log(res.data);
                let response=res.data
                this.setState(
                    ({
                        up:response.up,
                        down:response.down,
                        left:response.left,
                        right:response.right,
                        x:this.state.x-1
                    })
                )
            });
    }
    goDown=async ()=>{
        // this.setState(
        //     ({x})=>({
        //         x:x+1
        //     })
        // );
        axios.get("http://localhost:8080/game/move",{headers:{"x":this.state.x+1,"y":this.state.y}})
            .then((res)=>{
                console.log(res.data);
                let response=res.data
                this.setState(
                    ({
                        up:response.up,
                        down:response.down,
                        left:response.left,
                        right:response.right,
                        x:this.state.x+1
                    })
                )
            });
    }
    goLeft=async ()=>{
        // this.setState(
        //     ({y})=>({
        //         y:y-1
        //     })
        // );
        axios.get("http://localhost:8080/game/move",{headers:{"x":this.state.x,"y":this.state.y-1}})
            .then((res)=>{
                console.log(res.data);
                let response=res.data
                this.setState(
                    ({
                        up:response.up,
                        down:response.down,
                        left:response.left,
                        right:response.right,
                        y:this.state.y-1
                    })
                )
            });
    }
    goRight=async ()=>{
        axios.get("http://localhost:8080/game/move",{headers:{"x":this.state.x,"y":this.state.y+1}})
            .then((res)=>{
                console.log(res.data);
                let response=res.data
                this.setState(
                    ({
                        up:response.up,
                        down:response.down,
                        left:response.left,
                        right:response.right,
                        y:this.state.y+1
                    })
                )
            });
    }
    Check=()=>{
        alert(this.state.y);
    }


    render(){
        
        let up=null;
        let down=null;
        let left=null;
        let right=null;

        if(this.state.up){
            up=<button onClick={this.goUp}><img src={upbtn} alt="UpBtn" width="48" height="48"></img></button>
        }
        else{
            up=null;
        }

        if(this.state.down){
            down=<button onClick={this.goDown}><img src={downbtn} alt="DownBtn" width="48" height="48"></img></button>
        }
        else{
            down=null;
        }

        if(this.state.left){
            left=<button onClick={this.goLeft}><img src={leftbtn} alt="LeftBtn" width="48" height="48"></img></button>
        }
        else{
            left=null;
        }

        if(this.state.right){
            right=<button onClick={this.goRight}><img src={rightbtn} alt="RightBtn" width="48" height="48"></img></button>
        }
        else{
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