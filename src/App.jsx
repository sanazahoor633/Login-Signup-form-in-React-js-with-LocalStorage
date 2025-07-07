import React from 'react'
import SignUp from './Components/loginsignup/SignUp'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/loginsignup/Home'
import Login from './Components/loginsignup/login'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<SignUp/>}/>
         <Route path='login' element={<Login/>}/>
          <Route path='home' element={<Home/>}/>
      </Routes>
     
    </div>
  )
}

export default App
