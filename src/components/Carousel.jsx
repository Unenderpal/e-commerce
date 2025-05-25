import React from 'react'
import { Link } from 'react-router-dom'

const Carousel = () => {
  return (
    <div className="flex flex-col gap-14 bg-[url('')] bg-center bg-cover bg-no-repeat  h-[600px] w-[100vw] border border-black justify-center items-center  bg-white">
           <div className='flex flex-col justify-center items-center font-semibold text-8xl '>
            Summer Sale
           </div>
            <h1 className='text-5xl font-semibold text-center'>Upto 50% off</h1>
           <Link to="/shop"><button className='text-white text-2xl font-semibold py-2 px-4 rounded-md bg-blue-600'>Shop now</button></Link> 
    </div>
  )
}

export default Carousel;