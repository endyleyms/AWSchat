import { useState } from "react";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import UserPool from '/src/AWS/UserPool.js';
import { useNavigate } from 'react-router-dom';
import './Login.css'


const Login = () => {
  const [username, setUserName]= useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

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
    navigate('/chat');
  }


  return (
    <div className="login-container">
      <div className="form-section">
        <form  className="form" onSubmit={handleLogin}>
          <label>
            <input className="input-form" placeholder="Email:" type="email" name="email" value={username} onChange={(e)=>setUserName(e.target.value)}/>
          </label>
          <br />
          <label>
            <input className="input-form" placeholder="Password:" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </label>
          <br />
          <button className="button" type="submit">Login</button>
          <br />
          <p>Don't have an account? Sing Up <a className="enlace" href="/">here</a>.</p>
        </form>
      </div>
      <div className="info-section">
        <h1>WELCOME</h1>
        <img src="/src/assets/nuatechnology_logo.png" alt="Logo Nua" />
        <h2>Automatiza la experiencia de tus clientes</h2>
        <span>Potencia tu área de marketing, ventas o servicio, con un partner centrado en las interacciones de alto valor.</span>
      </div>
    </div>
  )
}

export default Login
