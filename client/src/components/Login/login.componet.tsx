import React, { useState, useEffect } from 'react';
import * as usersRemote from '../../remote/users.remote';
import { withRouter, RouteComponentProps } from 'react-router';


const LoginComponent:React.FC<RouteComponentProps> = (props)=>{
   

    //Access history
    let history = props.history
    
    const [inputUsertName, setInputUsertName] = useState('');
    const [inputPassword, setinputPassword] = useState('');

    // useEffect(() => {
    //     loadCredentails();
    // }, [])

    const addUser = async () => {
        const payload = {
            username: inputUsertName,
            userPassword: inputPassword,
            userRole: undefined
        };

      //const response: AccessToken = await usersRemote.createToken(payload); //SEnd POST
      const response = await usersRemote.createToken(payload); //SEnd POST
    
        
       // console.log(payload);

        // setInputUsertName(''); //clear fields
        // setinputPassword('');
        loadCredentails(response.data.token);
    }


     const loadCredentails = (response:string) => {
       console.log('LoadCreds function hit');
       localStorage.setItem('accessToken', response);
       
       
       
    //    usersRemote.createToken().then(()=> {
    //         localStorage.setItem('accessToken', json)
    //     });        
    };

    // usersRemote.getAllUsers();
    // usersRemote.getToken();

    return(
        <div>
            <label>email</label><input type="text" name="email" value={inputUsertName} onChange={e => setInputUsertName(e.target.value)}/>
            
            <label>password</label><input type="password" name="password" value={inputPassword} onChange={e => setinputPassword(e.target.value)}/>
            
            <button onClick={() => addUser()}>Submit</button>
        </div>
    );
};

//History as a prop
export default withRouter(LoginComponent);