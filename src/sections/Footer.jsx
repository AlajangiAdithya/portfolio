import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-box">
      <h1 className="footer-name">Alajangi Adithya</h1>

      {/* Contact Icons */}
      <div className="footer-contact">
        <a href="https://github.com/AlajangiAdithya" target="_blank" rel="noopener noreferrer">
          <img src="/images/github-logo.png" alt="GitHub" className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/adithya-alajangi/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin-logo.png" alt="LinkedIn" className="contact-icon" />
        </a>
      </div>

      {/* Email Address */}
      <p className="footer-email">Email: alajangi.adithya06@gmail.com</p>

      {/* Copyright Line */}
      <p className="footer-copyright">Built with 💻 and ☕ by Adithya — 2025</p>
    </footer>
  );
};

export default Footer;