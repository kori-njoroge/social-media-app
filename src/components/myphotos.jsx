import React from "react";
import { useState } from "react";
import Photocard from "./photo-card.component";
import "../styles/photos-page-body.css";
import imagePost from "../images/dummy-post-pic-250x250.jpeg";
import userDp from "../images/member.jpg";
import SearchComponent from "./search.component";
import PageNavTab from "./page-nav-tab.component";
import PagePopUp from "./page-popup.component";


let MyPhotos = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(true);
        console.log("PhotoCardOpened");
      }
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log("PhotoCardClosed");
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

    

 

  let IMAGE_CARD_CONTENT = {
    imagePost: imagePost,
    userDP: userDp,
    userName: "John Doe",
    fileName: "chealsea previously tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
    postedFileCategory: "Wall Post",
  };

  let PAGE_NAV_BAR_ITEM_CONTENT = {
    title: "Active Photos",
    count: 15,
  };

  return (
    <div className="photos-page"  >
      <PageNavTab
        title={PAGE_NAV_BAR_ITEM_CONTENT.title}
        count={PAGE_NAV_BAR_ITEM_CONTENT.count}
      />
      <SearchComponent placeholder="Search Media" />
      <hr />
      {/* Listing to be done from here */}
      <Photocard
        imagePost={IMAGE_CARD_CONTENT.imagePost}
        userDP={IMAGE_CARD_CONTENT.userDP}
        userName={IMAGE_CARD_CONTENT.userName}
        onPhotoCardClick={() => handleOpenModal()}
      />

      <div style={popUpModalStyle}>
      <PagePopUp
        mainContent={<img src={IMAGE_CARD_CONTENT.imagePost} />}
        captionText={IMAGE_CARD_CONTENT.userName}
        fileName={IMAGE_CARD_CONTENT.fileName}
        postedFileCategory={IMAGE_CARD_CONTENT.postedFileCategory}
        isModalOpen={isModalOpen}
        onModalClose={() => handleCloseModal()}
      />
      </div>
      
    </div>
  );
};

export default MyPhotos;
