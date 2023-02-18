import React from "react";
import "../styles/page-nav-tab-item.component.css"


let PageNavTabItem = ({title, count, onNavBarItemClicked}) => {
    
    //TODO("write logic to hide the count when it equals to zero, and display it otherwise")
    return(
        <div className="c-Page-Nav-Tab-Item" onClick={onNavBarItemClicked}>
            <h3 className="c-Page-Nav-Tab-Item__Title">{title}</h3>
            <div className="c-Page-Nav-Tab-Item__Count" >{count}</div>
        </div>
    )
}

export default PageNavTabItem
