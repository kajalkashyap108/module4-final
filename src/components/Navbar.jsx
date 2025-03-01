// src/components/Navbar.jsx
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth); // Get user from Redux state
  const dispatch = useDispatch();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#333",
        color: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#ffeb3b", // Yellow for "My Library" title
        }}
      >
        My Library
      </h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1.5rem",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "0.5rem 0.8rem",
              borderRadius: "4px",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#ffeb3b")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Home
          </Link>
        </li>
        {user && (
          <li>
            <Link
              to="/my-books"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1rem",
                fontWeight: "500",
                padding: "0.5rem 0.8rem",
                borderRadius: "4px",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#ffeb3b")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              My Books
            </Link>
          </li>
        )}
        {!user ? (
          <>
            <li>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "500",
                  padding: "0.5rem 0.8rem",
                  borderRadius: "4px",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#ffeb3b")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "500",
                  padding: "0.5rem 0.8rem",
                  borderRadius: "4px",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#ffeb3b")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                Register
              </Link>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={() => dispatch(logout())}
              style={{
                backgroundColor: "#ff4444",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "backgroundColor 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#cc0000")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4444")}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
      {user && (
        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            color: "#e0e0e0",
            padding: "0.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "4px",
          }}
        >
          Logged in as: {user.email}
        </p>
      )}
    </nav>
  );
};

export default Navbar;