import React, { lazy, Suspense } from 'react';
import './App.css';
// import { LoginComponent } from './components/Login/login.component';
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { AccountComponent } from './components/employee/accounts.component';
import NavbarComponent from './components/employee/navbar.component';
// import { EmpolyeeDashboardComponent } from './components/employee/employee.dashboard.component';
import { EmployeeReimburseComponent } from './components/employee/employee.reimburse.component';
import { ManagerDashboardComponent } from './components/manager/manager.dashboard.component';
import { ManagerReviewComponent } from './components/manager/manager.review.component';



const LoginComponent = lazy(() => import('./components/Login/login.component').then(({LoginComponent}) => ({default: LoginComponent})));
const EmpolyeeDashboardComponent = lazy(() => import('./components/employee/employee.dashboard.component').then(({EmpolyeeDashboardComponent}) => ({default: EmpolyeeDashboardComponent})));


function App() {
  // const isEmployee = localStorage.getItem('userName') === 'EmployeeUser';
  // const isManager = localStorage.getItem('userName') === 'ManagerUser';

  return (
    <HashRouter>
    <div className="App">
        {/* <p>User Role: { isEmployee ? 'Employee' : 'Manager/OTHER' }</p> */}
        <main>
        <Suspense fallback={<div>Loading...</div>}>

          <Switch>
              <Route exact path="/">
                <LoginComponent />
              </Route>
              
              {/* <Route path="/redirect">
              { isEmployee ? (<Redirect to="/employee"/>) : 
                (isManager ? (<Redirect to="/manager"/>) : <Redirect to="/"/> )
              }
              </Route> */}

              <React.Fragment>
              <NavbarComponent />
              
              <Route path="/employee">
                <EmpolyeeDashboardComponent />
              </Route>
              <Route path="/reimburse">
                <EmployeeReimburseComponent />
              </Route>


              <Route path="/manager">
                <ManagerDashboardComponent />
              </Route>
              <Route path="/review">
                <ManagerReviewComponent />
              </Route>
            {/* <Route path="/template">
              <AccountComponent />
            </Route> */}
            </React.Fragment>
          </Switch>
          </Suspense>
        </main>
    </div>
    </HashRouter>
  );
}

export default App;
