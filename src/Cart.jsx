import React from 'react'
import NavBar from './components/NavBar'


const Cart = () => {
  return (
    <div>
        <NavBar />
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">Your Cart</h1>
            <div className="flex flex-col items-center justify-center mt-10">
                <p className= "text-lg">Your cart is empty.</p>
                <p className="text-lg">Start shopping now!</p>
            </div>
        </div>
    </div>
  )
}

export default Cart