import React from 'react'
import SideBar from './sideBar'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import '../styles/dashboard.css'
import Members from './members'
import Hashtags from './hashtags'



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
                        <Outlet />
                    </div>
                    <div className="containerRight">
                        <Members />
                        <Hashtags />
                    </div>
                </div>
            </div>
        </div>
    )
}

