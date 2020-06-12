import React, { useState, useEffect } from 'react';
import * as usersRemote from '../../remote/users.remote';
import { withRouter, RouteComponentProps } from 'react-router';
import { User } from '../../models/User';


const LoginComponent:React.FC<RouteComponentProps> = (props)=>{
   
    //Access history
    let history = props.history
    
    const [reimbursements, setReimbursements] = useState<User[]>([]); /**SET PAGE DATA HERE */

    const [inputUsertName, setInputUsertName] = useState('');
    const [inputPassword, setinputPassword] = useState('');

    useEffect(() => {
        loadCredentails();
    }, []);

    const addUser = async () => {
        const payload = {
            userID: undefined, 
            userRole: undefined,
            userName: inputUsertName,
            userPassword: inputPassword
        };

      const response = await usersRemote.createToken(payload); //SEnd POST
        // setInputUsertName(''); //clear fields
        // setinputPassword('');
        const userID = response.data.userID;
        const userRole = response.data.roleID;
        const accessToken = response.data.accessToken;
       
        localStorage.setItem('userID', userID);
        localStorage.setItem('userRole', userRole);
        localStorage.setItem('accessToken', accessToken); 
        // usersRemote.getAllUserTable();

        loadCredentails();
    };


     const loadCredentails = () => {   

       usersRemote.getAllUserTable().then(user => { 
        setReimbursements(user);
        });        
    };

    return(
        <div>
            <label>username</label><input type="text" name="text" value={inputUsertName} onChange={e => setInputUsertName(e.target.value)}/>
            
            <label>password</label><input type="password" name="password" value={inputPassword} onChange={e => setinputPassword(e.target.value)}/>
            
            <button onClick={() => addUser()}>Submit</button>

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">userName</th>
                        <th scope="col">password</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">email</th>
                        <th scope="col">roleId</th>
                    </tr>
                </thead>
                <tbody>
                    {reimbursements.map(u => {
                        return (
                            <tr key={u.id}>
                            <th scope="row">{u.id}</th>
                            <td>{u.userName}</td>
                            <td>{u.password}</td>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.email}</td>
                            <td>{u.roleId}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
};

//History as a prop
export default withRouter(LoginComponent);