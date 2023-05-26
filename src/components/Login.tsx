import React from 'react'
import loginBg from '../assets/loginBg.png'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
  return (
    <div className='flex'>
        <img className=' w-1/2 max-h-screen' src={loginBg} alt="" />
        <div className=' w-1/2 flex items-center justify-center bg-theme-blue'>
            <div className=' flex flex-col items-center justify-center bg-white w-[504px] h-[543px] rounded-3xl'>
                <h1 className='font-bold text-5xl text-theme-blue mb-16'>Login</h1>
				<input 
				className='border my-3 w-10/12 p-2 h-14 rounded-lg placeholder:font-thin' type="text" 
				placeholder='Name and Surname' 
				/>
				<input 
				className='border my-3 w-10/12 p-2 h-14 rounded-lg placeholder:font-thin' type="text" 
				placeholder='Password'
				/>
				<button className=' text-white font-bold text-2xl w-2/3 h-12 rounded-xl bg-theme-blue hover:bg-btn-blue-hover transition mt-10'>Login</button>
				<p className='text-theme-blue mt-4'>Not a member? <Link className=' underline' to="/register">Register now</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login