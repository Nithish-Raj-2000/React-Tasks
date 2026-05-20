import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">React Router</h2>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Contact
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;