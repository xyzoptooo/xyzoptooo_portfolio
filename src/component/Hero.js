import React, { useState, useEffect } from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  const roles = ['Web Penetration Tester', 'Bug-Bounty Hunter', 'Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]); // Added dependency here

  return (
    <section className="hero">
      {/* Background with original image and overlay */}
      <div className="hero-background">
        <div className="coding-screenshots">
          <img 
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb" 
            alt="Code editor" 
            className="code-image"
          />
        </div>
        <div className="hacker-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="text-content">
          <h1 className="floating-text">Hi! I Am Daniel.</h1>
          
          <h2 className="gradient-text">
            I Am a
            <div className="rotating-roles">
              <span className={`role-text ${fade ? 'fade-in' : 'fade-out'}`}>
                {roles[currentRoleIndex]}
              </span>
            </div>
          </h2>
          
          <div className="code-snippets">
            <div className="code-text">
              <span className="code-line">const passion = 'Cyber Security';</span>
              <span className="code-line">let skills = ['Penetration Testing', 'Web Development'];</span>
            </div>
          </div>
        </div>
        
        <div className="profile-image-container">
          <div className="hacker-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Cybersecurity illustration" 
              className="floating-image"
            />
            <div className="hacker-glow"></div>
            <div className="binary-code-animation">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="binary-digit">
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;