import React from "react"
import '../styles/user-profile.css';
import '../styles/changing-profile.css';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


const ChangingProfile = () => {
    return (
        <>
            <div className='profile_main_content_center_header'>
                <Link to={'view-profile'} className='profile_nav_con'>View</Link >
                <Link to={'edit-profile'} className='profile_nav_con'>Edit</Link >
                <Link  className='profile_nav_con'>ChangeProfilePhoto</Link >
                <Link className='profile_nav_con'>ChangeCoverImage</Link>
            </div>
            <Outlet />
        </>
    )
}
export default ChangingProfile;
