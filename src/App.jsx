import React, { useState } from 'react';
import Profile from './sections/Profile';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import './styles/global.css';
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div>

      <Profile />
      <Skills />
      <Projects />
      <Footer />

    </div>
  );
};

export default App;