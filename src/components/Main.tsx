import React from 'react';
import mainBg from '../assets/mainBg.png';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div
    style={{background: `url(${mainBg})`, backgroundSize: 'cover'}} 
    className='flex justify-center bg-theme-blue w-screen h-screen overflow-hidden'>
      <div className='flex flex-col items-center justify-center relative top-[58%] sm:top-auto w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='mt-8 text-5xl font-bold text-white text-center'>
          Reminderer
        </h1>
        <h2 className='mt-4 text-lg font-bold text-white text-center max-w-2xl'>
          Simple To-Do List that reminds with Telegram message
        </h2>
        <Link to='/create'>
          <button className='mt-8 text-lg text-theme-blue bg-white px-10 py-3 font-semibold rounded-xl hover:text-white hover:bg-btn-blue-hover transition ease-in-out'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main