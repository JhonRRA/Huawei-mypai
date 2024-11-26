import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Chatbot from "./Chatbot";
import ERP from "./ERP";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-sidebar">
        {/* Menú de navegación (arriba ahora) */}
        <ul className="sidebar-menu">
          <li className="menu-item">
            <Link to="/dashboard/erp" className="menu-link">ERP</Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/chatbot" className="menu-link">Chatbot</Link>
          </li>
        </ul>

        {/* Cuadro con la información del usuario y el botón de cerrar sesión */}
        <div className="user-box">
          <p className="username">Usuario</p>
          <p className="user-email">usuario@correo.com</p>
          <button className="logout-button">Cerrar sesión</button>
        </div>
      </nav>

      <div className="dashboard-content">
        <Routes>
          <Route path="erp" element={<ERP />} />
          <Route path="chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
