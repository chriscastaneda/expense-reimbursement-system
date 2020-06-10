import React from 'react';
import './App.css';
import LoginComponent from './components/Login/login.componet';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AccountComponent } from './components/employee/accounts.component';
import NavbarComponent from './components/employee/navbar.component';
import { HomeComponent } from './components/employee/home.component';
import { LoanComponent } from './components/employee/loan.component';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* <LoginComponent /> */}
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/home">
              <HomeComponent />
            </Route>
            <Route path="/accounts">
              <AccountComponent />
            </Route>
            <Route path="/loans">
              <LoanComponent />
            </Route>
          </Switch>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
