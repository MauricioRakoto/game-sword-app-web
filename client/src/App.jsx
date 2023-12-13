import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/index'
import Auth from './pages/auth/index'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'


const  App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users/auth' element={<Auth/>}/>
        <Route path='/users/auth/signin' element={<Signin/>}/>
        <Route path='/users/auth/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
