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
  const [newNote, setNewNote] = useState({ content: '' })
  const [newBookmark, setNewBookmark] = useState({ url: '', label: '' })
  const [editNote, setEditNote] = useState(null)

  let { id } = useParams()

  const getSubj = async () => {
    let response = await getSubjectById(id)
    setSubj(response)
  }
  useEffect(() => {
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

  const updateNote = async (id, content) => {
    setEditNote({ id, content })
  }
  const handleUpdateNote = async (id, content) => {
    await updateNote(id, { content })
    console.log(form)
  }
  const handleSubmitNote = async (e) => {
    e.preventDefault()
    if (editNote) {
      handleUpdateNote(editNote.id, newNote.content)
    } else {
      await createNote({ ...newNote, subject: id })
      setNewNote({ content: '' })
    }
    getSubj()
  }

  const handleChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value })
  }
  const handleBookChange = (e) => {
    setNewBookmark({ ...newBookmark, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    // if (editNote) {
    //   handleUpdateNote(editNote.id, newNote.content)
    // } else {
    //   await createNote({ ...newNote, subject: id })
    //   setNewNote({ content: '' })
    // }
    getSubj()
    await createNote({ ...newNote, subject: id })
    setNewNote({ content: '' }).sort((a, b) => Number(b.date) - Number(a.date))
    getSubj()
  }
  const handleBookSubmit = async (e) => {
    e.preventDefault()
    console.log(newBookmark)
    await createBookmark({ ...newBookmark, subject: id })
    setNewBookmark({ url: '', label: '' })
    getSubj()
  }

  const updateNoteButton = async () => {
    updateNote()
    getSubj()
  }

  const deleteNoteButton = async (id) => {
    deleteNote(id)
    getSubj()
  }

  const deleteBookmarkButton = async (id) => {
    deleteBookmark(id)
    getSubj()
  }

  console.log(subj)
  return (
    <div className="subj-page">
      {/* <div className="lang-header"><h1>{subj.language.name}</h1></div> */}
      <div className="detail-title">
        <h2>{subj.title}</h2>
      </div>
      <div className="subjTables">
        <div className="inputTable">
          <table>
            <tbody>
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
                      placeholder={'add bookmark url here'}
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
            </tbody>
          </table>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                {subj.notes?.map((note) => (
                  <div key={note._id}>
                    <p>{note.content}</p>
                    {/* <input
                    type="text"
                    name="content"
                    value={editNote ? editNote.content : newNote.content}
                    onChange={handleSubmitNote}
                    placeholder="edit notes here"
                  /> */}
                    <button onClick={updateNoteButton}>Update</button>
                    <button onClick={() => deleteNoteButton(note._id)}>
                      Delete
                    </button>
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
                    <button onClick={() => deleteBookmarkButton(bookmark._id)}>
                      Delete
                    </button>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <Link to="/list">
          <button>Back</button>
        </Link>
      </div>
    </div>
    // ) : (
    //   <h2>'No Notes Added Yet'</h2>
  )
}

export default SubjectDetail
