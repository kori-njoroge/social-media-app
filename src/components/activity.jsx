import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/activity.css'

export default function Activity({ outlet }) {
    const[isActive,setActive]= useState(false)
    const [activityTabs, setTabs] = useState(
        [
            'all members', 'my groups', 'my favorites', 'my friends '
        ])
    return (
        <div className='activityComponent'>
            <div className="activityTabs">
                {activityTabs && activityTabs.map((tab, index) => (
                    <Link to={`${tab}`} key={index} className={`activityTabLink ${isActive? 'active' : ''}`} onClick={()=>setActive(true)}>{tab}</Link>
                ))}
            </div>
            <hr />
        </div>
    )
}
