import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const InputLesson = (props) => {
  const addLang = (e) => {
    e.preventDefault()
    const currentLangs = props.langs
    const addedLang = {
      ...props.newLang,
      id: parseInt(props.langs.length + 1)
    }
    currentLangs.push(addedLang)
    props.setLangs(currentLangs)
    props.setNewLang({
      id: '',
      name: '',
      subject: '',
      notes: '',
      bookmarks: ''
    })
  }

  const handleChange = (e) => {
    props.setNewLang({ ...props.newLang, [e.target.name]: e.target.value })
  }

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addLang(e)
    navigate('/list')
  }

  return (
    <div className="form">
      <h1>Add a Subject You're Working On</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={props.newLang.name}
          onChange={handleChange}
          name="name"
          placeholder={'language'}
        />
        <input
          type="text"
          value={props.newLang.subject}
          onChange={handleChange}
          name="subject"
          placeholder={'subject (add keywords here)'}
        />
        <input
          type="text-area"
          value={props.newLang.notes}
          onChange={handleChange}
          name="notes"
          placeholder={'notes'}
        />
        <input
          type="text"
          value={props.newLang.bookmarks}
          onChange={handleChange}
          name="bookmarks"
          placeholder={'bookmark link'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputLesson
