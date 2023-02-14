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
                    <h5 className="name">Gideon Kori</h5>
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
                <div className="activity">
                    <i class="fa-solid fa-list-check"></i>
                    <h5>Activity</h5>
                </div>
                <div className="activity">
                    <i class="fa-regular fa-images"></i>
                    <h5>Photos</h5>
                </div>
                <div className="activity">
                    <i class="fa-solid fa-user-group"></i>
                    <h5>People</h5>
                </div>
                <div className="activity">
                    <i class="fa-solid fa-users"></i>
                    <h5>Groups</h5>
                </div>
                <div className="activity">
                    <i class="fa-solid fa-play"></i>
                    <h5>Watch</h5>
                </div>
                <div className="activity">
                    <i class="fa-solid fa-comments"></i>
                    <h5>Forums</h5>
                </div>
                {/*  */}

                <div className="activity">
                    <i class="fa-solid fa-list-check"></i>
                    <h5>Activity</h5>
                </div>
                <div className="activity">
                    <i class="fa-regular fa-images"></i>
                    <h5>Photos</h5>
                </div>
                <div className="activity">
                    <i class="fa-solid fa-user-group"></i>
                    <h5>People</h5>
                </div>
                <div className="activity">
                    <i class="fa-solid fa-users"></i>
                    <h5>Groups</h5>
                </div>
                <div className="activity">
                    <i class="fa-solid fa-play"></i>
                    <h5>Watch</h5>
                </div>
                <div className="activity">
                    <i class="fa-solid fa-comments"></i>
                    <h5>Forums</h5>
                </div>
            </div>
        </div>
    )
}
