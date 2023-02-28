import React from "react";
import { useState } from "react";
import "../styles/video-page-body.css"
import videoPost from "../videos/Big_Buck_Bunny_1080_10s_1MB.mp4"
import userDp from "../images/member.jpg"
import VideoCard from "./video-card.component";
import PageNavTab from "./page-nav-tab.component";
import SearchComponent from "./search.component";
import PagePopUp from "./page-popup.component";

let VideoPageBody = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(true);
        console.log("VideoCardOpened");
      }
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log("VideoCardClosed");
      }


      let popUpModalStyle = {
        display: isModalOpen ? "block" : "none",
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
        // border: '1px solid red'
      };


    


     /*The below object is to be replaced with props passed from
    the PhotosPage component. It would probaly be a list of objects;
     'mapping' would be required
    */

     let VIDEO_CARD_CONTENT = {
        videoPost: videoPost,
        userDP: userDp,
        userName: "John Doe",
        fileName: "chealsea previously tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
        postedFileCategory: "Wall Post",
    }

    let PAGE_NAV_BAR_ITEM_CONTENT = {
        title: "All Videos",
        count: 15,
    }

    return(
        <div className="photos-page">
        <PageNavTab
            title={PAGE_NAV_BAR_ITEM_CONTENT.title}
            count={PAGE_NAV_BAR_ITEM_CONTENT.count}
        />
        <SearchComponent
            placeholder="Search Media"
        />
        <hr />
        {/* Listing to be done from here */}
         <VideoCard 
            userName={VIDEO_CARD_CONTENT.userName}
            userDP={VIDEO_CARD_CONTENT.userDP}
            videoSource={VIDEO_CARD_CONTENT.videoPost}
            onVideoCardClick={() => handleOpenModal()}
         />

<div style={popUpModalStyle}>
      <PagePopUp
        mainContent={<video controls src={VIDEO_CARD_CONTENT.videoPost} />} 
        captionText={VIDEO_CARD_CONTENT.userName} 
        fileName={VIDEO_CARD_CONTENT.fileName} 
        postedFileCategory={VIDEO_CARD_CONTENT.postedFileCategory} 
        isModalOpen={isModalOpen}
        onModalClose={() => handleCloseModal()}
      />
      </div>
    </div>
    )
}

export default VideoPageBody