import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
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
