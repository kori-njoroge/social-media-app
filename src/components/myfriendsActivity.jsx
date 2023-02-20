import React from 'react'
import AllMemberComponent from './allmembercomponent'

export default function MyFriendsActivity() {
    return (
        <div>
            <p style={{"padding":"0px 5vw"}}>friends</p>
            <AllMemberComponent/>
            <AllMemberComponent/>
            <AllMemberComponent/>
        </div>
    )
}
