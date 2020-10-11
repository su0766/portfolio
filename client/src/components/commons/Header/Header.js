import React from 'react'
import { Route, Link } from 'react-router-dom';

import Auth from './hoc/auth'
import AboutPage from './components/views/HeaderPage/AboutPage'
import SkillPage from './components/views/HeaderPage/SkillPage'
import ContactPage from './components/views/HeaderPage/ContactPage'
import DashBoard from './components/views/HeaderPage/Dashboard'
import MainPage from './components/views/LandingPage/MainPage'

import './Header.css'

function Header() {
    return (
        <div style={{width:'100%', margin:'0'}}>
            <ul class="nav-container">
                <li class="nav-item"><Link to="/main">Home</Link></li>
                <li class="nav-item"><Link to="/about">About</Link></li>
                <li class="nav-item"><Link to="/skill">Skills</Link></li>
                <li class="nav-item"><Link to="/contact">Contact</Link></li>
            </ul>
            <hr />
            <Route exact path="/main" component={Auth(MainPage, null)}/>
            <Route exact path="/about" component={Auth(AboutPage, null)}/>
            <Route exact path="/skill" component={Auth(SkillPage, null)}/>
            <Route exact path="/contact" component={Auth(ContactPage, null)}/>
            <Route exact path="/dashboard" component={Auth(DashBoard, null)}/>
        </div>
    )
}

export default Header