import React, { useState } from 'react'
import logo from '../images/member.jpg'
import '../styles/allmembersactivity.css'

export default function AllMembersActivity() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => {
        setShowDropdown(!showDropdown);
    };
    return (

        <div className=''>
            <div className="allMembersPosts">
                <div className="topPost">
                    <div>
                        <img className='userPhoto' src={logo} alt="poster" />
                    </div>
                    {/* /////// */}
                    <div className='division'>
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


                        </div>
                        <div className="markasFav">
                            <i onClick={handleClick}  className="fa-solid fa-ellipsis-vertical"></i>
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
                </div>
            </div>
        </div>
    )
}
