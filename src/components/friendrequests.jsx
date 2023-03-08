import React from "react";
import "../styles/people-page-body.css"
import userDp from "../images/member.jpg"
import SearchComponent from "./search.component";
import PageNavTab from "./page-nav-tab.component";
import PeopleCard from "./people-card.component";


let FriendRequests = () => {

    /*
        TODO("Implement the sorting component design for this page ")
    
    */

    /*The below object is to be replaced with props passed from
    the PeoplePage component. It would probaly be a list of objects;
     'mapping' would be required
    */

    let FRIEND_REQUEST_CONTENT = {
        userDp: userDp,
        friendsCount: 0,
        groupsCount: 4,
        userName: "John Doe",
        lastSeenDuration: "32 min",
        buttonTitle: "Accept Frienship"

    }

    let PAGE_NAV_BAR_ITEM_CONTENT = {
        title: "Active Members",
        count: 15,
    }

    console.log(userDp);
    console.log("hello", FRIEND_REQUEST_CONTENT.userDp);


    return (
        <div className="photos-page">
            <hr />
            {/* Listing to be done from here */}
            <PeopleCard
                userDp={FRIEND_REQUEST_CONTENT.userDp}
                friendsCount={FRIEND_REQUEST_CONTENT.friendsCount}
                userName={FRIEND_REQUEST_CONTENT.userName}
                groupsCount={FRIEND_REQUEST_CONTENT.groupsCount}
                lastSeenDuration={FRIEND_REQUEST_CONTENT.lastSeenDuration}
                buttonTitle={FRIEND_REQUEST_CONTENT.buttonTitle}
            />
        </div>

    )
}

export default FriendRequests