import React from "react"
import { Link } from "react-router-dom";
import  '../styles/user-profile.css';
import { Outlet } from "react-router-dom";
import MakePost from "./makePost";


const UserFriends = () => {
    return(
        <>
<div className='profile_main_content_center_header'>    
<Link to={'friendships'} className='profile_nav_con'>Friendships</Link >
<Link to={'friendship-requests'} className='profile_nav_con'>Friendship Requests</Link>
</div>
<MakePost/>
 <Outlet />
 </>
    )
}
export default UserFriends;
 