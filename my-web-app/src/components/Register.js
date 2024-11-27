import React, { useState } from "react";
import "../styles/Register.css"; // Asegúrate de tener el archivo de estilos adecuado

const Register = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    organizationType: "",
    industry: "",
    taxNumber: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario, validaciones, etc.
    console.log(formData);
  };

  return (
  <div className="form-wrapper">
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        
        {/* Datos de la empresa */}
        <div className="form-column">
          <div className="section-title">Datos de la empresa</div>
          <div className="form-group">
            <label htmlFor="companyName">Nombre de la empresa</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="organizationType">Tipo de organización</label>
            <input
              type="text"
              id="organizationType"
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="industry">Industria o sector</label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="taxNumber">Número de identificación fiscal (Tax ID)</label>
            <input
              type="text"
              id="taxNumber"
              name="taxNumber"
              value={formData.taxNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Datos del usuario */}
        <div className="form-column">
          <div className="section-title">Datos del usuario</div>
          <div className="form-group">
            <label htmlFor="fullName">Nombre completo</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Reescribir contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Número telefónico</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-submit-container">
          <button type="submit" className="register-button">Registrarse</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Register;
