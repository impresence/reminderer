import React from 'react'
import registerBg from '../assets/registerBg.png'
import { Link } from 'react-router-dom'

const Register: React.FC = () => {
  return (
    <div className='flex'>
        <img className=' w-1/2 h-screen' src={registerBg} alt="" />
        <div className=' w-1/2 h-screen flex items-center justify-center bg-theme-blue'>
            <div className=' flex flex-col items-center justify-center bg-white w-[504px] h-[720px] rounded-3xl'>
                <h1 className='font-bold text-5xl text-theme-blue mb-16'>Register</h1>
				<input 
				className='border my-3 w-10/12 p-2 h-14 rounded-lg' type="text" 
				placeholder='Name and Surname' 
				/>
				<input 
				className='border my-3 w-10/12 p-2 h-14 rounded-lg' type="text" 
				placeholder='Group'
				/>
				<input 
				className='border my-3 w-10/12 p-2 h-14 rounded-lg' type="text" 
				placeholder='Password'
				/>
				<input 
				className='border my-3 w-10/12 p-2 h-14 rounded-lg' type="text" 
				placeholder='Repeat password'
				/>
				<button className=' text-white font-bold text-2xl w-2/3 h-12 rounded-xl bg-theme-blue hover:bg-btn-blue-hover transition mt-10'>Register</button>
				<p className='text-theme-blue mt-4'>Already have an account? <Link className=' underline' to="/login">Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register