import React from 'react'
import './Room.css'
import { useState } from 'react'
import AddDeviceBtn from './AddDeviceBtn'
import SelectDevice from './SelectDevice'
import DeviceBtn from './DeviceBtn'

export default function Room(props) {

    const [toRender,setToRender] = useState('btn')

    const addDevice=(deviceToAdd)=>{
        props.addDevice(deviceToAdd,props.index);
    }
    const showLowerPart=()=>{
        if(toRender === 'btn'){
            return <AddDeviceBtn changeRenderState={changeRenderState}/>
        }else if (toRender === 'select'){
            return <SelectDevice changeRenderState={changeRenderState} content={props.roomVal} addDevice={addDevice} />
        }
    }
    const onOff= (i) =>{
        props.onOff(props.index,i);
    }

    const changeRenderState = (newRender)=>{
        setToRender(newRender);
    }

    return (
        <div className='Room' >
            <div className='upperPart'>
                <div className='description'>
                    <div className='descriptionText'>
                        <span><span className='preInfo'>Room Name:</span> {'  '+props.roomVal.name}</span> 
                        <span><span className='preInfo'>Room Type:</span> {'  '+props.roomVal.room}</span>
                    </div>
                </div>

                <div className='deviceStates'>
                    {props.roomVal.devices.map((element,i)=>{
                        return <DeviceBtn onOff={onOff} index={i} content={element}/>
                    })}
                </div>

            </div>

            {showLowerPart()}
        </div>
    )
}
