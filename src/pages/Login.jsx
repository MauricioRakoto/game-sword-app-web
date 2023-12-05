import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto'>
          <input type="email" placeholder='your@gmail.com' />
          <input type="password" placeholder='password' />
          <button className='primary'>Login</button>
          <div className='text-center py-2 text-gray-500'>
            Don't have en account yet? 
            <NavLink className="underline text-black" to='/register'>Register now</NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
