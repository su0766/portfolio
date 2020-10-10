import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div style={{width:'100%', margin:'0'}}>
            <ul class="nav-container">
                <li class="nav-item"><Link to="/main">Home</Link></li>
                <li class="nav-item"><Link to="/about">About</Link></li>
                <li class="nav-item"><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </div>
    )
}

export default Header