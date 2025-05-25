import React, { useMemo, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchSuggestions } from '../data/mockData';
import { AppContext } from '../App';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { user ,setUser } = useContext(AppContext); 
  // console.log(user)

  const filteredSuggestions = useMemo(() => {
    if (!searchTerm) return [];
    return searchSuggestions?.filter((suggestion) =>
      suggestion?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleClick = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className='border border-black flex justify-between items-center bg-white p-4'>
      <div className='h-20 w-20 rounded-full bg-blue-600'></div>
      <div className='text-4xl font-bold text-black'>
        {user ? `Hi, ${user.user}` : 'Guest'}
      </div>

      <div className='font-semibold flex flex-grow justify-center items-center'>
        <form onSubmit={handleClick} className="relative w-96 flex ">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            onClick={() => {
              navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
              setSearchTerm('');
            }}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Search
          </button>

          {filteredSuggestions?.length > 0 && (
            <div className='absolute bg-white top-full border border-gray-300 rounded-md shadow-lg mt-2 w-full max-h-60 overflow-y-auto z-10'>
              <ul className='list-none p-2'>
                {filteredSuggestions?.map((suggestion, index) => (
                  <li
                    key={index}
                    className='p-2 hover:bg-gray-200 cursor-pointer'
                    onClick={() => {
                      setSearchTerm('');
                      navigate(`/search?q=${encodeURIComponent(suggestion)}`);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>

      <div>
        <ul className='flex gap-20 pr-48'>
          <li className='text-2xl font-semibold'><Link to="/">Home</Link></li>
          <li className='text-2xl font-semibold'><Link to="/shop">Shop</Link></li>
          <li className='text-2xl font-semibold'><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
      {user ? (
  <button
    onClick={() => setUser(null)}
    className='text-2xl font-semibold text-red-500'
  >
    Logout
  </button>
) : (
  <li className='text-2xl font-semibold'><Link to="/login">Login</Link></li>
)}
    </div>
  );
};

export default NavBar;
