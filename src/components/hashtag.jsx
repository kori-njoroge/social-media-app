import React from 'react';
import logo from '../images/member.jpg'
// import '../styles/members.css'


export default function Hashtag() {
    return (
        <div className='memberComponent'>
            <img className='userPhoto' src={logo} alt="member" />
            <div className="memberComponentContent">
                <p className='memberName'>Gideon Kori</p>
                <p className='time'>10 Minutes ago</p>
            </div>
        </div>
    )
}
