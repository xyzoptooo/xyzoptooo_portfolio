import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Footer from './component/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;