import React from 'react'
import './AddRoom.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorPick from './ColorPick'


export default function AddRoom(props) {

    const [room,setRoom] = useState('');
    const [name,setName] = useState('');
    const [color,setColor] = useState('white');

    const addToList =()=>{
        let found = false;
        for(let i=0; i<props.list.length;i++){
            if(props.list[i].name == name){
                found = true;
                break;
            }
        }
        if(found){
            alert('ERROR: a room under that name already exists');
            return;
        }else if(name === ''){
            alert('ERROR: a name to the room is required');
            return;
        }else if(room === ''){
            alert('ERROR: must select a room');
            return;
        }
        props.addToRoomsList(room,name,color);
    }
    const colorChange=(e)=>{
        if(e.target.value === ''){
            setColor('white');
        }else{
            setColor(e.target.value)
        }
    }
    const updateColor =(str)=>{
        setColor(str);
    }

    return (
        <div className='AddRoom'>
            <div className='addRoomWrapper'>
                <select id='selectInput' onChange={(e)=>{setRoom(e.target.value)}} className='standratInput'>
                    <option className='opTag' value="" disabled selected hidden className='ChooseRoom'>Choose a room</option>
                    <option className='opTag' value="Bedroom">Bedroom</option>
                    <option className='opTag' value="Bathroom">Bathroom</option>
                    <option className='opTag' value="Kitchen">Kitchen</option>
                </select>
            </div>

            <div className='addRoomWrapper'><input maxLength='5' onChange={(e)=>{setName(e.target.value)}} placeholder='Room name' className='standratInput addRoomInput' type="text"/></div>
            
                <div className='colorWrapper'>
                {/* <input onChange={colorChange} placeholder='Color' className='standratInput addRoomInput' type="color"/> */}
                
                
                    <div className='colorSecondRow'>
                        <div className='pickedColorText'>Choose your color</div>
                        <div className='pickedColor' style={{backgroundColor:color}}></div>
                        
                    </div>
                    <ColorPick updateColor={updateColor}/>
                </div>
                
            <div className='addRoomWrapper btnDiv'>
                <Link to='/'>
                    <button onClick={addToList} className='addRoomCreateBtn'>Create</button>
                </Link>
                </div>
        </div>
    )
}









