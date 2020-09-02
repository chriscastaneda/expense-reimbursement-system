import React, { useState, useEffect } from 'react';
import '../employee/employee.dashboard.component.css';
import * as userRemote from '../../remote/users.remote';
import { Dashboard } from '../../models/Dashboard';
import { EmployeePending } from '../../models/EmployeePending';

// import { Modal, Button, Form } from 'react-bootstrap';


export const EmpolyeeDashboardComponent: React.FC = () => {
    const [reimbursements, setReimbursements] = useState<Dashboard[]>([]); /**SET PAGE DATA HERE */
    const [pending, setPending] = useState<EmployeePending[]>([]); /**SET PAGE DATA HERE */
   
    useEffect(() => {
        loadPeople();     
    }, [])

    const loadPeople = () => {
        userRemote.getAllEmployeeDashboard().then(dashboard => { 
            setReimbursements(dashboard);
            // const statusPening = dashboard.status == '3'
        });  
        userRemote.getAllEmployeePending().then(pending => {
            setPending(pending);
            console.log("Pending: ", pending);
        });     
    } 




    return (
    <div>


       <section id="main-container">        
        <div id="dashboard-container">

{/* Semantic */}
<p id="page-label">Reimbursements</p>  
        <div className="ui container">
  <div className="Panel"></div>

<table className="ui eight column table"  id="title-menu">
  <thead>
    <tr>
    <th id="id-padding">#</th>
    <th>Amount</th>
    <th>Submitted</th>
    <th>Resolved</th>
    <th>Description</th>
    <th>Manager</th>
    <th>Status</th>
    <th>Type</th>
  </tr>
  </thead>
 
  <tbody>
     {reimbursements.map(u => {
                        return (
                            <tr key={u.reimbId}>
                            <th scope="row" className="id-padding">{u.reimbId}</th>
                            <td>{u.amount}</td>
                            <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                            <td>{typeof u.resolvedDate == 'string' ? u.resolvedDate : u.resolvedDate.toDateString()}</td>
                            <td>{u.description}</td>
                            <td>{u.firstName} {u.lastName}</td>
                            <td >{u.status}</td>
                            <td>{u.type}</td>
                        </tr>)
                    })}
  </tbody>
  <tfoot>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th><strong>3 Submissions</strong></th>
    <th><strong>2 Approved</strong></th>
  </tr></tfoot>
</table>
</div>

</div>


<div id="pending-container">
<p id="page-label">Requests</p>  

<div className="ui container">
  <div className="Panel"></div>

  <table className="ui 1 column table">
  <thead>
    <tr className="id-padding">
    <th>Status: Pending</th>
  </tr>
  </thead>
  </table>

<table className="ui two column table">
  <thead>
    <tr className="id-padding">
    <th>Submitted</th>
    <th>Type</th>
  </tr>
  </thead>


  <tbody className="id-padding">
                    {pending.map(u => {
                        return (
                            <tr key={u.reimbId}>
                                <td className="warning">{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                                <td className="warning">{u.type}</td>
                            </tr>)
                    })}
                </tbody>

  
</table>
</div>
</div>
</section> 

        </div>




    );
};