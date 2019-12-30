import React from 'react'
import './Title.css'
import { Link } from 'react-router-dom'

export default function Title(props) {
    
    return (
        <div className='Title'>
            <Link to='/'><button id='homeBtn'>Smart House </button></Link>
        </div>
    )
}
