import React from "react";
import PageNavBarItem from "./page-nav-bar-item.component";
import "../styles/page-nav-bar.component.css"

let PageNavBar = () => {




    let PAGE_NAV_BAR_ITEM_CONTENT = {
        title: "Active Photos",
        count: 15,
        

    }

    return(
        <div className="c-Page-Nav-Bar">
            <li>
                <PageNavBarItem 
                    title={PAGE_NAV_BAR_ITEM_CONTENT.title}
                    count={PAGE_NAV_BAR_ITEM_CONTENT.count}
                />


            </li>


            <hr />
        </div>
        

    )
}

export default PageNavBar