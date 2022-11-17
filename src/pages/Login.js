import React, {useState} from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { AiOutlineUnlock } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const Login=() =>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Alert');
    console.log(email)
    console.log(password)
  }
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center '>
      <div className='bg-green-100 h-fit flex flex-row w-1/2 shadow-sm'>
        <div className='w-1/2 flex justify-center items-center'>
          <BsEnvelope className='text-4xl'/>
        </div>
        <div className='w-1/2 bg-blue-300 py-4'>
        <div className='flex justify-center flex-col'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-4 h-fit'>
          <h2 className='text-bold text-2xl'>LOGIN</h2> 

          <div className="relative">
              <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"> <BsEnvelope /></span>
              <input
                onChange={event => setEmail(event.target.value)}
               className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300'  placeholder='Email...' type='email'/>
          </div>
          <div className="relative">
              <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"> <AiOutlineUnlock /></span>
              <input 
                onChange={event => setPassword(event.target.value)}
              className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300'  placeholder='Password...' type='password'/>
          </div>
          <div className='relative w-5/6'>
            <button  className="bg-blue-400 font-medium flex flex-row items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500 w-full" type='submit'>
                LOGIN
            </button>
          </div>
        </form> 
      </div>
        </div>
      </div>
    </div>
  )
}

export default Login