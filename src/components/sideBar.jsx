import React from 'react'
import { Link } from 'react-router-dom'
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
                    <p className="userName">gideon kori</p>
                    <p className='position'>Member</p>
                    <hr />
                    <div className="card-low">
                        <div className="friends">
                            <h4 className="count">0</h4>
                            <p>Friends</p>
                        </div>
                        <div className="groups">
                            <h4 className="count">5</h4>
                            <p>Groups</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">
                <div className="activity">
                    <Link to ={'all members'}>
                    <i className="fa-solid fa-list-check"></i>
                    <p>Activity</p>
                    </Link>
                </div>
                <div className="activity">
                    <Link to ={'photos'}>
                    <i className="fa-regular fa-images"></i>
                    <p>Photos</p>
                    </Link>
                </div>
                <div className="activity">
                    <Link to ={'people'}>
                    <i className="fa-solid fa-user-group"></i>
                    <p>People</p>
                    </Link>
                </div>
                <div className="activity">
                    <Link to ={'groups'}>
                    <i className="fa-solid fa-users"></i>
                    <p>Groups</p>
                    </Link>
                </div>
                <div className="activity">
                    <Link to ={'watch'}>
                    <i className="fa-solid fa-play"></i>
                    <p>Watch</p>
                    </Link>
                </div>
                <div className="activity">
                    <Link to ={'forums'}>
                    <i className="fa-solid fa-comments"></i>
                    <p>Forums</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
