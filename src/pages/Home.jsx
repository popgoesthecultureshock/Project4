import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'

const Home = () => {
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `${BASE_URL}/details?key=${API_KEY}&search=${searchQuery}`
    )
    console.log(response)
    setSearchResults(response.data.results)
    setSearchQuery('')
    toggleSearched(true)
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="home">
      <h2>Awesome Home page</h2>
    </div>
  )
}

export default Home
