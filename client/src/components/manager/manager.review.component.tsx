import React, { useState, useEffect } from 'react';
import '../manager/manager.review.component.css';
import '../employee/accounts.component.css';
import * as userRemote from '../../remote/users.remote';
import { ApprovalRead } from '../../models/ApprovalRead';


import { Modal, Button, Form } from 'react-bootstrap'; 


export const ManagerReviewComponent: React.FC = () => {
    const [approvalRead, setApprovalRead] = useState<ApprovalRead[]>([]); //Set data to page

    const [inputReimbID, setInputeimbID] = useState(0);
    // const [inputResolvedDate, setInputResolvedDate] = useState('');
    const [inputStatusID, setInputStatusID] = useState(3);


    const [modalVisible, setModalVisible] = useState(false); /**Modal */

    useEffect(() => {
        loadPeople();   
    }, [])

    const addUser = async () => {
        let SetDate = new Date(); /**SET DATE HERE */
        const payload = {
            reimbId: inputReimbID,
            // amount: undefined,
            // sumitDate: string | undefined,
            resolvedDate: SetDate,  
            // description: undefined,
            // reciept: undefined,
            authorId: 2, //get from logalstorage
            resolverId: 1, //get from localStorage 
            statusId: inputStatusID,
            // type: undefined
            //dto communication request:::
        };

        setModalVisible(true) /**OPEN MODAL HERE */

        await userRemote.updateAllManagerRequests(payload);  /**SEND REQUEST HERE */
        setInputStatusID(0); //clear fields

        
        

        loadPeople(); /**GET REQUEST HERE */
    }

    const loadPeople = () => {  /**REFRESH PAGE HERE */
        userRemote.getAllManagerRequests().then(approvalRead => {
            setApprovalRead(approvalRead);
            console.log(approvalRead);
        });        
    };
    
    return (
        <div>

<p id="table-padding">Employee Request</p>


<table className="ui compact celled definition table">
  <thead className="full-width">
    <tr>
      
      <th id="id-padding">#</th>
      <th>Amount</th>
      <th>Submission</th>
      <th>Resolved</th>
      <th>Description</th>
      <th>Reciept</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Status</th>
      <th>type</th>
      <th id="checkbox"></th>
      <th id="checkbox"></th>
    </tr>
  </thead>

  
  <tbody>
  
    
    
    
    
   
  

     
      {approvalRead.map(u => {
                        return (
                            
                        <tr key={u.reimbId}>
                             
                            <th className="id-padding" scope="row">{u.reimbId}</th>
                            <td>{u.amount}</td>
                            <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                            <td>{typeof u.resolvedDate == 'string' ? u.resolvedDate : u.resolvedDate.toDateString()}</td>
                            <td>{u.description}</td>
                            <img id="img-size" src={u.reciept}></img>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.reimbStatus}</td>
                            <td>{u.reimbType}</td>



                            <td id="id-padding" className="collapsing">
        <div className="ui fitted checkbox ">
          <input value="1" onChange={(e) => setInputStatusID(+e.target.value)} type="radio" name="status"/> <label></label>
        </div>
      </td>

      <td id="id-padding" className="collapsing">
        <div className="ui fitted checkbox ">
          <input value="2" onChange={(e) => setInputStatusID(+e.target.value)}  type="radio" name="status"/> <label></label>
        </div>
      </td>
                            
                        </tr>)
                    })}
    
    
  </tbody>
  <tfoot className="full-width">
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      
      <th >
        <div id="button-color1" className="ui small  button" onClick={() => addUser()}>
          Approve
        </div>
      </th>
      <th >
        <div id="button-color2" className="ui small  button" onClick={() => addUser()}>
          Deny
        </div>
      </th>

    </tr>
  </tfoot>
</table>

{/* react-bootstrap components  */}
             <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                <Modal.Header>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>"Review Updated"</Form.Label>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalVisible(false)}>Close</Button>
                </Modal.Footer>
            </Modal> 



{/* <table className="ui celled table">
  <thead className="ui inverted grey table">
    <tr>
      <th>#</th>
      <th>Amount</th>
      <th>Submission</th>
      <th>Resolved</th>
      <th>Description</th>
      <th>Reciept</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Status</th>
      <th>type</th>
      <th></th>
      <th></th>
    </tr>
  </thead> */}

{/*
  <tbody>
     <tr>
      <td>Jill</td>
      <td>Denied</td>
      <td className="selectable">
        <a href="#">Edit</a>
      </td>
    </tr>
    <tr className="warning">
      <td>John</td>
      <td>No Action</td>
      <td className="selectable warning">
        <a href="#">Requires change</a>
      </td>
    </tr> */}
    {/* <tr>
        
      <td>Jamie</td>
      <td className="positive">Approved</td>
      <td className="selectable positive">
        <a href="#">Approve</a>
      </td>
    </tr>
    <tr>
      <td>Jill</td>
      <td className="negative">Denied</td>
      <td className="selectable negative">
        <a href="#">Remove</a>
      </td>
    </tr> */}

{/* 



{approvalRead.map(u => {
                        return (
                            <tr key={u.reimbId}>
                            <th scope="row">{u.reimbId}</th>
                            <td>{u.amount}</td>
                            <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                            <td>{typeof u.resolvedDate == 'string' ? u.resolvedDate : u.resolvedDate.toDateString()}</td>
                            <td>{u.description}</td>
                            <img src={u.reciept}></img>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.reimbStatus}</td>
                            <td>{u.reimbType}</td>
                            <td className="selectable positive">
                                <a href="#">Approve</a>
                            </td>
                            <td className="selectable negative">
                                <a href="#">Remove</a>
                            </td>
                        </tr>)
                    })}
  </tbody>
</table> */}


          
          
          
          
{/*           
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
                        <th scope="col">Reciept</th>
                        <th scope="col">type</th>
                    </tr>
                </thead> */}
                {/* <tbody>
                    {approvalRead.map(u => {
                        return (
                            <tr key={u.reimbId}>
                            <th scope="row">{u.reimbId}</th>
                            <td>{u.amount}</td>
                            <td>{typeof u.sumitDate == 'string' ? u.sumitDate : u.sumitDate.toDateString()}</td>
                            <td>{typeof u.resolvedDate == 'string' ? u.resolvedDate : u.resolvedDate.toDateString()}</td>
                            <td>{u.description}</td>
                            <img src={u.reciept}></img>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.reimbStatus}</td>
                            <td>{u.reimbType}</td>
                            <td className="positive">Approved</td>
                            <td className="negative">Denied</td>
                        </tr>)
                    })}
                </tbody> */}
            {/* </table>

            <form>
            <label>ReimbId:</label><input type="number" value={inputReimbID} onChange={(e) => setInputeimbID(+e.target.value) }/> */}
                            {/* <label>resolvedDate::</label><input type="date" value={inputResolvedDate} onChange={(e) => setInputResolvedDate(e.target.value) }/> */}
            {/* <label>statusId:</label><input type="number" value={inputStatusID} onChange={(e) => setInputStatusID(+e.target.value) }/>
            
            
            <button onClick={() => addUser()}>Submit</button>
            </form> */}

            

        </div>
    );
};