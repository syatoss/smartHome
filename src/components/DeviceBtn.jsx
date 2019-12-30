import React from 'react'
import './DeviceBtn.css'

export default function DeviceBtn(props) {

    const activityColor=()=>{
        if(props.content.active){
            return 'green';
        }else{  
            return 'red';
        }
    }

    const onOff=(e)=>{
        props.onOff(props.index);
    }

    const shadowBoxColor=()=>{
        if(props.content.active){
            return '1px 1px 3px 1px rgb(10, 182, 19)';
        }else{
            return '1px 1px 3px 1px rgb(182, 10, 62) '; 
        }

    }

    return (
        <div className='DeviceBtn'>
            <button onClick={onOff} className='deviceActive' style={{backgroundColor:activityColor(),boxShadow:shadowBoxColor()}}>{props.content.device}</button>
        </div>
    )
}
