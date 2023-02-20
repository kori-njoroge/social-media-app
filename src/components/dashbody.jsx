import React from 'react'
import '../styles/navbar.css'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import PhotosPageBody from './photos-page-body'
import VideoPageBody from './video-page-body'
import PeoplePageBody from './people-page-body'

export default function Dashbody() {

    return (
        <div className='dashbody'>
            <Navbar />
            <Outlet />
        </div>
    )
}

