import React, { useState } from 'react'
import logo from '../images/member.jpg'
import logo2 from '../images/azure.png'
import LikeCommentShare from './likecommenrshare';
import { Link } from 'react-router-dom';

export default function AllMemberComponent() {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="allMembersPosts">
            <div className="topPost">
                <div>
                <Link to ={'/user-profile'}><img className='userPhoto' src={logo} alt="poster" /></Link>    
                </div>
                <div className="division">
                    <div className="postOwner">
                        <div className="postOwnerdetailt">
                            <div>
                                <p className="postOwnerName">Gideon Kori</p>
                                <p className='postOwnerUpdate'>posted an update</p>
                            </div>
                            <div className='postOwnerDuration'>
                                <p>3 hours,7 minutes</p>
                            </div>
                        </div>
                            <i onClick={handleClick} className="fa-solid fa-ellipsis-vertical"></i>
                        <div className="markasFav">
                            {showDropdown && (
                                <div className="dropdown">
                                    <ul>
                                        <li> Mark as Favorite</li>
                                        <hr />
                                        <li> Delete</li>
                                    </ul>
                                </div>
                            )}  
                        </div>
                    </div>
                    <div className="postContent">
                        <p className='postCont'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum beatae quaerat obcaecati! Nemo facilis debitis expedita, obcaecati, maxime doloribus aperiam alias ipsam atque rerum quam sunt, ex in voluptate ab?</p>
                        <div className="imgContainer">
                            <img className='contContainerImg' src={logo2} alt="postPhoto" />
                        </div>
                        <hr />
                        <LikeCommentShare />
                    </div>
                </div>
            </div>
        </div>

    )
}
