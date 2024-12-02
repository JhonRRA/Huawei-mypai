import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot";
import ERP from "./ERP";
import ChatbotWSPP from "./ChatbotWSPP";
import Configuracion from "./Configuracion";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(""); // Estado para rastrear el botón activo
  const [showUserMenu, setShowUserMenu] = useState(false); // Estado para controlar el desplegable del menú de usuario

  const handleLogout = () => {
    navigate("/"); // Redirige a la página de login o inicio
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // Actualiza el botón activo
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu); // Muestra u oculta el menú de usuario
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
              onClick={() => handleMenuClick("erp")}
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
          <li className={`menu-item ${activeMenu === "ChatbotWSPP" ? "active" : ""}`}>
            <Link
              to="/dashboard/ChatbotWSPP"
              className="menu-box"
              onClick={() => handleMenuClick("ChatbotWSPP")}
            >
              ChatbotWSPP
            </Link>
          </li>
        </ul>
        {/* Información del usuario */}
        <div className="user-box">
          <div className="user-info">
            <p className="username">Usuario</p>
            <p className="user-email">correo@ejemplo.com</p>
          </div>
          <button className="menu-button" onClick={toggleUserMenu}>
            ⋮
          </button>
          {showUserMenu && (
            <div className="user-menu">
              <ul>
                <li><Link to="/my-account">Mi cuenta</Link></li>
                <li><Link to="/dashboard/configuracion">Configuración</Link></li>
                <li><button onClick={handleLogout}>Salir</button></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className="dashboard-content">
        <Routes>
          <Route path="erp" element={<ERP />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="ChatbotWSPP" element={<ChatbotWSPP />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
