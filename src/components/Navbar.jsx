import "../assets/css/Navbar.css"
import { Link } from "react-router-dom";
function navBar() {
  return (
      <nav>
          <div className="nav-izq">
              <Link to="/">logo </Link>
              <Link to="/">Home</Link>
              <Link to="/help">ayuda </Link>
          </div>
          <div className="nav-der">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
          </div>
      </nav>
  );
}

export default navBar;
