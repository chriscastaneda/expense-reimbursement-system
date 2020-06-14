import React, { useState, useEffect } from 'react';
import * as usersRemote from '../../remote/users.remote';
import { withRouter, RouteComponentProps } from 'react-router';
import { User } from '../../models/User';
import '../Login/login.component.css'


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
{/* 
<div className="wrapper fadeInDown">
  <div id="formContent">
    {/* <!-- Tabs Titles --> */}

    {/* <!-- Icon --> */}
    {/* <div className="fadeIn first">
      <img src="https://www.b-cube.in/wp-content/uploads/2014/05/aditya-300x177.jpg" id="icon" alt="User Icon" />
      <h1>Aditya News</h1>
    </div> */}

    {/* <!-- Login Form --> */}
    {/* <form>
      <input type="text" id="login" className="fadeIn second" name="login" value={inputUsertName} onChange={e => setInputUsertName(e.target.value)} placeholder="username" />

      <input type="text" id="password" className="fadeIn third" name="login" value={inputPassword} onChange={e => setinputPassword(e.target.value)} placeholder="password" />
      
    </form>
    <input type="submit" className="fadeIn fourth" value="Log In" onClick={() => addUser()} /> */}

    {/* <!-- Remind Passowrd --> */}
    {/* <div id="formFooter">
      <a className="underlineHover">Welcome Back</a>
    </div>

  </div>
</div>  */}








            <label>username</label><input type="text" name="text" value={inputUsertName} onChange={e => setInputUsertName(e.target.value)}/>
            
            <label>password</label><input type="password" name="password" value={inputPassword} onChange={e => setinputPassword(e.target.value)}/>
            
            <button onClick={() => addUser()}>Submit</button>

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">userName</th>
                        <th scope="col">password</th>
                    </tr>
                </thead>
                <tbody>
                    {reimbursements.map(u => {
                        return (
                            <tr key={u.id}>
                            <td>{u.userName}</td>
                            <td>{u.password}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
};

//History as a prop
export default withRouter(LoginComponent);