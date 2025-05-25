import { createContext, useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './Cart'
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SearchResults from './components/SearchResults'
export const AppContext = createContext()
function App() {
const [user , setUser] = useState('')
  return (
    <div>
   <BrowserRouter> 
   <AppContext.Provider value={{user , setUser}}>
   <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/signup" element={<SignUp />} />
   </Routes>
   </AppContext.Provider>
   </BrowserRouter>
    </div>
  )

}

export default App
