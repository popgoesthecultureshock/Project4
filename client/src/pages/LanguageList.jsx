import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSubjects } from '../services/SubjectServices'
import { getNotes } from '../services/NoteServices'
import { getBookmarks } from '../services/BookServices'
import axios from 'axios'
import Search from '../components/Search'
import SubjectDetail from './SubjectDetail'
import SubjectForm from '../components/SubjectForm'

const LanguageList = (props) => {
  // const [searchResults, setSearchResults] = useState([])
  // const [searched, toggleSearched] = useState(false)
  // const [searchQuery, setSearchQuery] = useState('')
  const [subjects, setSubjects] = useState([])

  // const getSearchResults = async (e) => {
  //   e.preventDefault()
  //   const response = await axios.get(
  //     `${BASE_URL}/details?key=${API_KEY}&search=${searchQuery}`
  //   )
  //   console.log(response)
  //   setSearchResults(response.data.results)
  //   setSearchQuery('')
  //   toggleSearched(true)
  // }

  // const handleChange = (event) => {
  //   setSearchQuery(event.target.value)
  // }

  useEffect(() => {
    const handleSubs = async () => {
      const data = await getSubjects()
      console.log(data)
      setSubjects(data)
    }
    handleSubs()
  }, [])
  console.log(props)
  return (
    <div className="lang-page">
      {/* <div className="search">
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
      </div> */}
      <div className="lang-list">
        <table className="lang-table">
          {props.langs.map((lang) => (
            // <div className="lang-header" key={lang.id}>
            // <div className="lang-card">
            <div key={lang._id}>
              <tr>
                <th>
                  <h1>{lang.name}</h1>
                  <br />
                  <SubjectForm id={lang._id} handleLangs={props.handleLangs} />
                </th>

                {lang.subject?.map((subj) => (
                  <div key={subj._id}>
                    <td>
                      <Link to={`${subj._id}`}>{subj.title}</Link>
                    </td>
                  </div>
                ))}
              </tr>
            </div>
            // </div>
            // </div>
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
