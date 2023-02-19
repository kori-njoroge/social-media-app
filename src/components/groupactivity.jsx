import React from 'react'
import profile from '../images/groupicon.jpg'
import LikeCommentShare from './likecommenrshare'

export default function GroupActivity() {
    return (
        <>
        <div className='allMembersPosts topPost'>
            <div>
                <img className='userPhoto' src={profile} alt="poster" />
            </div>
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
        </div>
            <LikeCommentShare />
        </>
    )
}
