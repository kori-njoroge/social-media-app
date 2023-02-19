import React,{useState} from 'react'
import logo from '../images/member.jpg'


export default function LikeCommentShare() {
    const [comment, setComment] = useState(false)
    const [triggerShare, setTriggerShare] = useState(false);


    function handlePostComment() {
        // code
        setComment(false)
    }
    return (
        <>
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
        </>
    )
}
