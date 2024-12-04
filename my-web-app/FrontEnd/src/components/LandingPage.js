import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/login");
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">MyPAI</div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="nav-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MyPAI</h1>
          <p>
          Transform your microbusiness management with an all-in-one platform. 
          Seamlessly integrate sales, customer relationships, and operations, 
          and take your business to the next level.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="hero-image">
          <img
            src="/images/landingpagefoto.png"
            alt="Example"
            className="example-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Features</h2>
        <div className="features-grid">
          {[
            {
              title: "Streamlined Sales Management",
              description: "Track leads, manage customer interactions, and close deals faster—automated and simple.",
            },
            {
              title: "Real-Time Analytics",
              description: "Access powerful insights and make smarter business decisions instantly.",
            },
            {
              title: "Automated Workflows",
              description: "Automate routine tasks and eliminate bottlenecks for increased efficiency.",
            },
            {
              title: "Centralized Customer Management",
              description: "Manage orders, customer data, and relationships all in one place.",
            },
            {
              title: "Customizable Dashboard",
              description: "Tailor your dashboard to focus on the data that drives your business.",
            },
            {
              title: "Scalable Growth",
              description: "Grow with ease. Our solution adapts to your business needs.",
            },
          ].map((feature, index) => (
            <div className="feature-item" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <h2>About Us</h2>
          <p>
          At MYPAI, we provide businesses with an all-in-one 
          CRM and ERP solution that simplifies operations, 
          boosts efficiency, and supports growth. Trusted by 
          entrepreneurs globally, our platform helps you 
          manage sales, inventory, and customer relationships 
          in one place.
          </p>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} MyPAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
