import React from 'react'

const Card = ( { id, title, price, thumbnail } ) => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg justify-between p-4 w-[300px] bg-cover h-[400px] mx-auto mt-4">
                <img src={`${thumbnail}`} alt="Product" className="w-full h-[200px] object-cover rounded-t-lg" />
                <h2 className="text-xl font-semibold mt-2">{title}</h2>
                <p className="text-gray-600 mt-1">${price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">Add to Cart</button>
            </div>
        </div>
    )
}

export default Card