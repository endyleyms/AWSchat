import { useState } from "react";
import UserPool, {getAttributeList, getCognitoUser} from '/src/AWS/UserPool.js';


const SignUp = () => {
 const [username, setUserName]= useState('');
 const [mail, setMail]= useState('');
 const [phone, setPhone]= useState('');
 const [password, setPassword]= useState('');
 const [dataConfirm, setData] = useState();
 const [code, setCode] = useState();


  const handleSubmit = (e) => {
    //datos requeridos para hacer el proceso de registro
    const attributes = [
      {
        Name: 'email',
        Value: mail,
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
  };

  const handleConfirmRegister  = async () =>{
    const cognitoUser = getCognitoUser(dataConfirm );
    cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={(e)=>setUserName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={mail} onChange={(e)=>setMail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      {/* <form onSubmit={handleConfirmRegister}>
        <label>
          Code:
          <input type="name" name="code" value={code} onChange={(e)=>setCode(e.target.value)}/>
        </label>
        <br />
        <button type="submit">Confirm</button>
      </form> */}
    </div>
  )
}

export default SignUp
