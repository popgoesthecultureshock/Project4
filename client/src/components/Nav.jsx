import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="daddy-font">
        <h4>DOMdaddy</h4>
      </div>
      <div className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/new">Input</NavLink>
      </div>
    </nav>
  )
}

export default Nav
