import React, { useState } from "react";
import "../styles/Configuracion.css";

const Configuracion = () => {
  // Estado para datos del usuario
  const [userInfo, setUserInfo] = useState({
    userName: "Nombre Usuario",
    email: "usuario@correo.com",
    password: "",
    phone: "",
  });

  // Estado para datos de la empresa
  const [companyInfo, setCompanyInfo] = useState({
    name: "Mi Empresa",
    organizationType: "Privada",
    industry: "Tecnología",
    taxId: "",
    description: "",
  });

  // Estado para los planes
  const [currentPlan, setCurrentPlan] = useState("Básico");
  const [selectedPlan, setSelectedPlan] = useState("Básico");

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };

  const handleSave = () => {
    alert("Información guardada correctamente");
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleUpgrade = () => {
    setCurrentPlan(selectedPlan);
    alert(`¡Has actualizado tu plan a ${selectedPlan}!`);
  };

  return (
    <div className="config-container">
      <div className="columns-container">
        {/* Configuración del Usuario */}
        <div className="config-box">
          <h2>Configuración del Usuario</h2>
          <div className="form-group">
            <label htmlFor="userName">Nombre</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userInfo.userName}
              onChange={handleUserChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleUserChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userInfo.password}
              onChange={handleUserChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Número de Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={handleUserChange}
            />
          </div>
        </div>

        {/* Configuración de la Empresa */}
        <div className="config-box">
          <h2>Configuración de la Empresa</h2>
          <div className="form-group">
            <label htmlFor="name">Nombre de la Empresa</label>
            <input
              type="text"
              id="name"
              name="name"
              value={companyInfo.name}
              onChange={handleCompanyChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="organizationType">Tipo de Organización</label>
            <input
              type="text"
              id="organizationType"
              name="organizationType"
              value={companyInfo.organizationType}
              onChange={handleCompanyChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="industry">Industria o Sector</label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={companyInfo.industry}
              onChange={handleCompanyChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="taxId">Número de Identificación Fiscal (Tax ID)</label>
            <input
              type="text"
              id="taxId"
              name="taxId"
              value={companyInfo.taxId}
              onChange={handleCompanyChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={companyInfo.description}
              onChange={handleCompanyChange}
            ></textarea>
          </div>
          <button className="save-button" onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>

      {/* Mejora de Membresía */}
      <div className="config-box membership-section">
        <h2>Mejora tu Membresía</h2>
        <p>
          Plan actual: <strong>{currentPlan}</strong>
        </p>
        <div className="plan-options">
          <button
            className={`plan-button ${
              selectedPlan === "Básico" ? "active" : ""
            }`}
            onClick={() => handlePlanChange("Básico")}
          >
            Básico
          </button>
          <button
            className={`plan-button ${
              selectedPlan === "Profesional" ? "active" : ""
            }`}
            onClick={() => handlePlanChange("Profesional")}
          >
            Profesional
          </button>
          <button
            className={`plan-button ${
              selectedPlan === "Premium" ? "active" : ""
            }`}
            onClick={() => handlePlanChange("Premium")}
          >
            Premium
          </button>
        </div>

        <div className="plan-details">
          {selectedPlan === "Básico" && (
            <div>
              <h3>Básico</h3>
              <p>Precio: $10/mes</p>
              <p>Beneficios: Acceso limitado, soporte básico, informes estándar.</p>
            </div>
          )}
          {selectedPlan === "Profesional" && (
            <div>
              <h3>Profesional</h3>
              <p>Precio: $25/mes</p>
              <p>Beneficios: Acceso completo, soporte prioritario, informes avanzados.</p>
            </div>
          )}
          {selectedPlan === "Premium" && (
            <div>
              <h3>Premium</h3>
              <p>Precio: $50/mes</p>
              <p>Beneficios: Todas las características, soporte dedicado, informes personalizados.</p>
            </div>
          )}
        </div>

        <button className="upgrade-button" onClick={handleUpgrade}>
          Actualizar al Plan {selectedPlan}
        </button>
      </div>
    </div>
  );
};

export default Configuracion;
