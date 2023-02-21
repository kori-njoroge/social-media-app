import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/members.css'
import Member from './member'

export default function Members() {
    return (
        <div className='membersComponent'>
            <h3>Members</h3>
            <div className="membersNavs">
                <Link className='memb'>Newest</Link>
                <p className='memb' style={{ borderLeft: '1px solid #aaaabb ', display:'inline-block' }}></p>
                <Link className='memb'>Active</Link>
                <p className='memb' style={{ borderLeft: '1px solid #aaaabb ', display:'inline-block' }}></p>
                <Link className='memb'>Popular</Link>
            </div>
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
        </div>
    )
}
