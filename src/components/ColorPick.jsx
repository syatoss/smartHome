import React from 'react'

import './ColorPick.css'
import { Component } from 'react';

export default class ColorPick extends Component {

    constructor(props){
        super(props)
        this.state={
            
            
        }
    }
    // const [chosenPixel,setChosenPixel]= useState('');
    // const [toRender,setToRender] = useState('btn');

    componentDidMount() {
       
        this.animate();      
    }
    //  /addroom
    animate = ()=>{
        if(window.location.href.slice((window.location.href.length-8),window.location.href.length) === '/addroom'){
            requestAnimationFrame(this.animate);
            this.createCanvas();
        }
        
    }
    createCanvas =()=>{
        
    let canvas = this.refs.canvas
    let ctx = canvas.getContext("2d")
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    let x = 0.6*window.innerWidth;
    let y = 0.1*window.innerHeight;
    canvas.width = x;
    canvas.height =y;
    let grd = ctx.createLinearGradient(0,0,x,y);
    grd.addColorStop(0, "black");//1
    grd.addColorStop(0.05, "grey");//1
    grd.addColorStop(0.1, "brown");//1
    grd.addColorStop(0.2, "pink");//1
    grd.addColorStop(0.3, "red");//1
    grd.addColorStop(0.4, "orange");//1
    grd.addColorStop(0.5, "yellow");//1
    grd.addColorStop(0.6, "green");//1
    grd.addColorStop(0.7, "rgb(42,56,108)");//1
    grd.addColorStop(0.8, "purple");//1
    grd.addColorStop(0.9, "blue");//1
    grd.addColorStop(1, "white");//9
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,x,y);
      }

    
    updateColor=(str)=>{
        this.props.updateColor(str);
    }

    getPixelValue = (event)=>{
        
        let x = event.clientX;
        let y = event.clientY;
        let rect = event.target.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
        x = parseInt(x);
        y=parseInt(y);
        let pixelData = event.target.getContext('2d').getImageData(x, y, 1, 1).data;
        let rgba = 'rgb('+pixelData[0]+','+pixelData[1]+','+pixelData[2]+')';
        this.updateColor(rgba);
        

        
    }
 
    render(){
        return (
            <div className='ColorPick' >
 
                <canvas ref="canvas"  style={{borderRadius:'5px'}} width={window.innerWidth*0.6} height={window.innerHeight*0.1} onClick={this.getPixelValue}/>
                
 
            </div>
        )
    }
    
}
