import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createLang } from '../services/LangServices'
import { getLangById } from '../services/LangServices'

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

  const getLangList = async (id) => {
    let response = await getLangById(id)
    setNewLang(response)
  }

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createLang(newLang)
    getLangList()
    navigate('/list')
  }

  return (
    <div className="form">
      <div>
        <h1>Add a Subject You're Working On</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newLang.name}
            onChange={handleChange}
            name="name"
            placeholder={'language/framework/etc'}
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default InputLesson
