import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Login</h1>
        <form onSubmit={handleLogin} className="auth-form">
          <input type="text" placeholder="Username" required className="auth-input" />
          <input type="password" placeholder="Password" required className="auth-input" />
          <button type="submit" className="auth-button">Login</button>
        </form>
        <button onClick={() => navigate("/register")} className="secondary-button">
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;

