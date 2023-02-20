import React from "react";
import Photocard from "./photo-card.component";
import "../styles/photos-page-body.css"
import imagePost from "../images/dummy-post-pic-250x250.jpeg"
import userDp from "../images/member.jpg"
import SearchComponent from "./search.component";
import PageNavTab from "./page-nav-tab.component";


let PhotosPageBody = () => {

    /*The below object is to be replaced with props passed from
    the PhotosPage component. It would probaly be a list of objects;
     'mapping' would be required
    */

    let IMAGE_CARD_CONTENT = {
        imagePost: imagePost,
        userDP: userDp,
        userName: "John Doe"
    }

    let PAGE_NAV_BAR_ITEM_CONTENT = {
        title: "Active Photos",
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
             <Photocard 
                imagePost={IMAGE_CARD_CONTENT.imagePost}
                userDP={IMAGE_CARD_CONTENT.userDP}
                userName={IMAGE_CARD_CONTENT.userName}
        />
        </div>
    )

}

export default PhotosPageBody 