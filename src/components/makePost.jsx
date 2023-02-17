import React from 'react'
import '../styles/makePost.css'
import logo from '../images/member.jpg'

export default function MakePost() {
    const username = 'Kori'
    return (
        <div className='makePost'>
            <img className='userPhoto' src={logo} alt="user image" />
            <input 
            type="text"
            placeholder={`What's new ${username}`}
            />
        </div>
    )
}
