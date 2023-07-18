import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createLang } from '../services/LangServices'

const InputLesson = (props) => {
  const [newLang, setNewLang] = useState({
    name: '',
    title: '',
    notes: '',
    bookmarks: ''
  })

  const handleChange = (e) => {
    setNewLang({ ...newLang, [e.target.name]: e.target.value })
  }

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createLang(newLang)
    navigate('/list')
  }

  return (
    <div className="form">
      <h1>Add a Subject You're Working On</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newLang.name}
          onChange={handleChange}
          name="name"
          placeholder={'language'}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputLesson
