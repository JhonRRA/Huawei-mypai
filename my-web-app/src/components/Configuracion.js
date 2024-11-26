import React, { useState } from "react";
import "../styles/Configuracion.css";

const Configuracion = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: "Mi Empresa",
    organizationType: "Privada",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };

  const handleSave = () => {
    // Aquí podrías enviar la información actualizada al backend.
    alert("Información guardada correctamente");
  };

  return (
    <div className="config-container">
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
    </div>
  );
};

export default Configuracion;
