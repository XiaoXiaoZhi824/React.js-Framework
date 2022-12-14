import React, { Component, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const Login = lazy(() => import('./pages/login'));
const Admin = lazy(() => import('./pages/admin'));

export default class App extends Component {
  render() {
    return (
      <section className="app">
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/' component={Admin}></Route>
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}
