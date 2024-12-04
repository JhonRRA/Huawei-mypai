import React, { useState } from "react";
import "../styles/Configuracion.css";

const Configuracion = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "Nombre Usuario",
    email: "usuario@correo.com",
    password: "",
    phone: "",
  });

  const [companyInfo, setCompanyInfo] = useState({
    name: "Mi Empresa",
    organizationType: "Privada",
    industry: "Tecnología",
    taxId: "",
    description: "",
  });

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
      <div className="config-box user-config">
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

      <div className="config-box company-config">
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

      <div className="config-box membership-config">
        <h2>Mejora tu Membresía</h2>
        <div className="plan-actual">
          <p>
            Plan actual: <strong>{currentPlan}</strong>
          </p>
        </div>
        <div className="plan-options">
      <div
        className={`plan-column ${currentPlan === "Básico" ? "highlighted" : ""}`}
      >
        <h3>Básico</h3>
        <p>Precio: $10/mes</p>
        <div className="benefits">
          <div className="benefit">Acceso a funciones esenciales del ERP</div>
          <div className="benefit alt">Chatbot básico para asistencia inicial</div>
          <div className="benefit">Soporte por correo electrónico</div>
          <div className="benefit alt">Funciones básicas de gestión de inventarios y ventas</div>
        </div>
        <button
          className={`plan-button ${selectedPlan === "Básico" ? "active" : ""}`}
          onClick={() => handlePlanChange("Básico")}
        >
          Seleccionar
        </button>
      </div>

      <div
        className={`plan-column ${currentPlan === "Profesional" ? "highlighted" : ""}`}
      >
        <h3>Profesional</h3>
        <p>Precio: $25/mes</p>
        <div className="benefits">
          <div className="benefit">Acceso completo al ERP con todas las funcionalidades</div>
          <div className="benefit alt">Chatbot avanzado con análisis y automatización de tareas</div>
          <div className="benefit">Personalización del ERP según las necesidades específicas de la empresa</div>
          <div className="benefit alt">Soporte prioritario con atención directa</div>
          <div className="benefit">Integración con otros sistemas de la empresa</div>
          <div className="benefit alt">Funcionalidades adicionales como gestión de recursos humanos y reportes detallados</div>
        </div>
        <button
          className={`plan-button ${selectedPlan === "Profesional" ? "active" : ""}`}
          onClick={() => handlePlanChange("Profesional")}
        >
          Seleccionar
        </button>
      </div>
    </div>


        <button className="upgrade-button" onClick={handleUpgrade}>
          Actualizar al Plan {selectedPlan}
        </button>
      </div>
    </div>
  );
};

export default Configuracion;
