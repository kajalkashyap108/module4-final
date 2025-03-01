// src/redux/reducers/authReducer.js
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        localStorage.setItem("user", JSON.stringify(action.payload));
        return { ...state, user: action.payload, loading: false, error: null };
      case "LOGOUT":
        localStorage.removeItem("user");
        return { ...state, user: null, loading: false, error: null };
      case "AUTH_ERROR":
        return { ...state, error: action.payload, loading: false };
      case "AUTH_LOADING":
        return { ...state, loading: true };
      default:
        return state;
    }
  };
  
  export default authReducer;