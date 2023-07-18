import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { createNote } from '../services/NoteServices'
import { createBookmark } from '../services/BookServices'
import { getSubjectById } from '../services/SubjectServices'
import { getNotes } from '../services/NoteServices'
import { getBookmarks } from '../services/BookServices'
import { deleteNote } from '../services/NoteServices'
import { deleteBookmark } from '../services/BookServices'
import { updateNote } from '../services/NoteServices'

const SubjectDetail = (props) => {
  const [subj, setSubj] = useState({})
  const [newNote, setNewNote] = useState({})
  const [newBookmark, setNewBookmark] = useState({})

  let { id } = useParams()

  useEffect(() => {
    const getSubj = async () => {
      let response = await getSubjectById(id)
      setSubj(response)
    }
    // const handleNotes = async () => {
    //   const data = await getNotes()
    //   setNewNote(data)
    // }
    // const handleBookmarks = async () => {
    //   const data = await getBookmarks()
    //   setNewBookmark(data)
    // }
    getSubj()
    // handleNotes()
    // handleBookmarks()
  }, [])

  const handleChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value })
  }
  const handleBookChange = (e) => {
    setNewBookmark({ ...newBookmark, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createNote({ ...newNote, subject: id })
    setNewNote({ content: '' })
  }
  const handleBookSubmit = async (e) => {
    e.preventDefault()
    console.log(newBookmark)
    await createBookmark({ ...newBookmark, subject: id })
    setNewBookmark({ url: '' })
  }
  console.log(subj)
  return (
    <div className="lang-page">
      <div className="lang-header">{/* <h1>{subj.language.name}</h1> */}</div>
      <div className="detail-title">
        <h2>{subj.title}</h2>
      </div>
      <table>
        <tr>
          <td>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newNote.content}
                onChange={handleChange}
                name="content"
                placeholder={'write notes here'}
              />
              <button>Submit</button>
            </form>
          </td>
          <td>
            <form onSubmit={handleBookSubmit}>
              <input
                type="text"
                value={newBookmark.url}
                onChange={handleBookChange}
                name="url"
                placeholder={'add bookmarks here'}
              />
              <br />
              <input
                type="text"
                value={newBookmark.label}
                onChange={handleBookChange}
                name="label"
                placeholder={'describe what this link is'}
              />
              <button>Submit</button>
            </form>
          </td>
        </tr>
      </table>

      <div>
        <table>
          <tr>
            <td>
              {subj.notes?.map((note) => (
                <div key={note._id}>
                  <h3>{note.content}</h3>
                  <button onClick={updateNote}>Update</button>
                  <button onClick={() => deleteNote(note._id)}>Delete</button>
                </div>
              ))}
              <br />
            </td>
            <td>
              {subj.bookmarks?.map((bookmark) => (
                <div key={bookmark._id}>
                  <Link to={bookmark.url}>
                    <h3>{bookmark.label}</h3>
                  </Link>
                  <button onClick={() => deleteBookmark(bookmark._id)}>
                    Delete
                  </button>
                </div>
              ))}
            </td>
          </tr>
        </table>
      </div>
      <Link to="/list">
        <button>Back</button>
      </Link>
    </div>
    // ) : (
    //   <h2>'No Notes Added Yet'</h2>
  )
}

export default SubjectDetail
