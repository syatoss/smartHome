import React from 'react'
import './AddDeviceBtn.css'

export default function AddDeviceBtn(props) {

    const changeRender= ()=>{
        props.changeRenderState('select')
    }
    return (
        <div className ='AddDeviceBtn'>
            <button className='addDeviceBtn' onClick={changeRender}>Add a Device</button>
        </div>
    )
}
