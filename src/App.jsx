import React, { useState } from 'react';
import Profile from './sections/Profile';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './styles/global.css';
import Footer from "./sections/Footer";


const App = () => {
  const [theme, setTheme] = useState('light'); // Default theme

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-container ${theme}`}>

      <Profile theme={theme} />
      <Skills theme={theme} />
      <Projects />
      <Footer />

    </div>
  );
};

export default App;