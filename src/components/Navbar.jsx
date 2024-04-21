import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <FaGithub className="github-icon" />
        <h1 className="icon-text">Chidinma's GitHub.</h1>
      </div>
      <ul className="nav-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/repo-page">RepoPage</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
