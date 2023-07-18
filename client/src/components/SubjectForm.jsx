import { useNavigate } from 'react-router-dom'
import { createSubject, getSubjects } from '../services/SubjectServices'
import { useState } from 'react'

const SubjectForm = (props) => {
  const [newSubject, setNewSubject] = useState({
    title: ''
  })

  const handleChange = (e) => {
    setNewSubject({ ...newSubject, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createSubject(newSubject, props.id)
    props.handleLangs()
    setNewSubject({ title: '' })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newSubject.title}
          onChange={handleChange}
          name="title"
          placeholder={'subject (add keywords here)'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SubjectForm
