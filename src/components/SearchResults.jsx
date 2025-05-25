import React, { use, useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import NavBar from './NavBar'
import Products from './Products'
import Card from './Card'
import SearchResults from '../Hooks/SearchResults'

const SearchResultsection = () => {

  
  const [params] = useSearchParams();
  const query = params.get("q");
  const { products, loading } = SearchResults(query)
const [limit, setLimit] = useState("0")


const filterProducts = useMemo(()=>{
  if (!products) return [];
  return products.filter((item) => {
    if (limit == "0") {
      return item
    } else if (limit == "50") {
      return item.price < 50
    } else if (limit == "50-100") {
      return item.price > 50 && item.price < 100
    } else if (limit == "100") {
      return item.price > 100
    }
    
  })
},[limit, products] )


  return (
    <div>
      <NavBar />
      <div className='flex justify-center items-center mt-10  '>
        <div className='flex flex-col gap-5 w-[25%] '>
          <div className='fixed top-40 left-0 flex flex-col gap-5 self-start'>
            <h1 className='text-3xl font-bold'>filters</h1>
            <div className='flex gap-5 mt-5'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold'>Category</h1>
                <select name="" id="" className='border border-black rounded-md p-2'>
                  <option value="">All</option>
                  <option value="">Electronics</option>
                  <option value="">Fashion</option>
                  <option value="">Home</option>
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold'>Price</h1>
                <select name="" id="" onChange={ (e)=>setLimit(e.target.value)} className='border border-black rounded-md p-2'>
                  <option value={"0"}>All</option>
                  <option value={"50"}>Under $50</option>
                  <option value={"50-100"}>$50 - $100</option>
                  <option value={"100"}>Above $100</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        <div>

          {
            (!loading && filterProducts.length == 0) ?

              (<div className=' h-[80%] w-full flex items-start justify-center ' id=''>
                <img className=' h-[60%] w-[100%] ' src="https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png" alt="" />

              </div>) : null
          }
          {!loading ? <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "20px" }}>
            {filterProducts?.map((item) => {
              return <Card id={item.id} key={item.id} title={item.title} price={item.price} thumbnail={item.images[0]} />
            })}
          </div> : <h1 className='flex items-center text-3xl font-bold justify-center'>Loading...</h1>}
          {
            <div className='flex justify-center items-center mt-10'>
              <Link to="/" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Back to Home</Link>
            </div>
          }


        </div>

      </div>
    </div>


  )
}

export default SearchResultsection