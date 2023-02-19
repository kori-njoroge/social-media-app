import React from "react";
import "../styles/people-card.component.css"
import { Link } from "react-router-dom";
import userDPx from "../images/member.jpg"

let PeopleCard = ({userDp, userName, friendsCount, groupsCount, lastSeenDuration}) => {

    /*
    TODO("Fix the problem that is not enabling the image to be displayed; It displays if the img src value is NOT passed as a prop")
    */

    return(
        <div className="c-People-Card">
            <Link>
                <div  className="c-People-Card__UserDP-Holder" >
                    <img src={userDp} alt="" />
                </div>
            </Link>
            <p className="c-People-Card__LastSeenDuration">Active, {lastSeenDuration} ago </p>
            <Link>
                <h3 className="c-People-Card__UserName">{userName}</h3>
            </Link>

            <div className="c-People-Card__userStat">
                <div className="userStatItem">
                    <h4>{friendsCount}</h4>
                    <p>Friends</p>
                </div>
                <div className="userStatItem">
                    <h4>{groupsCount}</h4>
                    <p>Groups</p>
                </div>
            </div>
            <Link>
                <button className="c-People-Card__VM-Button">View Profile</button>
            </Link>
        </div>
    )
}

export default PeopleCard