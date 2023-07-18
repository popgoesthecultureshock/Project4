import { NavLink } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <div className="navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/list">List</NavLink>
          <NavLink to="/new">Input</NavLink>
          <NavLink onClick={handleLogOut} to="/">
            Sign Out
          </NavLink>
        </div>
      </nav>
    )
  }

  let publicOptions = (
    <nav>
      <div className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </div>
    </nav>
  )

  return (
    <header className="navbar">
      <div className="daddy-font">
        {/* <a
          href="https://youtu.be/uk35zZubQEE"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <h4>DOMdaddy</h4>
        {/* </a> */}
      </div>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
