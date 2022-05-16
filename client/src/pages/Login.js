import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./login.css";
import Admin from "./Admin";
import App from "../App";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", { token: user.refreshToken });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id) => {
    setSuccess(false);
    setError(false);
    try {
      await axiosJWT.delete("/users/" + id, {
        headers: { authorization: "Bearer " + user.accessToken },
      });
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <div className="nocontainer">
        {user ? (
          // <div className="home">
          //   <span>
          //     Welcome to the <b>{user.isAdmin ? "admin" : "user"}</b> dashboard
          //     <b>{user.username}</b>.
          //   </span>
          //   <span>Delete Users:</span>
          //   <button className="deleteButton">Delete John</button>
          //   <button className="deleteButton">Delete Jane</button>
          //   {error && (
          //     <span className="error">
          //       You are not allowed to delete this user!
          //     </span>
          //   )}
          //   {success && (
          //     <span className="success">
          //       User has been deleted successfully...
          //     </span>
          //   )}
          // </div>
          <App />
        ) : (
          <div className="login">
            <form onSubmit={handleSubmit} className="formlogin">
              <span className="formTitle">Admin Login</span>
              <input
                className="inputlogin"
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="inputlogin"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/Admin">
                <button type="submit" className="submitButton">
                  Login
                </button>
              </Link>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
