import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()

let userData =  {
  name: '',
  email: '',
  password: ''

}
   const [data, setdata] = useState(userData);
 
   
  let handlevent = (e) =>{
console.log(e.target.value);
let name  = e.target.name;
let val = e.target.value;

setdata({...data, [name]: val })
  
  }

  console.log(data);

  const handleSubmit = (e)=>{
e.preventDefault();

if(data.name == '' || data.email == '' || data.password == ''){
alert('Please Enter a Detail')
} else {
let getData =  JSON.parse(localStorage.getItem('user') || '[]');
let arr = [];
arr = [...getData];
arr.push(data)

localStorage.setItem('user', JSON.stringify(arr))
alert('Sign up successfully')
navigate('login')
}







  }
  

  
  return (
    <div className="w-full h-full transition-all duration-300">
        <Navbar/>
      <div className="w-full h-full p-12">
        <form action="" onSubmit={handleSubmit} className="shadow-gray-700 shadow-lg p-10 w-[400px] text-center md:w-[40%]">
          <div>
            <h1 className="text-3xl font-semibold tracking-tighter m-4 border-b inline-block">Sign Up</h1>
          </div >
          <div className="account flex flex-col justify-center content-center gap-5">
            <input className="px-5 py-4 outline-none tracking-tighter  shadow-gray-700 shadow-sm rounder-md overflow-hidden text-xl" type="text" name="name" placeholder="Enter your name" onChange={handlevent} />
            <input className="px-5 py-4 outline-none tracking-tighter shadow-gray-700 shadow-sm rounder-md overflow-hidden text-xl" type="email" name="email" placeholder="Enter your Email" onChange={ handlevent} />
            <input className="px-5 py-4 outline-none tracking-tighter shadow-gray-700 shadow-sm rounder-md overflow-hidden text-xl" type="password" name="password" placeholder="Enter your password" onChange={ handlevent} />
            <p className="tracking-tighter text-[25px] my-8 whitespace-nowrap">Already have an account ?  <Link to='login' className="text-blue-950 underline tracking-normal font-sans" >Login</Link> </p>
          </div>
<button className="bg-blue-950 hover:bg-blue-700 transition-all duration-300 text-white py-3  w-[50%] text-2xl rounded-lg">Sign up</button>

        </form>
      </div>
      
    </div>
  );
};

export default SignUp;


