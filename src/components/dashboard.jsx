import React from 'react'
import SideBar from './sideBar'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import '../styles/dashboard.css'
import Activity from './activity'

import MakePost from './makePost'

export default function Dashboard() {
    return (
        <div className='dashdash'>
            <div className="sidebar">
                <SideBar />
            </div>
            <div className='dashbody'>
            <Navbar />
            <div className="DashboardMiddleContainer">
                <div className="containerLeft">
                    <MakePost />
                    <Activity />
                </div>
                <div className="containerRight">
                    <p>Members</p>
                    <p>Hashtags</p>
                </div>
            </div>
            <Outlet />
        </div>
        </div>
    )
}

