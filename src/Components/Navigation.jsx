import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
      <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
      <Link to="/students" style={{ margin: "0 1rem" }}>Students</Link>
      <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
    </nav>
  );
}