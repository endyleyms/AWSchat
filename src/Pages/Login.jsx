import { useState } from "react";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import UserPool from '/src/AWS/UserPool.js';


const Login = () => {
  const [username, setUserName]= useState('');
  const [password, setPassword] = useState('');

  const user = new CognitoUser({
    Username: username,
    Pool: UserPool
  });
  const authDetails= new AuthenticationDetails({
    Username: username,
    Password: password
  });
  const handleLogin =(e)=>{
    e.preventDefault();
    user.authenticateUser(authDetails, {
      onSuccess: (data)=>{
        console.log("onSuccess: ", data)
      },
      onFailure:(err) => {
        console.error("onFailure: ", err)
      },
      newPasswordRequired: (data)=>{
        console.log("newPasswordRequiered: ", data)
      },
    });
  }


  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="name" name="email" value={username} onChange={(e)=>setUserName(e.target.value)}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <hr />
    </div>
  )
}

export default Login
