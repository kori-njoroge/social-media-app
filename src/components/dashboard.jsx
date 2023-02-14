import React from 'react'
import SideBar from './sideBar'
import '../styles/sidebar.css'
import Dashbody from './dashbody'
// import { Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className='dashdash'>
            <div className="sidebar">
                <SideBar />
            </div>
                <Dashbody />
        </div>
    )
}

