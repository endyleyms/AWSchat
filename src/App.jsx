import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './Pages/SingUp'
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp/>
      <Login/>
    </>
  )
}

export default App
