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
  const [notes, setNotes] = useState([])
  const [bookmarks, setBookmarks] = useState([])

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
    const handleNotes = async () => {
      const data = await getNotes()
      setNotes(data)
    }
    const handleBookmarks = async () => {
      const data = await getBookmarks()
      setBookmarks(data)
    }
    handleSubs()
    handleNotes()
    handleBookmarks()
  }, [])

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
            <tr>
              <th>
                <h1>{lang.name}</h1>
              </th>
              <th>
                <SubjectForm id={lang._id} />
              </th>

              {/* <div className="info-wrapper"> */}
              {lang.subject.map((subj) => (
                <td>
                  <Link to={`${subj._id}`}>{subj.title}</Link>
                </td>
              ))}

              <td>
                <p>{lang.notes}</p>
              </td>
              <td>
                <p>{lang.bookmarks}</p>
              </td>
              {/* </div> */}
            </tr>
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
