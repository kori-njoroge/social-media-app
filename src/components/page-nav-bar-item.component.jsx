import React from "react";
import "../styles/page-nav-bar-item.component.css"


let PageNavBarItem = ({title, count, onNavBarItemClicked}) => {
    
    //TODO("write logic to hide the count when it equals to zero, and display it otherwise")
    return(
        <div className="c-Page-Nav-Bar-Item" onClick={onNavBarItemClicked}>
            <h3 className="c-Page-Nav-Bar-Item__Title">{title}</h3>
            <div className="c-Page-Nav-Item__Count" >{count}</div>
        </div>
    )
}

export default PageNavBarItem
