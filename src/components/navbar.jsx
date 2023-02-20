import React from 'react'
import '../styles/navbar.css'
import member from '../images/member.jpg'
import { Link } from 'react-router-dom'


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
                    <Link to={'/user-profile'}> <img className='navPhoto' src={member} alt="member" /></Link>
                    <p>Gideon</p>
                </div>
            </div>
        </div>
    )
}
