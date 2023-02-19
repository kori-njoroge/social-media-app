import React from "react";
import { Link } from "react-router-dom";
import "../styles/video-card.component.css"

let VideoCard = ({userName, userDP, videoSource}) => {

    /*
    TODO("Add the video duration design at the top right hand of the card")

    TODO("hide some of the unwanted playing controls that are displayed by default")
    */

    return(
        <div className="c-Video-Card">
        <div className="c-Video-Card__Main-Content">
            <video width="400" controls>
                <source src={videoSource} type="video/mp4" />
                <source src={videoSource} type="video/ogg" />
            </video>
        </div>

        <Link>
            <div className="c-Video-Card__Bottom-Content">
                <div className="userDp-Holder">
                    <img src={userDP} alt="" />
                </div>
            <h4>{userName}</h4>
        </div>
        </Link>
    </div>

    )
}

export default VideoCard


