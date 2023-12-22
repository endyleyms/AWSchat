import { useState } from "react";
import UserPool, {getAttributeList, getCognitoUser} from '/src/AWS/UserPool.js';
import { useNavigate } from 'react-router-dom';
import './SingUp.css'
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();


const SignUp = () => {
 const [username, setUserName]= useState('');
 const [email, setMail]= useState('');
 const [phone, setPhone]= useState('');
 const [password, setPassword]= useState('');
 const [dataConfirm, setData] = useState();
 const [code, setCode] = useState();

  const navigate = useNavigate();

  const handleCreateUser = async ()=>{
    try {
      const createUser = await client.graphql({
        query: mutations.createUser,
        variables: { input: {email: email, username: username} }
      });
      console.log('data',createUser)
    } catch (error) {
      console.error(error)
    }

  }

  const handleSubmit = (e) => {
    //datos requeridos para hacer el proceso de registro
    const attributes = [
      {
        Name: 'email',
        Value: email,
      },
      {
        Name: 'phone_number',
        Value: phone,
      }
    ]
    e.preventDefault();
    //se usa la funcion creada en UserPool.js
    const attributeList = getAttributeList(attributes);
    //funcion de cognito que crea el usuario, recibiendo como parametros los datos y un callback para manejo de asincronia
    UserPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data.user.username)
        setData(data.user.username)
      }
    });
    handleCreateUser();
    navigate('/chat');
  };

  // const handleConfirmRegister  = async () =>{
  //   const cognitoUser = getCognitoUser(dataConfirm );
  //   cognitoUser.confirmRegistration(code, true, function(err, result) {
  //       if (err) {
  //           alert(err.message || JSON.stringify(err));
  //           return;
  //       }
  //   });
  // }

  return (
    <div className="singup-container">
      <div className="form-section">
        <form className="form" onSubmit={handleSubmit} aria-label="sing up fomr">
          <label aria-label="input section">
            <input className="input-form" placeholder="Username:" type="text" name="username" value={username} onChange={(e)=>setUserName(e.target.value)} />
          </label>
          <br />
          <label aria-label="input section">
            <input className="input-form" placeholder="Email:" type="email" name="email" value={email} onChange={(e)=>setMail(e.target.value)} />
          </label>
          <br />
          <label aria-label="input section">
            <input className="input-form" placeholder="Phone: +57number" type="phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </label>
          <br />
          <label aria-label="input section">
            <input className="input-form" placeholder="Password:" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </label>
          <br />
          <button className="button" type="submit">Sign Up</button>
          <br />
          <p>Already have an account? Log in <a className="enlace" href="/login">here</a>.</p>
        </form>
      </div>
      {/* <form onSubmit={handleSignUpConfirmation}>
        <label>
          Code:
          <input type="name" name="code" value={code} onChange={(e)=>setCode(e.target.value)}/>
        </label>
        <br />
        <button type="submit">Confirm</button>
      </form> */}
      <div className="info-section" aria-label="information section">
        <h1>WELCOME</h1>
        <img src="/src/assets/nuatechnology_logo.png" alt="Logo Nua" />
        <h2>Automatiza la experiencia de tus clientes</h2>
        <span>Potencia tu área de marketing, ventas o servicio, con un partner centrado en las interacciones de alto valor.</span>
      </div>
    </div>
  )
}

export default SignUp
