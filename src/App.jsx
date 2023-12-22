import { BrowserRouter, Route, Routes, Navigate, Outlet  } from "react-router-dom";
import './App.css'
import SignUp from './Pages/SingUp/SingUp'
import Login from './Pages/Login/Login'
import Chat from "./Pages/Chat/Chat";

//configuration aws
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import amplifyconfig from '.amplifyconfiguration.json';
Amplify.configure(amplifyconfig);
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/chat" element={<Chat/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App

// function App({ signOut, user }) {
//   return (
//     <>
//       <h1>Hello {user.username}</h1>
//       <button onClick={signOut}>Sign out</button>
//     </>
//   );
// }

// export default withAuthenticator(App);
