import React, { useState, useEffect } from 'react';
import './accounts.component.css';
import * as userRemote from '../../remote/users.remote';

export const EmployeeReimburseComponent: React.FC = () => {
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

    useEffect(() => {
        loadPeople();   
    }, []);

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

        const response = await userRemote.createUser(payload);  /**SEND REQUEST HERE */
        // setInputeimbID(0); //clear fields
        setInputAmount(0); //clear fields
        setInputSumitDate(''); //clear fields
        setInputResolvedDate(''); //clear fields
        setInputDescription(''); //clear fields
        setInputReciept(''); //clear fields
        setInputAuthorID(0); //clear fields
        setInputResolverID(0); //clear fields
        setInputStatusID(0); //clear fields
        setInputType(0); //clear fields

        loadPeople(); /**GET REQUEST HERE */
    }

    const loadPeople = () => {  /**REFRESH PAGE HERE */
        userRemote.getAllReimbursements().then(reimburse => {
            // console.log(reimburse);
            return true;
        });        
    };

    return (
        <div>
            <h2>Add Reimbursement</h2>

            <form>
            {/* <label>ReimbId:</label><input type="number" value={inputReimbID} onChange={(e) => setInputeimbID(+e.target.value) }/> */}
            <label>Amount:</label><input type="number" value={inputAmount} onChange={(e) => setInputAmount(+e.target.value) }/>
            <label>Submission</label><input type="date" value={inputSumitDate} onChange={(e) => setInputSumitDate(e.target.value) }/>
            <label>resolved::</label><input type="date" value={inputResolvedDate} onChange={(e) => setInputResolvedDate(e.target.value) }/>
            <label>Description:</label><input type="text" value={inputDescription} onChange={(e) => setInputDescription(e.target.value) }/>
            <label>Reciept:</label><input type="text" value={inputReciept} onChange={(e) => setInputReciept(e.target.value) }/>
            <label>authorId::</label><input type="number" value={inputAuthorID} onChange={(e) => setInputAuthorID(+e.target.value) }/>
            <label>resolverId::</label><input type="number" value={inputResolverID} onChange={(e) => setInputResolverID(+e.target.value) }/>
            <label>statusId::</label><input type="number" value={inputStatusID} onChange={(e) => setInputStatusID(+e.target.value) }/>
            <label>Type:</label><input type="number" value={inputType} onChange={(e) => setInputType(+e.target.value) }/>
            
            <button onClick={() => addUser()}>Submit</button>
            </form>
        </div>
    );
}