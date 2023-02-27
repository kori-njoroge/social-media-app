import React from "react";
import "../styles/people-page-body.css"
import userDp from "../images/member.jpg"
import SearchComponent from "./search.component";
import PageNavTab from "./page-nav-tab.component";
import PeopleCard from "./people-card.component";

let Friendships= () => {

    /*
        TODO("Implement the sorting component design for this page ")
    
    */

    /*The below object is to be replaced with props passed from
    the PeoplePage component. It would probaly be a list of objects;
     'mapping' would be required
    */

     let PEOPLE_CARD_CONTENT = {
        userDp: userDp,
        friendsCount: 0,
        groupsCount: 4,
        userName: "John Doe",
        lastSeenDuration: "32 min"
    }

    let PAGE_NAV_BAR_ITEM_CONTENT = {
        title: "Active Members",
        count: 15,
    }

    console.log(userDp);
    console.log("hello",PEOPLE_CARD_CONTENT.userDp);


    return(
        <div className="photos-page">
            <SearchComponent
                placeholder="Search Media"
            />
            <hr />
            {/* Listing to be done from here */}
             <PeopleCard 
                userDp={PEOPLE_CARD_CONTENT.userDp}
                friendsCount={PEOPLE_CARD_CONTENT.friendsCount}
                userName={PEOPLE_CARD_CONTENT.userName}
                groupsCount={PEOPLE_CARD_CONTENT.groupsCount}
                lastSeenDuration={PEOPLE_CARD_CONTENT.lastSeenDuration}
        />
        </div>

    )  
}

export default Friendships