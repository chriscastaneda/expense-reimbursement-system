import React, { useState, useEffect } from 'react';
import './accounts.component.css';
import './employee.reimburse.component.css'
import * as userRemote from '../../remote/users.remote';
import { Modal, Button, Form } from 'react-bootstrap'; 


export const EmployeeReimburseComponent: React.FC = () => {
    // const [inputReimbID, setInputeimbID] = useState(0);
    const [inputAmount, setInputAmount] = useState(0);
    // const [inputSumitDate, setInputSumitDate] = useState('');
    // const [inputResolvedDate, setInputResolvedDate] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    // const [inputReciept, setInputReciept] = useState('');
    // const [inputAuthorID, setInputAuthorID] = useState(0);
    // const [inputResolverID, setInputResolverID] = useState(0);
    // const [inputStatusID, setInputStatusID] = useState(0);
    const [inputType, setInputType] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);

    // Image Upload
    const [inputUpload, setInputUpload] = useState( {} ); 

    useEffect(() => {
        loadPeople();   
    }, []);

    const addUser = async () => {
        let SetDate = new Date(); /**SET DATE HERE */
        const payload = {
            // reimbId: inputReimbID,
            amount: inputAmount,
            sumitDate: SetDate, 
            resolvedDate: SetDate,
            description: inputDescription,
            reciept: inputUpload,
            authorId: 2,
            resolverId: 1,
            statusId: 3,
            type: inputType
        };

        console.log(payload);
        setModalVisible(true) /**OPEN MODAL HERE */


        const response = await userRemote.createUser(payload);  /**SEND REQUEST HERE */
        
        setInputAmount(0); //clear fields
        // setInputSumitDate(''); //clear fields
        // setInputResolvedDate(''); //clear fields
        setInputDescription(''); //clear fields
        // setInputReciept(''); //clear fields
        // setInputAuthorID(0); //clear fields
        // setInputResolverID(0); //clear fields
        // setInputStatusID(0); //clear fields
        setInputType(0); //clear fields

        setModalVisible(true) /**OPEN MODAL HERE */
        loadPeople(); /**GET REQUEST HERE */
    }

    const loadPeople = () => {  /**REFRESH PAGE HERE */
        userRemote.getAllReimbursements().then(reimburse => {
            return true;
        });        
    };

    const upload = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            setInputUpload(e.target.files[0]);
        }
    };



    return (
        <div>

            <div id="page-container">  
                <div id="card-container">
                    
                    {/* Semantic-UI */}
                    <p>Add Reimbursement</p>
                    <div className="ui card">
                        <div className="content">
                            <h4 className="ui sub header">How Was Your Trip?</h4>
                            <div className="content">

                            <div className="ui form">
                            <div className="field">
                                <label>Amount: </label>
                                <input type="number" value={inputAmount} onChange={(e) => setInputAmount(+e.target.value) } />
                            </div>
                            </div>

                            <div className="ui form">
                            <div className="field">
                                <label>Description</label>
                                <input type="text" value={inputDescription} onChange={(e) => setInputDescription(e.target.value) } placeholder="Company Lunch"/>
                            </div>
                            </div>

                            <div className="ui form">
                            <div className="field">
                                <label> Upload Reciept: </label>
                                        <input type="file" onChange={(e) => upload(e)}/>
                            </div>
                            </div>

                            <div className="ui form">
                            <div className="field">
                                <label>Travel Type: </label>
                            

                            <div className="grouped fields">
                                <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="type" value="1" onChange={(e) => setInputType(+e.target.value)} />
                                    <label>Lodging</label>
                                </div>
                                </div>
                                <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="type" value="2" onChange={(e) => setInputType(+e.target.value)} />
                                    <label>Travel</label>
                                </div>
                                </div>
                                <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="type" value="3" onChange={(e) => setInputType(+e.target.value)} />
                                    <label>Food</label>
                                </div>
                                </div>
                                <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="type" value="4" onChange={(e) => setInputType(+e.target.value)} />
                                    <label>Other</label>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                         

                            {/* <div className="header">Project Timeline</div>
                        </div>
                        <div className="content">
                            <h4 className="ui sub header">How Was Your Trip?</h4>
                            <div className="ui small feed">
                            <div className="event">
                                <div className="content">
                                <div className="summary">
                                    <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
                                </div>
                                </div>
                            </div>
                            <div className="event">
                                <div className="content">
                                <div className="summary">
                                    <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
                                </div>
                                </div>
                            </div>
                            <div className="event">
                                <div className="content">
                                <div className="summary">
                                    <a>Helen Troy</a> added two pictures
                                </div>
                                </div>
                            </div>*/}
                            </div> 
                        </div>
                        <div className="extra content">
                            <button className="ui basic button" onClick={() => addUser()}>
                                <i className=" user"></i>
                                    Submmit
                            </button>

                        </div>
                    </div>
                    </div>
                </div>
                


            {/* react-bootstrap components  */}
            <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                <Modal.Header>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>"Your reimbursement has been sent"</Form.Label>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalVisible(false)}>Close</Button> {/*CLOSE MODAL*/}
                </Modal.Footer>
            </Modal>










{/* 
            <h2>Add Reimbursement</h2>

            <form> */}
                    {/* <label>ReimbId:</label><input type="number" value={inputReimbID} onChange={(e) => setInputeimbID(+e.target.value) }/> */}
            {/* <label>Amount:</label><input type="number" value={inputAmount} onChange={(e) => setInputAmount(+e.target.value) }/>
            <label>Submission</label><input type="date" value={inputSumitDate} onChange={(e) => setInputSumitDate(e.target.value) }/>
            <label>resolved::</label><input type="date" value={inputResolvedDate} onChange={(e) => setInputResolvedDate(e.target.value) }/>
            <label>Description:</label><input type="text" value={inputDescription} onChange={(e) => setInputDescription(e.target.value) }/> */}
                    {/* <label>Reciept:</label><input type="text" value={inputReciept} onChange={(e) => setInputReciept(e.target.value) }/> */}
            {/* <label>authorId::</label><input type="number" value={inputAuthorID} onChange={(e) => setInputAuthorID(+e.target.value) }/>
            <label>resolverId::</label><input type="number" value={inputResolverID} onChange={(e) => setInputResolverID(+e.target.value) }/>
            <label>statusId::</label><input type="number" value={inputStatusID} onChange={(e) => setInputStatusID(+e.target.value) }/>
            <label>Type:</label><input type="number" value={inputType} onChange={(e) => setInputType(+e.target.value) }/>
            
            
            </form>
            <button onClick={() => addUser()}>Submit</button>
            <br/>

            <h3> aws s3 upload</h3>
            <input type="file" onChange={(e) => upload(e)}/> */}
        </div>
    );
}