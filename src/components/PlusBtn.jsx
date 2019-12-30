import React from 'react'
import {Link} from 'react-router-dom'
import './PlusBtn.css'

export default function PlusBtn() {
    return (
        <div className='PlusBtn'>
            <Link to='/addroom'><button className='bigPlus'>+</button></Link>
        </div>
    )
}
