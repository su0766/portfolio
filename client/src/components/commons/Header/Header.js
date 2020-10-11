import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div style={{width:'100%', margin:'0'}}>
            <ul className="nav-container">
                <li className="nav-item"><Link to="/main">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/skill">Skills</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
                <p/>
            </ul>
        </div>
    )
}

export default Header