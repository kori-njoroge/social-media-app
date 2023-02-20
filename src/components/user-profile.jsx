import '../styles/user-profile.css';
import React from 'react';
import Navbar from './navbar'
import SideBar from './sideBar';
import img_bck from '../images/chelsea.jpg'
import img_profile from '../images/john-doedp.jpg'
import img1 from '../images/member.jpg'
import img2 from '../images/messibanner.jpg'
import UserPost from './user-posts'
import { Link, Outlet } from "react-router-dom";
import Activity_header from './activity_header';
import ChangingProfile from './changing-profile';
import ViewProfile from './view-profile';
import EditProile from './edit-profile';


function userProfile() {


    return (
        <div className='profile_page'>

            <div className='profile_side'>
                {/* <SideBar /> */}
            </div>
            <div className='profile_main'>
                <Navbar />


                <div className='profile_main_content_header'>
                    <div className='background_image'>
                        <img src={img_bck} alt='background' height="400px" width="100%" />

                    </div>
                    <div className='profile_main_content_header_nav'>
                        <div className='profile_image'>

                            <img className='img_profile' src={img_profile} alt='profile' />
                            <p>john doe</p>

                        </div>

                        <div className='profile_main_content_header_nav_bar'>
                            <span className='nav_con'><Link to="activity" > <i className="fa-solid fa-list-check"></i><p>activity</p></Link></span>
                            <span className='nav_con'><Link to="profile"> <i className="fa-solid fa-user-group"></i><p>profile</p></Link></span>
                            <span className='nav_con'><Link to="friends"> <i className="fa-solid fa-users"></i><p>friends</p></Link></span>
                            <span className='nav_con'><Link to="groups"><i className="fa-solid fa-user-group"></i><p>groups</p></Link></span>
                            <span className='nav_con'><Link to="media"> <i className="fa-regular fa-images"></i><p>media</p></Link></span>
                        </div>
                    </div>
                </div>



                <div className='profile_main_content'>
                    <div className='profile_main_content_left'>
                        <div className='MyGrpsnFri'>
                            <span className='GrpsnFri'>
                                <h2>4</h2>
                                <p>Friends</p>
                            </span>
                            <span className='GrpsnFri'>
                                <h2>3</h2>
                                <p>Groups</p>
                            </span>
                        </div>
                        <hr ></hr>

                        <div className='MyPhotos'>
                            <h2>My Photos</h2>
                            <div className='MyPhotos_content'>
                                <img className="MyphotosPic" src={img1}></img>
                                <img className="MyphotosPic" src={img2}></img>
                                <img className="MyphotosPic" src={img2}></img>
                                <img className="MyphotosPic" src={img1}></img>
                            </div>

                        </div>
                    </div>

                    
                    <div className='profile_main_content_center'>
                        <Outlet />
                        {/* footers outlet */}
                        {/* <Activity_header /> */}
                        {/* <UserPost /> */}
                        {/* <ChangingProfile />
                        <ViewProfile />
                        <ChangingProfile />
                        <EditProile /> */}
                    </div>
                    <div className='profile_main_content_right'>
                        <h2>Recent Activity</h2>
                        <span className='recent_activity'>
                            <p>Gideon posted a new picture</p>
                            <p>2 hours ago</p>
                        </span>
                    </div>

                </div>
            </div>


        </div>
    )



}
export default userProfile;