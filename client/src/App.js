import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

import MainPage from './components/views/LandingPage/MainPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/Registerpage'
import Auth from './hoc/auth'
import DetailPage from './components/views/DetailPage/DetailPage'
import AboutPage from './components/views/HeaderPage/AboutPage'
import DashBoard from './components/views/HeaderPage/Dashboard'
import Header from './components/commons/Header/Header'
import Footer from './components/commons/Footer/Footer'

function App() {
  return (
    <Router>
    <div>
      <hr />
      <Header/>
      <Switch>
        <Route exact path="/" component={Auth(RegisterPage, false)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/main" component={Auth(MainPage, null)}/>
        <Route exact path="/detail/:reportId" component={Auth(DetailPage, null)}/>
        <Route exact path="/about" component={Auth(AboutPage, null)}/>
        <Route exact path="/dashboard" component={Auth(DashBoard, null)}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
