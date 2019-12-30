import React from 'react'
import ExistingRooms from './ExistingRooms'
import './HomePage.css'
import PlusBtn from './PlusBtn'

export default function HomePage(props) {

    return (
        <div className='HomePage'>
            <div className='roomsOnDisplay'>
                <ExistingRooms roomList={props.roomList}/>
            </div>
            <div className='plsBtn'>
                <PlusBtn />
            </div>
        </div>
    )
}
