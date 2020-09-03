import React, { useState, useEffect } from 'react';
import * as usersRemote from '../../remote/users.remote';
import { withRouter, RouteComponentProps } from 'react-router';
import { User } from '../../models/User';
import '../Login/login.component.css'
import { useHistory } from 'react-router';
import Background from '../../background/gallery-8.png';


export const LoginComponent:React.FC = ()=>{
   
    const history = useHistory(); // Access history for Login redirect
    
    //const [reimbursements, setReimbursements] = useState<User[]>([]); /**SET PAGE DATA HERE */

    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [inputUsertName, setInputUsertName] = useState('');
    const [inputPassword, setinputPassword] = useState('');

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleWindowResize);
      return () => {            
        window.removeEventListener('resize', handleWindowResize);  
      }
    }, []);



	  let response: any;
    const setInformation = async () => {
    
    setInputUsertName(''); //clear fields
    setinputPassword('');

    localStorage.setItem('userName', response.data.userName);
    localStorage.setItem('roleID', response.data.roleID); 
    localStorage.setItem('accessToken', response.data.accessToken); 

    if (localStorage.getItem('userName') === 'EmployeeUser') {
      history.push('/employee');
    }else if(localStorage.getItem('userName') === 'ManagerUser'){
      history.push('/manager');
    }else{
      history.push('/'); //route path to app.ts
    }
    
  }

  const addUser = async () => {
    const payload = {
        userID: undefined, 
        userRole: undefined,
        userName: inputUsertName,
        userPassword: inputPassword
    };
    try {
      response = await usersRemote.createToken(payload); //Send POST
      await setInformation();
    } catch {
      alert('Invalid username or password');
    }
  }
    

    //  const loadCredentails = () => {   

    //    usersRemote.getAllUserTable().then(user => { 
    //     setReimbursements(user);
    //     console.log('Recieved authentication request: ', user);
    //     });        
    // };

    return(
      <div>
        <div id="background" style={{backgroundImage: `url(${Background})` }}>  
          <main className="main-container">

          {/* <label>username</label><input type="text" name="text" value={inputUsertName} onChange={e => setInputUsertName(e.target.value)}/>
          
          <label>password</label><input type="password" name="password" value={inputPassword} onChange={e => setinputPassword(e.target.value)}/>
          
          <button onClick={() => addUser()}>Submit</button> */}

            <section className="login-container">

              {/* Semantic-ui form*/}
              <div className="ui form">
                <div className="field width-container">
                  <label><h1 className="font-white">Trip</h1></label>
                  <label><span className="font-grey">Corporate Travel & Expense</span></label>
                  
                  <input type="text" name="first-name" placeholder="Username"  value={inputUsertName} onChange={e => setInputUsertName(e.target.value)}/>
                </div>
                <div className="field width-container">
                  <input type="password" name="last-name" placeholder="Password" value={inputPassword} onChange={e => setinputPassword(e.target.value)}/>
                </div>
                <button className="ui button width-container button-color" type="submit" onClick={() => addUser()}>Submit</button>
                <div className="field">
              {/* <div className="ui checkbox">
                <input type="checkbox" className="hidden" /> */}
                
                <label> <a href="https://github.com/chriscastaneda/rev-p1-expense-reimbursement-system#anchor" style={{color: "rgb(15, 15, 15)"}} target="_blank">
                  Forgot password? </a></label>
                <label><span className="font-white"> Not a member?</span> <a href="https://github.com/chriscastaneda/rev-p1-expense-reimbursement-system#anchor" style={{color: "rgb(15, 15, 15)"}} target="_blank">
                    Join now </a></label>
              {/* </div> */}
              
                </div>
              </div>
            </section>

            <section>
              <footer className="footer font-color"> </footer>
            </section> 
          </main>
        </div>



            {/* <table className="table table-striped">
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
            </table> */}






{/* <section id="main-container">        
        <div id="login-container">


<div className="Panel">
<div className="ui middle aligned center aligned grid">
  <div className="column">
    <h2 className="ui teal image header">
      <img src="assets/images/logo.png" className="image"/>
      <div className="content">
        Log-in to your account
      </div>
    </h2>
    <form className="ui large form">
      <div className="ui stacked segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address"/>
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" placeholder="Password"/>
          </div>
        </div>
        <div className="ui fluid large teal submit button">Login</div>
      </div>

    </form>

  
  </div>
</div>
</div>
</div>
</section> */}



        </div>
    );
};