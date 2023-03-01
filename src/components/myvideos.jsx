import React from "react";
import "../styles/video-page-body.css"
import videoPost from "../videos/Big_Buck_Bunny_1080_10s_1MB.mp4"
import userDp from "../images/member.jpg"
import VideoCard from "./video-card.component";
import PageNavTab from "./page-nav-tab.component";
import SearchComponent from "./search.component";

let MyVideos = () => {

     /*The below object is to be replaced with props passed from
    the PhotosPage component. It would probaly be a list of objects;
     'mapping' would be required
    */

     let VIDEO_CARD_CONETENT = {
        videoPost: videoPost,
        userDP: userDp,
        userName: "John Doe"
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
            userName={VIDEO_CARD_CONETENT.userName}
            userDP={VIDEO_CARD_CONETENT.userDP}
            videoSource={VIDEO_CARD_CONETENT.videoPost}
         />
    </div>
    )
}

export default MyVideos