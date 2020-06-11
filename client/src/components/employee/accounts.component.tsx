import React, { useState, useEffect } from 'react';
import './accounts.component.css';
import * as userRemote from '../../remote/users.remote';
import { Reimburse } from '../../models/Reimburse';


import { Modal, Button, Form } from 'react-bootstrap';


export const AccountComponent: React.FC = () => {
    const [reimburse, setReimburse] = useState<Reimburse[]>([]); //Set data to page

    // const [inputReimbID, setInputeimbID] = useState(0);
    const [inputAmount, setInputAmount] = useState(0);
    const [inputSumitDate, setInputSumitDate] = useState('');
    const [inputResolvedDate, setInputResolvedDate] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputReciept, setInputReciept] = useState('');
    const [inputAuthorID, setInputAuthorID] = useState(0);
    const [inputResolverID, setInputResolverID] = useState(0);
    const [inputStatusID, setInputStatusID] = useState(0);
    const [inputType, setInputType] = useState(0);


    const [modalVisible, setModalVisible] = useState(false);
   
    useEffect(() => {
        loadPeople();   
    }, [])

    const addUser = async () => {
        const payload = {
            // reimbId: inputReimbID,
            amount: inputAmount,
            sumitDate: inputSumitDate,
            resolvedDate: inputResolvedDate,
            description: inputDescription,
            reciept: inputReciept,
            authorId: inputAuthorID,
            resolverId: inputResolverID,
            statusId: inputStatusID,
            type: inputType
        };

        await userRemote.createUser(payload);  /**SEND REQUEST HERE */
        // setInputeimbID(''); //clear fields
        setInputAmount(0); //clear fields
        setInputSumitDate(''); //clear fields
        setInputResolvedDate(''); //clear fields
        setInputDescription(''); //clear fields
        setInputReciept(''); //clear fields
        setInputAuthorID(0); //clear fields
        setInputResolverID(0); //clear fields
        setInputStatusID(0); //clear fields
        setInputType(0); //clear fields

        setModalVisible(false) /*CLOSE HERE*/

        loadPeople(); /**GET REQUEST HERE */
    }

    const loadPeople = () => {  /**REFRESH PAGE HERE */
        userRemote.getAllReimbursements().then(reimburse => {
            setReimburse(reimburse);
        });        
    };

    
    return (
        <div>
            {/* BootStrap Table */}
            <header>
                <h2 id="accounts-header" className="dark">Accounts Section 
                    <button 
                        className="btn btn-success"
                        onClick={() => setModalVisible(true)}
                        >Add Person</button>
                </h2>
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
                    {reimburse.map(u => {
                        return (<tr key={u.reimbId}>
                            <th scope="row">{u.reimbId}</th>
                            <td>{u.amount}</td>
                            <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                            <td>{typeof u.resolvedDate == 'string' ? u.resolvedDate : u.resolvedDate.toDateString()}</td>
                            <td>{u.description}</td>
                            <td>{u.authorId}</td>
                            <td>{u.resolverId}</td>
                            <td>{u.statusId}</td>
                            <td>{u.type}</td>
                        </tr>)
                    })}
                </tbody>
            </table>


            {/* react-bootstrap components  */}
            <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                <Modal.Header>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    {/* <Form.Group>  
                            <Form.Label> ReimbID:::</Form.Label>
                            <Form.Control type="number" value={inputReimbID} onChange={(e) => setInputeimbID(+e.target.value) } />
                        </Form.Group> */}
                        <Form.Group>
                            <Form.Label> Amount:</Form.Label>
                            <Form.Control type="number" value={inputAmount} onChange={(e) => setInputAmount(+e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Submission:</Form.Label>
                            <Form.Control type="date" value={inputSumitDate} onChange={(e) => setInputSumitDate(e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>resolved::</Form.Label>
                            <Form.Control type="date" value={inputResolvedDate} onChange={(e) => setInputResolvedDate(e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description:</Form.Label>
                            <Form.Control type="text" value={inputDescription} onChange={(e) => setInputDescription(e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Reciept:</Form.Label>
                            <Form.Control type="text" value={inputReciept} onChange={(e) => setInputReciept(e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>authorId::</Form.Label>
                            <Form.Control type="number" value={inputAuthorID} onChange={(e) => setInputAuthorID(+e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>resolverId::</Form.Label>
                            <Form.Control type="number" value={inputResolverID} onChange={(e) => setInputResolverID(+e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>statusId::</Form.Label>
                            <Form.Control type="number" value={inputStatusID} onChange={(e) => setInputStatusID(+e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Type:</Form.Label>
                            <Form.Control type="number" value={inputType} onChange={(e) => setInputType(+e.target.value) } />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalVisible(false)}>Close</Button>
                    <Button onClick={() => addUser()}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};