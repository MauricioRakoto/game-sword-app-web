import React from 'react'
import Header from "./Header"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'


const Layout = () => {
    return (
        <div className="p-4 flex flex-col min-h-screen">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </div>
    )
}

export default Layout