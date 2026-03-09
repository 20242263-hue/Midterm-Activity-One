import { Link } from 'react-router-dom';
import './Navigation.css'; // Optional: for styling the navbar

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          {/* Use the Link component to navigate without a full page reload */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
