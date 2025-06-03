import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>

      <div className="contact-links">
          <a href="https://github.com/AlajangiAdithya" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-logo.png" alt="GitHub" className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/in/adithya-alajangi/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-logo.png" alt="LinkedIn" className="contact-icon" />
          </a>
          <a href="mailto:alajangi.adithya06@gmail.com">
            <img src="/images/mail-logo.png" alt="Email" className="contact-icon" />
          </a>
      </div>
    </section>
  );
};

export default Contact;