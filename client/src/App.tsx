import React, { lazy, Suspense } from 'react';
import './App.css';
import LoginComponent from './components/Login/login.componet';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AccountComponent } from './components/employee/accounts.component';
import NavbarComponent from './components/employee/navbar.component';
import { EmpolyeeDashboardComponent } from './components/employee/employee.dashboard.component';
import { EmployeeReimburseComponent } from './components/employee/employee.reimburse.component';
import { ManagerDashboardComponent } from './components/manager/manager.dashboard.component';
import { ManagerReviewComponent } from './components/manager/manager.review.component';

// const ManagerDashboardComponent = lazy(() => import('./components/manager/manager.dashboard.component').then(({ManagerDashboardComponent}) => ({default: ManagerDashboardComponent})))

function App() {
// const isManager = localStorage.getItem('roleID') == '1';
  return (
    <div className="App">
      <HashRouter>
        <NavbarComponent />
        {/* <p>User Role: { isManager ? 'Manager' : 'Employee' }</p> */}
        <LoginComponent />
        <main>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Switch>
          <Route path="/login">
            <LoginComponent />
              </Route>
              <Route path="/employee">
              <EmpolyeeDashboardComponent />
              </Route>
              <Route path="/reimburse">
              <EmployeeReimburseComponent />
              </Route>
              <Route path="/manager">
              <ManagerDashboardComponent />
              {/* {isManager ? <ManagerDashboardComponent /> : <Redirect to="/login"/> } */}
              </Route>
              <Route path="/review">
              <ManagerReviewComponent />
              </Route>
            <Route path="/template">
              <AccountComponent />
            </Route>
          </Switch>
          {/* </Suspense> */}
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
