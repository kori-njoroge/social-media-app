import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/video-card.component.css"

let VideoCard = ({userName, userDP, videoSource, onVideoCardClick}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    return(
        <div className="c-Video-Card"  onClick={onVideoCardClick}>
            <div className="c-Video-Card__Main-Content" >
                <video ref={videoRef} src={videoSource} onClick={togglePlay}></video>
                { !isPlaying &&
                    <div className="c-Video-Card__PlayButton" onClick={togglePlay}>
                        <i className="fas fa-play"></i>
                    </div>
                }
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

export default VideoCard;
