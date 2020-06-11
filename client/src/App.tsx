import React from 'react';
import './App.css';
import LoginComponent from './components/Login/login.componet';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AccountComponent } from './components/employee/accounts.component';
import NavbarComponent from './components/employee/navbar.component';
import { EmpolyeeDashboardComponent } from './components/employee/employee.dashboard.component';
import { EmployeeReimburseComponent } from './components/employee/employee.reimburse.component';
import { ManagerDashboardComponent } from './components/manager/manager.dashboard.component';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavbarComponent />
        <LoginComponent />
        <main>
          <Switch>
            <Route path="/employee">
              <EmpolyeeDashboardComponent />
            </Route>
            <Route path="/reimburse">
              <EmployeeReimburseComponent />
              </Route>
              <Route path="/manager">
              <ManagerDashboardComponent />
              </Route>
            <Route path="/template">
              <AccountComponent />
            </Route>
          </Switch>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
