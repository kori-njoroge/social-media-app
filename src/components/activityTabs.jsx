import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AllMembersActivity from './allmembersactivity';
import MyFavouritesActivity from './myfavouritesactivity';
import MyFriendsActivity from './myfriendsActivity';
import MyGroupsActivity from './mygroupsactivity';

export default function ActivityTabs() {
    const { route } = useParams();
    const [component, setComponent] = useState('');
    useEffect(() => {
        if (route === 'all members') {
            setComponent(<AllMembersActivity />)
        } else if(route === 'my groups'){
            setComponent(<MyGroupsActivity/>)
        } else if(route === 'my favorites'){
            setComponent(<MyFavouritesActivity/>)
        } else if(route === 'my friends'){
            setComponent(<MyFriendsActivity/>)
        }
    }, [route])

    return (
        <div>
            {component}
        </div>
    )
}
