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

  const handleSubmitNote = async (e) => {
    e.preventDefault()
    if (editNote) {
      await updateNote({ content: editNote.content }, editNote.id)
      setEditNote(null)
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
  const handleUpdateChange = (e) => {
    setEditNote({ ...editNote, [e.target.name]: e.target.value })
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
    setNewNote({ content: '' })
    getSubj()
  }
  const handleBookSubmit = async (e) => {
    e.preventDefault()
    console.log(newBookmark)
    await createBookmark({ ...newBookmark, subject: id })
    setNewBookmark({ url: '', label: '' })
    getSubj()
  }

  // const updateNoteButton = async () => {
  //   updateNote()
  //   getSubj()
  // }

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
                    <textarea
                      rows="5"
                      cols="40"
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
                {subj.notes?.reverse().map((note) => (
                  <div key={note._id}>
                    {editNote && editNote.id === note._id ? (
                      <form onSubmit={handleSubmitNote}>
                        <textarea
                          rows="8"
                          cols="60"
                          type="text"
                          name="content"
                          value={editNote.content}
                          onChange={handleUpdateChange}
                        />
                        <button>Save</button>
                      </form>
                    ) : (
                      <div>
                        <p>{note.content}</p>
                        <button
                          onClick={() =>
                            setEditNote({ id: note._id, content: note.content })
                          }
                        >
                          Update
                        </button>
                        <button onClick={() => deleteNoteButton(note._id)}>
                          Delete
                        </button>
                      </div>
                    )}
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
