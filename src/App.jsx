import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import SignUp from './Pages/SingUp/SingUp'
import Login from './Pages/Login/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
