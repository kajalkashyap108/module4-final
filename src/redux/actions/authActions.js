// src/redux/actions/authActions.js
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { fetchMyBooks } from "./booksActions";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: "AUTH_LOADING" });
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: "LOGIN_SUCCESS", payload: { email: userCredential.user.email } });
    dispatch(fetchMyBooks(userCredential.user.email)); // Fetch myBooks after login
  } catch (error) {
    console.error("Login error:", error.message);
    dispatch({ type: "AUTH_ERROR", payload: error.message });
  }
};

export const register = (email, password) => async (dispatch) => {
  dispatch({ type: "AUTH_LOADING" });
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: "LOGIN_SUCCESS", payload: { email: userCredential.user.email } });
    dispatch(fetchMyBooks(userCredential.user.email)); // Fetch myBooks after register (initially empty)
  } catch (error) {
    console.error("Register error:", error.message);
    dispatch({ type: "AUTH_ERROR", payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  signOut(auth);
  dispatch({ type: "LOGOUT" });
  dispatch({ type: "SET_MY_BOOKS", payload: [] }); // Clear myBooks on logout
};