import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Auth from '../hoc/auth'
import MainPage from '../components/views/LandingPage/MainPage'
import AboutPage from '../components/views/HeaderPage/AboutPage'
import SkillPage from '../components/views/HeaderPage/SkillPage'
import ContactPage from '../components/views/HeaderPage/ContactPage'
import DashBoard from '../components/views/HeaderPage/Dashboard'

import '../App.css'
import Header from '../components/commons/Header/Header';

function DefaultRouter() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path="/main" component={MainPage}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/skill" component={SkillPage}/>
    <Route exact path="/contact" component={ContactPage}/>
    </Switch>
      {/* <Route exact path="/dashboard" component={DashBoard}/> */}
    </div>
  );
}

export default DefaultRouter;
