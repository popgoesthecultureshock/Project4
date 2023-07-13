import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="daddy-font">
        <h4>DOMdaddy</h4>
      </div>
      <div className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="new">Input</NavLink>
        <NavLink>Search</NavLink>
      </div>
    </nav>
  )
}

export default Nav
