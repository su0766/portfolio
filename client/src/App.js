import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import Auth from './hoc/auth'
import MainPage from './components/views/LandingPage/MainPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/Registerpage'
import DetailPage from './components/views/DetailPage/DetailPage'
import AboutPage from './components/views/HeaderPage/AboutPage'
import SkillPage from './components/views/HeaderPage/SkillPage'
import ContactPage from './components/views/HeaderPage/ContactPage'
import Footer from './components/commons/Footer/Footer'
import './App.css'

function App() {
  return (
    <Router>
    <div>
      <hr />
      <Switch>
        <Route exact path="/" component={Auth(RegisterPage, false)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/main" component={Auth(MainPage, null)}/>
        <Route exact path="/about" component={Auth(AboutPage, null)}/>
        <Route exact path="/skill" component={Auth(SkillPage, null)}/>
        <Route exact path="/contact" component={Auth(ContactPage, null)}/>
        <Route exact path="/detail/:reportId" component={Auth(DetailPage, null)}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
