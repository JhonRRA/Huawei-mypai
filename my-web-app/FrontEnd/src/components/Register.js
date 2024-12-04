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

  const [step, setStep] = useState(1); // Estado para controlar el paso actual (1: Registro, 2: Planes de suscripción)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setStep(2); // Cambia al paso 2 (Planes de suscripción)
  };

  const handleBack = () => {
    setStep(1); // Vuelve al paso 1 (Formulario de registro)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario, validaciones, etc.
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="auth-container">
    <div className="form-wrapper">
      <div className="register-container">
        {step === 1 ? (
          // Paso 1: Formulario de registro
          <form onSubmit={(e) => e.preventDefault()} className="register-form">
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
                <label htmlFor="taxNumber">
                  Número de identificación fiscal (Tax ID)
                </label>
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
              <button
                type="button"
                className="register-button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        ) : (
          // Paso 2: Selección de planes
          <div className="plans-container">
            <div className="section-title">
              Selecciona tu plan de suscripción
            </div>
            <div className="plans-grid">
              <div className="plan-card">
                <h3>Básico</h3>
                <p className="plan-price">$10/mes</p>
                <ul>
                <div className="benefit">Acceso a funciones esenciales del ERP</div>
                <div className="benefit alt">Chatbot básico para asistencia inicial</div>
                <div className="benefit">Soporte por correo electrónico</div>
                <div className="benefit alt">Funciones básicas de gestión de inventarios y ventas</div>
                </ul>
                <button className="plan-button">Seleccionar</button>
              </div>
              <div className="plan-card">
                <h3>Profesional</h3>
                <p className="plan-price">$20/mes</p>
                <ul>
                <div className="benefit">Acceso completo al ERP con todas las funcionalidades</div>
                <div className="benefit alt">Chatbot avanzado con análisis y automatización de tareas</div>
                <div className="benefit">Personalización del ERP según las necesidades específicas de la empresa</div>
                <div className="benefit alt">Soporte prioritario con atención directa</div>
                <div className="benefit">Integración con otros sistemas de la empresa</div>
                <div className="benefit alt">Funcionalidades adicionales como gestión de recursos humanos y reportes detallados</div>
                </ul>
                <button className="plan-button">Seleccionar</button>
              </div>
            </div>
            <div className="form-submit-container">
              <button
                type="button"
                className="register-button"
                onClick={handleBack}
              >
                Atrás
              </button>
              <button
                type="submit"
                className="register-button"
                onClick={handleSubmit}
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Register;
