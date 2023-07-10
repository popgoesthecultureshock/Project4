import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink>Input</NavLink>
        <NavLink>Search</NavLink>
      </div>
    </nav>
  )
}

export default Nav
