import React from "react";
import ReactDOM from "react-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Landy</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="nav-button">Get Started</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Landy</h1>
          <p>Your go-to solution for showcasing projects beautifully.</p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/600" alt="Hero" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Features</h2>
        <div className="features-grid">
          {[
            { title: "Responsive Design", description: "Works on any device, large or small." },
            { title: "Fast Performance", description: "Optimized for blazing-fast load times." },
            { title: "Customizable", description: "Easily adapt to your needs with minimal effort." },
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
        <h2>About Us</h2>
        <p>
          Landy is built to help teams create professional landing pages quickly.
          With modern tools and best practices, you can focus on what matters.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Landy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
