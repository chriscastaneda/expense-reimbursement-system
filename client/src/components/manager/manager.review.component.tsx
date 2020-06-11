import React, { useState, useEffect } from 'react';
import '../employee/accounts.component.css';

import * as userRemote from '../../remote/users.remote';
import { ApprovalPatch } from '../../models/ApprovalPatch';
import { ApprovalRead } from '../../models/ApprovalRead';


// import { Modal, Button, Form } from 'react-bootstrap'; 


export const ManagerDashboardComponent: React.FC = () => {
    const [approvalRead, setApprovalRead] = useState<ApprovalRead[]>([]); //Set data to page

    const [inputReimbID, setInputeimbID] = useState(0);
    const [inputResolvedDate, setInputResolvedDate] = useState('');
    const [inputStatusID, setInputStatusID] = useState(3);


    useEffect(() => {
        loadPeople();   
    }, [])

    const addUser = async () => {
        const payload = {
            reimbId: inputReimbID,
            amount: undefined,
            sumitDate: undefined,
            resolvedDate: inputResolvedDate,
            description: undefined,
            reciept: undefined,
            authorId: 2, //get from logalstorage
            resolverId: 1, //get from localStorage 
            statusId: inputStatusID,
            type: undefined
        };

        await userRemote.updateAllManagerRequests(payload);  /**SEND REQUEST HERE */
        setInputStatusID(0); //clear fields

        loadPeople(); /**GET REQUEST HERE */
    }

    const loadPeople = () => {  /**REFRESH PAGE HERE */
        userRemote.getAllManagerRequests.then(approvalRead => {
            setApprovalRead(approvalRead);
        });        
    };
    
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
                    {approvalRead.map(u => {
                        return (
                            <tr key={u.reimbId}>
                            <th scope="row">{u.reimbId}</th>
                            <td>{u.amount}</td>
                            <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                            <td>{typeof u.resolvedDate == 'string' ? u.resolvedDate : u.resolvedDate.toDateString()}</td>
                            <td>{u.description}</td>
                            <td>{u.reciept}</td>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.statusId}</td>
                            <td>{u.type}</td>
                        </tr>)
                    })}
                </tbody>
            </table>

            <form>
            <label>ReimbId:</label><input type="number" value={inputReimbID} onChange={(e) => setInputeimbID(+e.target.value) }/>
            <label>resolved::</label><input type="date" value={inputResolvedDate} onChange={(e) => setInputResolvedDate(e.target.value) }/>
            <label>statusId:</label><input type="number" value={inputStatusID} onChange={(e) => setInputStatusID(+e.target.value) }/>
            
            
            <button onClick={() => addUser()}>Submit</button>
            </form>
        </div>
    );
};