import React, { useState } from "react";
import "../styles/page-popup.component.css";
import { Link } from "react-router-dom";

let PagePopUp = ({
  mainContent,
  videoPost,
  fileName,
  postedFileCategory,
  isModalOpen,
  onModalClose,
  popUpStyle,
}) => {
  const [like, setLike] = useState(false);

  let handleLikeUnlikeClick = () => {
    //TODO("write other logic, ")
    setLike(!like);
  };
  let handleDeleteClick = () => {
    if (
      window.confirm("Are you sure you want to delete this media?") === true
    ) {
      console.log("OK cliked");
    } else {
      console.log("OK NOT CLICKED");
    }
  };

  return (
    <div className="c-Page-PopUp" style={popUpStyle}>
      <div className="c-Page-PopUp__Main-Content">
      <div className="top-content">
          {mainContent}
        </div>

      <a className ="prev" >
            <i className="fa-sharp fa-solid fa-less-than"></i>
          </a>
          <a className="next">
            <i className="fa-sharp fa-solid fa-greater-than"></i>
          </a>
        {/* <img src={imagePost} alt="" />
                <video controls>
                    <source src={videoPost} type="video/mp4" />
                    <source src={videoPost} type="video/ogg" />
                </video> */}
        
        <div className="bottom-content">
          <div className="bottom-content-left">
            <Link to={"/user-profile"} className="router-Link">
              <p className="bottom-content-left__File-details">
                <span className="file-name">{fileName}</span> under{" "}
                <span className="posted-file-location">
                  {postedFileCategory}
                </span>
              </p>
            </Link>
          </div>
          <div className="bottom-content-right">
            <Link to={"/user-profile/profile/edit-profile"}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDeleteClick()}>Delete</button>
            <button onClick={() => handleLikeUnlikeClick()}>
              {like ? <p>Like</p> : <p>Unlike</p>}
            </button>
          </div>
        </div>
      </div>

      <div id="c-Page-PopUp__Supporting-Content" className="c-Page-PopUp__Supporting-Content">
        {/* The comments bubbles and likes are to go here */}
        <p>The comments bubbles and likes are to go here</p>
      </div>
    </div>
  );
};

export default PagePopUp;
