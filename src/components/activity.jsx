import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/activity.css'

export default function Activity() {

    const [activityTabs, setTabs] = useState(
        [
            'All Members', 'My Groups', 'My Favorites', 'Mentions '
        ])
    return (
        <div className='activityComponent'>
            <div className="activityTabs">
                {activityTabs && activityTabs.map((tab, index)=>(
                    <Link to={`${tab}`} key={index} className='activityTabLink'>{tab}</Link>
                ))}
            </div>
            <hr />
        </div>
    )
}
