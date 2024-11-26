import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot";
import ERP from "./ERP";
import Configuracion from "./Configuracion";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(""); // Estado para rastrear el botón activo

  const handleLogout = () => {
    navigate("/login");
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // Actualiza el botón activo
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-sidebar">
        {/* Contenedor del logo */}
        <div className="logo-container">
          <img src="/images/logo2.png" alt="App Logo" className="app-logo" />
        </div>
        {/* Menú lateral con cuadros */}
        <ul className="sidebar-menu">
          <li className={`menu-item ${activeMenu === "erp" ? "active" : ""}`}>
            <Link
              to="/dashboard/erp"
              className="menu-box"
              onClick={() => handleMenuClick("erp")} // Activa el botón y redirige
            >
              ERP
            </Link>
          </li>
          <li className={`menu-item ${activeMenu === "chatbot" ? "active" : ""}`}>
            <Link
              to="/dashboard/chatbot"
              className="menu-box"
              onClick={() => handleMenuClick("chatbot")}
            >
              Chatbot
            </Link>
          </li>
          <li className={`menu-item ${activeMenu === "configuracion" ? "active" : ""}`}>
            <Link
              to="/dashboard/configuracion"
              className="menu-box"
              onClick={() => handleMenuClick("configuracion")}
            >
              Configuración
            </Link>
          </li>
        </ul>
        {/* Información del usuario */}
        <div className="user-box">
          <p className="username">Usuario</p>
          <p className="user-email">correo@ejemplo.com</p>
          <button className="logout-button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </nav>
      <div className="dashboard-content">
        <Routes>
          <Route path="erp" element={<ERP />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
