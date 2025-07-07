import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [message, setmessage] = useState('');
let navigate = useNavigate()


  let handleInput = (e) => {
  let value = e.target.value;
  let name = e.target.name;
  if('email' == name){
setemail(value)
  } if('password' == name){
setpassword(value)

}


  }

  const handleSubmit = (e) => {
e.preventDefault();

if(email == '' || password == ''){
alert('Enter Your Detail')
} else {


let getDetails = JSON.parse(localStorage.getItem('user'));
console.log(getDetails);
{getDetails.map((curr)=>{
  console.log(curr.email);
  let storeMail = curr.email;
  let storePassword = curr.password
  
  if(storeMail == email && storePassword == password){
alert('login successfully');
navigate('/home')
  } else {
return setmessage('Invalid Email or password')
  }
})

}




  }
}

  return (
   <div className="w-full h-full">
    <Navbar/>
      <div className="w-full h-full p-12">
       
           <p className='text-center bg-blue-800 text-white text-2xl font-semibold tracking-tighter m-auto w-[300px] mb-4'>{message}</p>
       
       
        <form onSubmit={handleSubmit} action="" className="shadow-gray-700 shadow-lg p-10 w-[400px] m-auto text-center bg-white">
          <div>
            <h1 className="text-3xl font-semibold tracking-tighter m-4 border-b inline-block">Login</h1>
          </div >
          <div className="account flex flex-col justify-center content-center gap-5">
            <input className="px-5 py-4 outline-none tracking-tighter shadow-gray-700 shadow-sm rounder-md overflow-hidden text-xl" type="email" name="email" placeholder="Enter your Email"  onChange={handleInput}/>
            <input className="px-5 py-4 outline-none tracking-tighter shadow-gray-700 shadow-sm rounder-md overflow-hidden text-xl" type="password" name="password" placeholder="Enter your password"  onChange={handleInput}/>
            <p className="tracking-tighter text-[25px] my-8 ">SignUp Here ? <Link to='/' className="text-blue-950 underline tracking-normal font-sans" >SignUp</Link></p>
          </div>
<button className="bg-green-900 hover:bg-green-700 transition-all duration-300 text-white py-3  w-[50%] text-2xl rounded-lg">Login</button>

        </form>
      </div>
      
    </div>
  )
}

export default Login
