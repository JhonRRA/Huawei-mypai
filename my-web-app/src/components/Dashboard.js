import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Chatbot from "./Chatbot";
import ERP from "./ERP";
import Configuracion from "./Configuracion"; // Importamos el componente de configuración
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-sidebar">
        {/* Contenedor del logo */}
        <div className="logo-container">
          <img src="/images/logo2.png" alt="App Logo" className="app-logo" />
        </div>
        {/* Menú lateral con cuadros */}
        <ul className="sidebar-menu">
          <li className="menu-item">
            <div className="menu-box">
              <Link to="/dashboard/erp" className="menu-link">ERP</Link>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-box">
              <Link to="/dashboard/chatbot" className="menu-link">Chatbot</Link>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-box">
              <Link to="/dashboard/configuracion" className="menu-link">Configuración</Link>
            </div>
          </li>
        </ul>
        {/* Información del usuario */}
        <div className="user-box">
          <p className="username">Usuario</p>
          <p className="user-email">correo@ejemplo.com</p>
          <button className="logout-button">Cerrar sesión</button>
        </div>
      </nav>
      <div className="dashboard-content">
        <Routes>
          <Route path="erp" element={<ERP />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="configuracion" element={<Configuracion />} /> {/* Nueva ruta */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
