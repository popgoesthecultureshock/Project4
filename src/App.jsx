import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import InputLesson from './pages/InputLesson'

const App = () => {
  const [langs, setLangs] = useState([])
  const [newLang, setNewLang] = useState({
    id: '',
    name: '',
    subject: '',
    notes: '',
    bookmarks: ''
  })

  const addLang = (e) => {
    e, preventDefault()
    const currentLangs = langs
    const addedLang = {
      ...newLang,
      id: parseInt(langs.length + 1)
    }
    currentLangs.push(addedLang)
    setLangs(currentLangs)
    setNewLang({ id: '', name: '', subject: '', notes: '', bookmarks: '' })
  }

  const handleChange = (e) => {
    setNewLang({ ...newLang, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/new"
            element={
              <InputLesson
                newLang={newLang}
                handleChange={handleChange}
                addLang={addLang}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
