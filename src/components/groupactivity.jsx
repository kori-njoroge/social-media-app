import React from 'react'
import LikeCommentShare from './likecommenrshare'
import profile from '../images/groupicon.jpg'
import logo from '../images/member.jpg'

export default function GroupActivity() {
    return (
        <>
            <div className='allMembersPosts topPost '>
                <div>
                    <img className='userPhoto' src={logo} alt="poster" />
                </div>
                <div className="postOwner">
                    <div className="postOwnerdetailt">
                        <div>
                            <p className="postOwnerName">Gideon Kori</p>
                            <p className='postOwnerUpdate'>joined the group</p>
                        </div>
                        <div className='postOwnerDuration'>
                            <p>3 hours,7 minutes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='postContent allMembersPosts'>
                <hr />
                <LikeCommentShare />
            </div>
        </>
    )
}
