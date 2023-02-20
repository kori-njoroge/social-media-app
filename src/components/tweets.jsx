import React, { useState } from 'react';
import '../styles/tweets.css';

function TwitterPost() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleCommentSubmit(event) {
    event.preventDefault();
    const newComment = event.target.elements.comment.value;
    setComments([...comments, newComment]);
    event.target.reset();
  }


  return (
    <div className="twitter-post">
      <p className="twitter-post__content">This is the content of the Twitter post.</p>
      <button className="twitter-post__like-button" onClick={handleLike}>Like ({likes})</button>
      <form onSubmit={handleCommentSubmit}>
        <input className="twitter-post__comment-input" type="text" name="comment" placeholder="Add a comment" />
        <button className="twitter-post__comment-submit-button" type="submit">Post</button>
      </form>
      <div className="twitter-post__comments">
        {comments && comments.map((comment, index) => (
          <p className="twitter-post__comment" key={index}>{comment} <button onClick={()=>setComments('')}>delete</button></p>
        ))}
      </div>
    </div>
  );
}

export default TwitterPost;

  