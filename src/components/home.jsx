import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <p>home</p>
            <Link to={'/signup'}> <button>Sign up</button> </Link>
        </div>
    )
}
