import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
    </div>
  )
}

export default App
