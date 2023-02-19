import React, { useState } from 'react'
import logo from '../images/member.jpg'
import logo2 from '../images/azure.png'

export default function AllMemberComponent() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [comment, setComment] = useState(false)
    const [triggerShare, setTriggerShare] = useState(false);

    const handleClick = () => {
        setShowDropdown(!showDropdown);
    };

    function handlePostComment() {
        // code
        setComment(false)
    }
    return (
        <div className="allMembersPosts">
            <div className="topPost">
                <div>
                    <img className='userPhoto' src={logo} alt="poster" />
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
                        <div className="markasFav">
                            <i onClick={handleClick} className="fa-solid fa-ellipsis-vertical"></i>
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
                        <div className="likes-comment-share">
                            <p className="like" title='Like'><i className="fa-regular fa-thumbs-up"></i>Like</p>
                            <p className="comment" title="Comment" onClick={() => {
                                setComment(true)
                                setTriggerShare(false)
                            }}>Comment</p>
                            <p className="share" onClick={() => {
                                setTriggerShare(prevstate => !prevstate)
                                setComment(false)
                            }}>Share <i className="fa-solid fa-plus"></i></p>
                        </div>
                        {triggerShare && (
                            <div className="dropdownShare">
                                <p><i className="fa-solid fa-share-nodes"></i> Share on Activity</p>
                                <p><i className="fab fa-facebook-square"></i> Share on Facebook</p>
                                <p><i className="fab fa-twitter-square"></i> Share on Twitter</p>
                                <p><i className="fa-brands fa-linkedin"></i> Share on Linkedin</p>
                                <p><i className="fab fa-instagram-square"></i> Share on Instagram</p>
                            </div>
                        )}
                        <hr />
                        {comment &&
                            <>
                                < div className='comment'>
                                    <img className='navPhoto' src={logo} alt="" />
                                    <div className="btnsPost">
                                        <textarea name="comment" className='textAreacomment'></textarea>
                                        <div className="btnbtnbtn">
                                            <button className='submitPost submitPost-comment' onClick={handlePostComment}>Post</button>
                                            <button className='cancelPost' onClick={() => setComment(false)}>Calcel</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
