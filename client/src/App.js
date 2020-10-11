import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Auth from './hoc/auth'
import MainPage from './components/views/LandingPage/MainPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/Registerpage'
import AboutPage from './components/views/HeaderPage/AboutPage'
import SkillPage from './components/views/HeaderPage/SkillPage'
import ContactPage from './components/views/HeaderPage/ContactPage'
import DashBoard from './components/views/HeaderPage/Dashboard'

import Footer from './components/commons/Footer/Footer'
import LoginRouter from './routers/LoginRouter'
import DefaultRouter from './routers/DefaultRouter'
import './App.css'

function App() {
  return (
    <Router>
    <div>
        <LoginRouter/>
        <DefaultRouter/>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
