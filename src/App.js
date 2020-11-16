import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import projectDetails from './components/projects/ProjectDetails';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
