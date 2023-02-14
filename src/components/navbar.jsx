import React from 'react'

export default function Navbar() {
    return (
        <div className='nav'>
            <div className="navSection">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text"  id="search" placeholder='Search' />
            </div>
        </div>
    )
}
