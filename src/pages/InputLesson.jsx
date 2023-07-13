import { useNavigate } from 'react-router-dom'

const InputLesson = (props) => {
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    props.addBoat(e)
    navigate('/new')
  }

  const newLang = props.newLang

  return (
    <div className="form">
      <h1>Add a Subject You're Working On</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newLang.name}
          onChange={props.handleChange}
          name={'name'}
          placeholder={'language'}
        />
        <input
          type="text"
          value={newLang.subject}
          onChange={props.handleChange}
          name={'subject'}
          placeholder={'subject (add keywords here)'}
        />
        <input
          type="text-area"
          value={newLang.notes}
          onChange={props.handleChange}
          name={'notes'}
          placeholder={'notes'}
        />
        <input
          type="text"
          value={newLang.bookmarks}
          onChange={props.handleChange}
          name={'bookmarks'}
          placeholder={'bookmark link'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputLesson
