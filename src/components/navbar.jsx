import React from 'react'
import '../styles/navbar.css'
import member from '../images/member.jpg'


export default function Navbar() {
    return (
        <div className='nav'>
            <div className="navSection">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="search" placeholder='Search...' />
            </div>
            <div className="navright">
                <i className="fa-solid fa-user-plus"></i>
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-envelope-open"></i>
                <div className="username">
                    <img className='navPhoto' src={member} alt="member" />
                    <p>Gideon</p>
                </div>
            </div>
        </div>
    )
}
