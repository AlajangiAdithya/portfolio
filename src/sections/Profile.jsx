import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Profile.css";

const Profile = () => {
  const [showHello, setShowHello] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (showHello) {
      setTimeout(() => {
        setShowHello(false);
        setShowDetails(true);
      }, 2000); // Increased time for visibility
    }
  }, [showHello]);

  return (
    <section id="profile" className="profile-box">
      {/* Animated Intro "Hello!" */}
      {showHello && (
        <motion.h1
          className="hello-text"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Hello!
        </motion.h1>
      )}

      {/* Main Profile Details */}
      {showDetails && (
        <motion.div
          className="profile-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Left Side: Name & Title */}
          <div className="profile-info">
            <h1 className="profile-name">I'm Adithya</h1>
            <h2 className="profile-title">A Frontend React Developer</h2>

            {/* Contact Icons */}
            <div className="profile-contact">
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
          </div>

          {/* Right Side: Profile Image */}
          <div className="profile-image-container">
            <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Profile;