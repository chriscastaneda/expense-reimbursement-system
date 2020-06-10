import React, { useState, useEffect } from 'react';
import * as peopleRemote from '../../remote/people.remote';
import { Person } from '../../models/Person';
import './accounts.component.css';
// import { Modal, Button, Form } from 'react-bootstrap';

export const AccountComponent: React.FC = () => {
    const [users, setUsers] = useState<Person[]>([]);

    const [inputFirstName, setInputFirstName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputBirthdate, setInputBirthdate] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

   
    useEffect(() => {
        loadPeople();
    }, [])

    const addUser = async () => {
        const payload = {
            firstName: inputFirstName,
            lastName: inputLastName,
            birthdate: inputBirthdate
        };

        await peopleRemote.createPerson(payload);
        setInputBirthdate('');
        setInputFirstName('');
        setInputLastName('');
        setModalVisible(false)
        // loadPeople();
    }

    const loadPeople = () => {
        peopleRemote.getAllPeople().then(() => {
            // setUsers(people);
            console.log('LoadPeople')
        });        
    }


    return (
        <div>
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
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Birth Date</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => {
                        return (<tr key={u.id}>
                            <th scope="row">{u.id}</th>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{typeof u.birthdate == 'string' ? 
                                    u.birthdate : 
                                    u.birthdate.toDateString()}</td>
                        </tr>)
                    })}
                </tbody>
            </table>

            {/* react-bootstrap components 
            <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                <Modal.Header>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" value={inputFirstName} onChange={(e) => setInputFirstName(e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" value={inputLastName} onChange={(e) => setInputLastName(e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Birthdate:</Form.Label>
                            <Form.Control type="date" value={inputBirthdate} onChange={(e) => setInputBirthdate(e.target.value) } />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalVisible(false)}>Close</Button>
                    <Button onClick={() => addUser()}>Submit</Button>
                </Modal.Footer>
            </Modal>*/}
        </div>
    );
}