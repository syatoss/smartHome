import React from 'react'
import './ExistingRooms.css'
import RoomBtn from './RoomBtn'


export default function ExistingRooms(props) {
    return (
        <div className='ExistingRooms'>
            {props.roomList.map((element,i)=>{
            return <RoomBtn index={i} roomValue={element}/>
            })}
        </div>
    )
}
