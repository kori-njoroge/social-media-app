import React from "react";
import "../styles/photo-card.component.css"
import { Link } from "react-router-dom";

let Photocard =  ({imagePost, userDP, userName}) => {
    return(
        <div className="c-Photo-Card">
            <div className="c-Photo-Card__Main-Content">
                <img src={imagePost} alt="" />
            </div>
            
            <Link>
                <div className="c-Photo-Card__Bottom-Content">
                    <div className="userDp-Holder">
                        <img src={userDP} alt="" />
                    </div>
                <h4>{userName}</h4>
            </div>
            </Link>
        </div>
    )
}

export default Photocard