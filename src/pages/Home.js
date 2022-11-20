import React, { useState } from 'react'; 
import Navbar from '../components/Navbar';
import { AiOutlinePlusCircle } from 'react-icons/ai'
const Home=() =>{

  return (
    <div className='h-screen w-full bg-sky-300'>
      <Navbar />
      <div className='b w-full h-10 flex items-center pl-16 mt-4'>
        <AiOutlinePlusCircle className='text-4xl'/> <button className='text-xl ml-3'>Add Task</button>
      </div> 
    </div>
  )
}

export default Home