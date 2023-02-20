import React, { useState } from 'react'
import '../styles/allmembersactivity.css'
import AllMemberComponent from './allmembercomponent';

export default function AllMembersActivity() {
    
    return (
        <div className=''>
            <p style={{"padding":"0px 5vw"}}>All</p>
            <AllMemberComponent />
            <AllMemberComponent />
            <AllMemberComponent />
            <AllMemberComponent />
            <AllMemberComponent />
            <AllMemberComponent />
            <AllMemberComponent />
        </div>
    )
}
