import React from 'react';
import img1 from '../images/messibanner.jpg';
import  '../styles/user-posts.css';


const UserPost = () => {
  return (
    <div className="post">
    <div className="new_post">
    <div className="new_post_con">
    <img className='post_img' src = {img1}/>
    <form className='post_form'>
    <textarea
    type="text"
    placeholder="What's on your mind?"
    ></textarea>
    </form>
    </div>
    <p>+ attach media</p>
    <div className="post_btns">
    <button className='post_btn'>post</button>
    <button className='post_btn'>cancel</button>
    </div>


  
    </div>
    	
        
    </div>
  )
}

export default UserPost;