import React from 'react'
import '../styles/sidebar.css'
import logo1 from '../images/logo-vertical.svg'
import member from '../images/member.jpg'

export default function SideBar() {
    return (
        <div className='sidebar-container'>
            <div className="sidebar-top">
                <img className='logo1' src={logo1} alt="vertical logo" />
                <div className="usercard">
                    <img className='memberPhoto' src={member} alt="member" />
                    <p>Member</p>
                    <hr />
                    <div className="card-low">
                        <div className="friends">
                            <h3 className="count">1</h3>
                            <p>Friends</p>
                        </div>
                        <div className="groups">
                            <h3 className="count">5</h3>
                            <p>Groups</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">
            <i className="fa-solid fa-book-bookmark"></i>
            </div>
        </div>
    )
}
