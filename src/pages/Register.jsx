import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = (ev) => {
    ev.preventDefault()
    axios.get("/test")
  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto' onSubmit={registerUser}>
            <input type="text" 
                placeholder='John Doe'
                value={name}
                onChange={ev => setName(ev.target.value)} />
            <input type="email" 
                placeholder='your@gmail.com' 
                value={email}
                onChange={ev => setEmail(ev.target.email)}
                />
            <input type="password" 
                placeholder='password'
                value={password}
                onChange={ev => setPassword(ev.target.password)}
                />
            <button type='submit' className='primary'>Register</button>
            <div className='text-center py-2 text-gray-500'>
            Allready a member? 
            <NavLink className="underline text-black" to='/login'>Login now</NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register