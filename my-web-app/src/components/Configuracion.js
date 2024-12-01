import React, { useState } from "react";
import "../styles/Configuracion.css";

const Configuracion = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: "Mi Empresa",
    organizationType: "Privada",
    description: "",
  });

  const [currentPlan, setCurrentPlan] = useState("Básico"); // Plan actual
  const [selectedPlan, setSelectedPlan] = useState("Básico"); // Plan seleccionado

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };

  const handleSave = () => {
    // Aquí podrías enviar la información actualizada al backend.
    alert("Información guardada correctamente");
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleUpgrade = () => {
    // Aquí puedes integrar lógica para procesar el cambio de plan, como un API call.
    setCurrentPlan(selectedPlan);
    alert(`¡Has actualizado tu plan a ${selectedPlan}!`);
  };

  return (
    <div className="config-container">
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="organizationType">Tipo de Organización</label>
          <input
            type="text"
            id="organizationType"
            name="organizationType"
            value={companyInfo.organizationType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={companyInfo.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="save-button" onClick={handleSave}>
          Guardar
        </button>
      </div>

      {/* Mejora de Membresía */}
      <div className="config-box">
        <h2>Mejora tu Membresía</h2>
        <p>Plan actual: <strong>{currentPlan}</strong></p>
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
        <button className="upgrade-button" onClick={handleUpgrade}>
          Actualizar al Plan {selectedPlan}
        </button>
      </div>
    </div>
  );
};

export default Configuracion;
