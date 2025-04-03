import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCode, FaBug, FaLock, FaServer, FaGlobe } from 'react-icons/fa';
import styles from './../Styles/About.module.css'; // Correct CSS Modules import

const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial 
        color="#2563eb" 
        wireframe={true} 
        emissive="#3b82f6" 
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const About = () => {
  const skills = [
    { name: 'Penetration Testing', icon: <FaShieldAlt />, level: 90 },
    { name: 'Web Security', icon: <FaLock />, level: 85 },
    { name: 'Bug Hunting', icon: <FaBug />, level: 80 },
    { name: 'Secure Coding', icon: <FaCode />, level: 75 },
    { name: 'Network Security', icon: <FaServer />, level: 70 },
    { name: 'Threat Analysis', icon: <FaGlobe />, level: 75 }
  ];

  const certifications = [
    { 
      name: 'Certified Ethical Hacker', 
      issuer: 'EC-Council',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    { 
      name: 'OSCP', 
      issuer: 'Offensive Security',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* 3D Background Section */}
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            About Me
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Introduction Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.introduction}
        >
          <div>
            <h2 className={styles.sectionTitle}>Daniel Mutua</h2>
            <p className={styles.introText}>
              I'm a Cyber Security Analyst and Penetration Tester with a passion for securing digital assets and uncovering vulnerabilities. 
              With over a year of experience as a mid-level Penetration Tester, I've contributed to numerous security projects and helped organizations 
              strengthen their defenses against evolving cyber threats.
            </p>
            <p className={styles.introText}>
              My approach combines technical expertise with creative problem-solving to identify and mitigate security risks before they can be exploited.
            </p>
          </div>
          <div className={styles.profileImageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1620385019253-b051a26048ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Cybersecurity professional" 
              className={styles.profileImage}
            />
            <div className={styles.imageBorder}></div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section className={styles.skillsSection}>
          <h2 className={styles.sectionHeading}>My Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.skillCard}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>
                    {skill.icon}
                  </div>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.experienceSection}>
          <h2 className={styles.sectionHeading}>Professional Journey</h2>
          <div className={styles.experienceList}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.experienceCard}
            >
              <h3 className={styles.jobTitle}>Mid-Level Penetration Tester</h3>
              <p className={styles.jobDuration}>2022 - Present</p>
              <ul className={styles.jobResponsibilities}>
                <li>Conducted comprehensive security assessments for web applications and networks</li>
                <li>Identified and reported critical vulnerabilities including SQLi, XSS, and authentication flaws</li>
                <li>Collaborated with development teams to implement secure coding practices</li>
                <li>Performed red team exercises to test organizational defenses</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.experienceCard}
            >
              <h3 className={styles.jobTitle}>Security Researcher</h3>
              <p className={styles.jobDuration}>2021 - 2022</p>
              <ul className={styles.jobResponsibilities}>
                <li>Participated in bug bounty programs, discovering and reporting vulnerabilities</li>
                <li>Developed custom security tools and scripts for penetration testing</li>
                <li>Researched emerging threats and attack vectors</li>
                <li>Contributed to open-source security projects</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className={styles.certificationsSection}>
          <h2 className={styles.sectionHeading}>Certifications</h2>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.certificationCard}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.certificationImage}>
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className={styles.certImage}
                  />
                </div>
                <div className={styles.certificationDetails}>
                  <h3 className={styles.certificationName}>{cert.name}</h3>
                  <p className={styles.certificationIssuer}>{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.philosophySection}
        >
          <h2 className={styles.sectionHeading}>My Security Philosophy</h2>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyItem}>
              <div className={styles.philosophyIcon}>
                <FaShieldAlt />
              </div>
              <h3 className={styles.philosophyTitle}>Defense in Depth</h3>
              <p className={styles.philosophyText}>
                Security should be implemented in layers, creating multiple barriers against potential threats.
              </p>
            </div>
            <div className={styles.philosophyItem}>
              <div className={styles.philosophyIcon}>
                <FaBug />
              </div>
              <h3 className={styles.philosophyTitle}>Offensive Mindset</h3>
              <p className={styles.philosophyText}>
                To defend effectively, you must think like an attacker and anticipate their moves.
              </p>
            </div>
            <div className={styles.philosophyItem}>
              <div className={styles.philosophyIcon}>
                <FaCode />
              </div>
              <h3 className={styles.philosophyTitle}>Secure by Design</h3>
              <p className={styles.philosophyText}>
                Security should be integrated from the initial design phase, not bolted on as an afterthought.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.ctaSection}
        >
          <h2 className={styles.ctaTitle}>Ready to Secure Your Digital Assets?</h2>
          <p className={styles.ctaText}>
            Let's work together to identify vulnerabilities and strengthen your security posture.
          </p>
          <button className={styles.ctaButton}>
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;