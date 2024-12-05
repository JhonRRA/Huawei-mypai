import React, { useState } from "react";
import "../styles/Configuracion.css";

const Configuracion = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "Username",
    email: "user@email.com",
    password: "",
    phone: "",
  });

  const [companyInfo, setCompanyInfo] = useState({
    name: "My Company",
    organizationType: "Private",
    industry: "Technology",
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
    alert("Information saved successfully");
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleUpgrade = () => {
    setCurrentPlan(selectedPlan);
    alert(`Your plan has been updated to ${selectedPlan}!`);
  };

  return (
    <div className="config-container">
      <div className="config-box user-config">
        <h2>User Settings</h2>
        <div className="form-group">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userInfo.userName}
            onChange={handleUserChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleUserChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
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
      <div className="title-opcion"> 
        <h2>Company Settings</h2>
        </div>
        <div className="form-group">
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={companyInfo.name}
            onChange={handleCompanyChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="organizationType">Type of Organization</label>
          <input
            type="text"
            id="organizationType"
            name="organizationType"
            value={companyInfo.organizationType}
            onChange={handleCompanyChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="industry">Industry or Sector</label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={companyInfo.industry}
            onChange={handleCompanyChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="taxId">Tax Identification Number (TIN)</label>
          <input
            type="text"
            id="taxId"
            name="taxId"
            value={companyInfo.taxId}
            onChange={handleCompanyChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={companyInfo.description}
            onChange={handleCompanyChange}
          ></textarea>
        </div>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>

      <div className="config-box membership-config">
      <div className="title-opcion"> 
        <h2>Upgrade your Membership</h2>
      </div>
        <div className="plan-actual">
          <p>
            Current plan: <strong>{currentPlan}</strong>
          </p>
        </div>
        <div className="plan-options">
      <div
        className={`plan-column ${currentPlan === "Básico" ? "highlighted" : ""}`}
      >
        <h3>Basic</h3>
        <p>Price: $10/month</p>
        <div className="benefits">
          <div className="benefit">Access to essential ERP functions</div>
          <div className="benefit alt">Basic chatbot for initial assistance</div>
          <div className="benefit">Email support</div>
          <div className="benefit alt">Basic inventory and sales management features</div>
        </div>
        <button
          className={`plan-button ${selectedPlan === "Básico" ? "active" : ""}`}
          onClick={() => handlePlanChange("Básico")}
        >
          Select
        </button>
      </div>

      <div
        className={`plan-column ${currentPlan === "Profesional" ? "highlighted" : ""}`}
      >
        <h3>Professional</h3>
        <p>Price: $25/month</p>
        <div className="benefits">
          <div className="benefit">Full access to the ERP with all functionalities</div>
          <div className="benefit alt">Advanced chatbot with task analysis and automation</div>
          <div className="benefit">ERP customization according to the company's specific needs</div>
          <div className="benefit alt">Priority support with direct assistance</div>
          <div className="benefit">Integration with other company systems</div>
          <div className="benefit alt">Additional features such as human resource management and detailed reports</div>
        </div>
        <button
          className={`plan-button ${selectedPlan === "Profesional" ? "active" : ""}`}
          onClick={() => handlePlanChange("Profesional")}
        >
          Select
        </button>
      </div>
    </div>
        <button className="upgrade-button" onClick={handleUpgrade}>
        Upgrade to the Plan {selectedPlan}
        </button>
      </div>
    </div>
  );
};

export default Configuracion;
