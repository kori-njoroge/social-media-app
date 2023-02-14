import React from 'react'
import '../styles/navbar.css'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'

export default function Dashbody() {
    return (
        <div className='dashbody'>
            <Navbar />
            <Outlet />
            <div>Dashbody home tnbadgjhsgfsbfjh sdhhjfgjshfsj lahdjhdudf suyfhjdsjshf </div>
        </div>
    )
}
