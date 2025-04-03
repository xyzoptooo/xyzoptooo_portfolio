import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">DM</div>
      <div 
        className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
        <li><Link to="/skills" onClick={toggleMobileMenu}>Skills</Link></li>
        <li><Link to="/projects" onClick={toggleMobileMenu}>Projects</Link></li>
        <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;