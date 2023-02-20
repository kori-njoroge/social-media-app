import React from "react";
import PageNavTabItem from "./page-nav-tab-item.component";
import "../styles/page-nav-tab.component.css"

let PageNavTab = ({title, count}) => {

    return(
        <div className="c-Page-Nav-Tab">
            <li>
                <PageNavTabItem 
                    title={title}
                    count={count}
                />
            </li>

            <hr />
        </div>
    )
}

export default PageNavTab