import React, { useState, useEffect } from 'react';
import '../employee/accounts.component.css';
import '../manager/manager.dashboard.component.css'
import * as userRemote from '../../remote/users.remote';
import { Dashboard } from '../../models/Dashboard';
import { ManagerPending } from '../../models/MangerPending';


// import { Modal, Button, Form } from 'react-bootstrap'; 


export const ManagerDashboardComponent: React.FC = () => {
    const [employees, setEmployees] = useState<Dashboard[]>([]); /**SET PAGE DATA HERE */
    const [pending, setPending] = useState<ManagerPending[]>([]); /**SET PAGE DATA HERE */

    // const [inputFirstName, setInputFirstName] = useState('');
    // const [inputLastName, setInputLastName] = useState('');
    // const [inputBirthdate, setInputBirthdate] = useState('');

    // const [modalVisible, setModalVisible] = useState(false);
   
    useEffect(() => {
        loadPeople();     
    }, [])

    const loadPeople = () => {
        userRemote.getAllManagerDashboard().then(dashboard => { 
            setEmployees(dashboard);
            // console.log(dashboard);
        });  
        userRemote.getAllManagerPending().then(pending => {
            setPending(pending);
            console.log(pending);
        });     
    } 


   
    
    return (
        <div>
            <section id="main-container">        
                <div id="dashboard-container">

                    {/* Semantic */}
                    <p id="page-label">Reimbursements </p>  
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
                                <th>Employee</th>
                                <th>Status</th>
                                <th>Type</th>
                            </tr>
                            </thead>
            
                            <tbody>
                                {employees.map(u => {
                                    return (
                                        <tr key={u.reimbId}>
                                        <th scope="row" className="id-padding">{u.reimbId}</th>
                                        <td>{u.amount}</td>
                                        <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                                        <td>{typeof u.resolvedDate == 'string' ? u.resolvedDate : u.resolvedDate.toDateString()}</td>
                                        <td>{u.description}</td>
                                        <td>{u.firstName} {u.lastName}</td>
                                        <td className="selectable positive">{u.status}</td>
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
                                </tr>
                            </tfoot>
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
                                            <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                                            <td >{u.type}</td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section> 

            {/* <header>
                <h2 id="accounts-header" className="dark">Accounts Section</h2>
            </header>

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Submission</th>
                        <th scope="col">Resolved</th>
                        <th scope="col">Description</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">type</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(u => {
                        return (
                            <tr key={u.reimbId}>
                            <th scope="row">{u.reimbId}</th>
                            <td>{u.amount}</td>
                            <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                            <td>{typeof u.resolvedDate == 'string' ? u.resolvedDate : u.resolvedDate.toDateString()}</td>
                            <td>{u.description}</td>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.status}</td>
                            <td>{u.type}</td>
                        </tr>)
                    })}
                </tbody>
            </table>

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Submission</th>
                        <th scope="col">type</th>
                        <th scope="col">Employee</th>
                    </tr>
                </thead>
                <tbody>
                    {pending.map(u => {
                        return (
                            <tr key={u.reimbId}>
                                <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                                <td>{u.type}</td>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                            </tr>)
                        })}
                </tbody>
            </table> */}
        </div>
    );
};