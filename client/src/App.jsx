import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from '../services/Auth'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import InputLesson from './pages/InputLesson'
import LanguageList from './pages/LanguageList'
import SubjectDetail from './pages/SubjectDetail'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'

const App = () => {
  const [user, setUser] = useState(null)
  const [langs, setLangs] = useState([])
  const [newLang, setNewLang] = useState({
    id: '',
    name: '',
    subject: '',
    notes: '',
    bookmarks: ''
  })

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/new"
            element={
              <InputLesson
                newLang={newLang}
                setLangs={setLangs}
                langs={langs}
                setNewLang={setNewLang}
              />
            }
          />
          <Route path="/list" element={<LanguageList langs={langs} />} />
          <Route
            path="/list/:id"
            element={<SubjectDetail langs={langs} newLang={newLang} />}
          />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
