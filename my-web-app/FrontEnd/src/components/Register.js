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
    console.log("Form details:", formData);
  };

  return (
    <div className="auth-container">
    <div className="form-wrapper">
      <div className="register-container">
        {step === 1 ? (
          // Paso 1: Formulario de registro
          <form onSubmit={(e) => e.preventDefault()} className="register-form">
            <div className="form-column">
              <div className="section-title">Company details</div>
              <div className="form-group">
                <label htmlFor="companyName">Company name</label>
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
                <label htmlFor="organizationType">Type of organization</label>
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
                <label htmlFor="industry">Industry or sector</label>
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
                  Tax Identification Number (TIN)
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
              <div className="section-title">User details</div>
              <div className="form-group">
                <label htmlFor="fullName">Full name</label>
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
                <label htmlFor="email">Email address</label>
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
                <label htmlFor="password">Password</label>
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
                <label htmlFor="confirmPassword">Re-enter password</label>
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
                <label htmlFor="phoneNumber">Phone number</label>
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
              Select your subscription plan
            </div>
            <div className="plans-grid">
              <div className="plan-card">
                <h3>Basic</h3>
                <p className="plan-price">$10/month</p>
                <ul>
                <div className="benefit">Access to essential ERP functions</div>
                <div className="benefit alt">Basic chatbot for initial assistance</div>
                <div className="benefit">Email support</div>
                <div className="benefit alt">Basic inventory and sales management features</div>
                </ul>
                <button className="plan-button">Select</button>
              </div>
              <div className="plan-card">
                <h3>Profesional</h3>
                <p className="plan-price">$20/month</p>
                <ul>
                <div className="benefit">Full access to the ERP with all functionalities</div>
                <div className="benefit alt">Advanced chatbot with task analysis and automation</div>
                <div className="benefit">ERP customization according to the company's specific needs</div>
                <div className="benefit alt">Priority support with direct assistance</div>
                <div className="benefit">Integration with other company systems</div>
                <div className="benefit alt">Additional features like human resource management and detailed reports</div>
                </ul>
                <button className="plan-button">Select</button>
              </div>
            </div>
            <div className="form-submit-container">
              <button
                type="button"
                className="register-button"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                type="submit"
                className="register-button"
                onClick={handleSubmit}
              >
                Confirm
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
