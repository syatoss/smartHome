import React from 'react'
import './SelectDevice.css'
import { useState } from 'react';

export default function SelectDevice(props) {

    const [deviceToAdd,setDeviceToAdd] = useState('');
    

    const updateDevice = (e)=>{
        setDeviceToAdd(e.target.value);
    }
    const moreThanOneStereo=()=>{
        let count =0;
        for(let i=0; i <props.content.devices.length;i++){
            if(props.content.devices[i].device === 'Stereo'){
                count++;
            }
        }
        if(count > 0){
            return true;
        }else{
            return false;
        }
    }
    const chageRender = ()=>{
        if(deviceToAdd == ''){
            alert('ERROR: no device was selected');
            props.changeRenderState('btn');
            return;
        }else if(props.content.devices.length > 4){
            alert('ERROR: maximum of 5 devices per room is allowed');
            props.changeRenderState('btn');
            return;
        }else if(deviceToAdd === 'Water heater' && props.content.room !== 'Bathroom'){
            alert('ERROR: a water heater can only be added in a bathroom');
            props.changeRenderState('btn');
            return;
        }else if(moreThanOneStereo() && deviceToAdd === 'Stereo'){
            alert('ERROR: every room must have 1 stereo at most');
            props.changeRenderState('btn');
            return;
        }else{
            props.addDevice(deviceToAdd);
            props.changeRenderState('btn');
            return;
        }

    }
    return (
        <div className='SelecDevice' >
            <select name="device" onChange={updateDevice} id="deviceSelect" className='selectDevice'>
                <option value="" disabled selected hidden>Select Device</option>
                <option value="Air conditor">Air conditor</option>
                <option value="Lights">Lights</option>
                <option value="Stereo">Stereo</option>
                <option value="Water heater">Water heater</option>
            </select>
            <button className='selectDeviceBtn' onClick={chageRender}>Add</button>
        </div>
    )
}
