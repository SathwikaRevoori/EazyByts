import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import '../styles/App.css';
import '../styles/Navbar.css';

function Navbar() {
  const role = localStorage.getItem('userRole') || '';
  const isAdmin = role === 'admin';

  return (
    <nav className="navbar">
      <h2 className="logo">Portfolio</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>

        {/* {isAdmin && <li><Link to="/admin">CMS</Link></li>} Conditionally render */}
      </ul>
      <ThemeSwitcher />
    </nav>
  );
}

export default Navbar;
