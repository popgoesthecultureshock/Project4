import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import SubjectDetail from './SubjectDetail'

const LanguageList = (props) => {
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
    <div className="lang-page">
      <div className="search">
        <Search
          onSubmit={getSearchResults}
          onChange={handleChange}
          value={searchQuery}
        />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searched &&
            searchResults.map((search) => (
              <Link to={`/details/${search.id}`} key={search.id}>
                <SubjectDetail />
              </Link>
            ))}
        </section>
      </div>
      <div className="lang-list">
        <table className="lang-table">
          {props.langs.map((lang) => (
            <div className="lang-header" key={lang.id}>
              <div className="lang-card">
                <tr>
                  <td>
                    <h1>{lang.name}</h1>
                  </td>
                  <Link to={`${lang.id}`}>
                    <div className="info-wrapper">
                      <td>
                        <h3>{lang.subject}</h3>
                      </td>
                      <td>
                        <p>{lang.notes}</p>
                      </td>
                      <td>
                        <p>{lang.bookmarks}</p>
                      </td>
                    </div>
                  </Link>
                </tr>
              </div>
            </div>
          ))}
        </table>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  )
}

export default LanguageList
