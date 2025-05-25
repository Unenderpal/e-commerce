import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import Products from './Products'


const Home = () => {
  // const [searchQuery, setSearchQuery] = useState('')
  // const [searchResults, setSearchResults] = useState([])

  
  return (
    <div>
        <NavBar />
        <Carousel />
        <Products />
    </div>
  )
}

export default Home