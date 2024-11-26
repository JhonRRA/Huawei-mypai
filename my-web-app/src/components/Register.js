import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Usuario registrado exitosamente.");
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Register</h1>
        <form onSubmit={handleRegister} className="register-form">
          <input type="text" placeholder="Username" required className="register-input" />
          <input type="email" placeholder="Email" required className="register-input" />
          <input type="password" placeholder="Password" required className="register-input" />
          <button type="submit" className="register-button">Register</button>
        </form>
        <button onClick={() => navigate("/")} className="register-button-back">
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Register;


