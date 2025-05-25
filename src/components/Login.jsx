  import React, { useContext, useState } from 'react'
  import { useNavigate, Link } from 'react-router-dom';
  import { AppContext } from '../App';

  const Login = () => {
    const { setUser} = useContext(AppContext);
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('')
    const navigate = useNavigate();

    const handelclick=(e)=>{
      e.preventDefault();
        if (email && password){
          setUser({
            user: "uno",  
            email: email,
            password: password,

          });
          navigate("/");
        }
    }
    return (
      <div>
          <div>
              <h1 className='text-4xl font-bold text-center'>Login Page</h1>
              <form className='flex flex-col items-center justify-center h-screen'>
              <div className='text-2xl font-semibold'>Email:</div>
                  <input type="text" placeholder='Username' value={email} onChange={(e)=>setEmail(e.target.value)} className='border w-[400px] border-black rounded-md p-2 m-2'/>
                  <div className='text-2xl font-semibold'>Password:</div>
                  <input type="password" placeholder='Password' value={password}
              onChange={(e) => setPassword(e.target.value)} className='border w-[400px] border-black rounded-md p-2 m-2'/>
  <Link to="/"> 
  <button   onClick={handelclick} className='bg-blue-600 text-white rounded-md p-2 m-2'>Login</button>
  </Link>
              </form>
          </div>
          <div className='flex justify-center ' > <Link to="/signup"> <button className='bg-blue-600 text-white rounded-md p-2 m-2'>signup </button></Link></div>
      </div>
    )
  }

  export default Login;