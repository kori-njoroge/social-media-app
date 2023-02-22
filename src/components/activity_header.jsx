import React from "react"
import { Link } from "react-router-dom";
import  '../styles/user-profile.css';
import { Outlet } from "react-router-dom";
import MakePost from "./makePost";


const ActivityHeader = () => {
    return(
        <>
<div className='profile_main_content_center_header'>    
<Link to={'my-posts'} className='profile_nav_con'>My Posts</Link >
<Link to={'my-friends'} className='profile_nav_con'>Friends</Link>
<Link to={'my-groups'}  className='profile_nav_con'>Groups</Link>
</div>
<MakePost/>
 <Outlet />
 </>
    )
}
export default ActivityHeader;
 