
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


// Page components
import Home from './Pages/Home';
import ProjectGallery from './Pages/ProjectGallery';
import Contact from './Pages/Contact';

// components
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project-gallery" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
