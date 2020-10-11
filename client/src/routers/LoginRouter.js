import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Auth from '../hoc/auth'
import LoginPage from '../components/views/LoginPage/LoginPage'
import RegisterPage from '../components/views/RegisterPage/Registerpage'

import '../App.css'

function LoginRouter() {
  return (
    <div>
      <Switch>    
        <Route exact path="/" component={Auth(RegisterPage, false)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
      </Switch>
    </div>
  );
}

export default LoginRouter;
