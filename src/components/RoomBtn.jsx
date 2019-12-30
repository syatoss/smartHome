import React from 'react'
import {Link} from 'react-router-dom'
import './RoomBtn.css'

export default function RoomBtn(props) {

    const fontColor=()=>{
        let color = ','+ props.roomValue.color.slice(4,props.roomValue.color.length-1);
        let rgb = [];
        for(let i= 0; i < 3;i++){
            let temp = parseInt(color.slice(color.lastIndexOf(',')+1,color.length));
            color = color.slice(0,color.lastIndexOf(','));
            rgb = [temp,...rgb];
        }
        if((rgb[0]+rgb[1]+rgb[2]) < 380){
            return 'white';
        }else{
            return 'black';
        }
        //,x,y,z
    }
    const shadowBoxColor=()=>{
        return '1px 1px 3px 1px '+props.roomValue.color;
    }

    return (
        <div className='RoomBtn'>
            <Link to={props.roomValue.path} ><button style={{backgroundColor:props.roomValue.color,color:fontColor(),boxShadow:shadowBoxColor()}} className='roomBtn'>{props.roomValue.name}</button></Link>
        </div>
    )
}
