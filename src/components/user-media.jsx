import React from "react"
import { Link } from "react-router-dom";
import  '../styles/user-profile.css';
import { Outlet } from "react-router-dom";
import MakePost from "./makePost";


const UserMedia = () => {
    return(
        <>
<div className='profile_main_content_center_header'>    
<Link to={'myphotos'} className='profile_nav_con'>My Photos</Link >
<Link to={'myvideos'} className='profile_nav_con'>My Videos</Link>

</div>
<Outlet />
 </>
    )
}
export default UserMedia;
 