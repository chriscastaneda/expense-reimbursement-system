import React, { useState, useEffect } from 'react';
import './accounts.component.css';

import * as userRemote from '../../remote/users.remote';
import { Dashboard } from '../../models/Dashboard';
import { EmployeePending } from '../../models/EmployeePending';

// import { Modal, Button, Form } from 'react-bootstrap';


export const EmpolyeeDashboardComponent: React.FC = () => {
    const [reimbursements, setReimbursements] = useState<Dashboard[]>([]); /**SET PAGE DATA HERE */
    const [pending, setPending] = useState<EmployeePending[]>([]); /**SET PAGE DATA HERE */

    // const [inputFirstName, setInputFirstName] = useState('');
    // const [inputLastName, setInputLastName] = useState('');
    // const [inputBirthdate, setInputBirthdate] = useState('');

    // const [modalVisible, setModalVisible] = useState(false);
   
    useEffect(() => {
        loadPeople();     
    }, [])

    const loadPeople = () => {
        userRemote.getAllEmployeeDashboard().then(dashboard => { 
            setReimbursements(dashboard);
        });  
        userRemote.getAllEmployeePending().then(pending => {
            setPending(pending);
        });     
    } 

    
    return (
        <div>
            <header>
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
                    {reimbursements.map(u => {
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
                    </tr>
                </thead>
                <tbody>
                    {pending.map(u => {
                        return (
                            <tr key={u.reimbId}>
                                <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                                <td>{u.type}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
};