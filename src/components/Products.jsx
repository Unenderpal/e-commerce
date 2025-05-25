import React, { use, useEffect, useState } from 'react'
import Card from './Card'


const Products = () => {

const [pros, setPros] = useState([])

const prod = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setPros(data.products);
    console.log(pros)
    return pros;
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
}

useEffect(() => {
  prod()
}
, ['']);

  return (
    <div className="flex flex-wrap p-10 items-start gap-10 justify-center h-auto bg-gray-100">
        {pros.map((item)=>{
          return <Card id={item.id} key={item.id} title={item.title} price={item.price} thumbnail={item.images[0]} />
        })}
    </div>
  )
}

export default Products