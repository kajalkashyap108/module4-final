// src/components/Navbar.jsx
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth); // Get user from Redux state
  const dispatch = useDispatch();

  return (
    <nav>
      <h1>My Library</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {user && <li><Link to="/my-books">My Books</Link></li>}
        {!user ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <li>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </li>
        )}
      </ul>
      {user && <p>Logged in as: {user.email}</p>} {/* Display user's email */}
    </nav>
  );
};

export default Navbar;