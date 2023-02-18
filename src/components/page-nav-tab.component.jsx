import React from "react";
import PageNavTabItem from "./page-nav-tab-item.component";
import "../styles/page-nav-tab.component.css"

let PageNavTab = () => {

    let PAGE_NAV_BAR_ITEM_CONTENT = {
        title: "Active Photos",
        count: 15,
    }

    return(
        <div className="c-Page-Nav-Tab">
            <li>
                <PageNavTabItem 
                    title={PAGE_NAV_BAR_ITEM_CONTENT.title}
                    count={PAGE_NAV_BAR_ITEM_CONTENT.count}
                />
            </li>

            <hr />
        </div>
    )
}

export default PageNavTab