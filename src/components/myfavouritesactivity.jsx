import React from 'react'
import AllMemberComponent from './allmembercomponent'

export default function MyFavouritesActivity() {
    return (
        <div>
            <p style={{"padding":"0px 5vw"}}>Favs</p>
            <AllMemberComponent/>
            <AllMemberComponent/>
            <AllMemberComponent/>
            <AllMemberComponent/>
        </div>
    )
}
