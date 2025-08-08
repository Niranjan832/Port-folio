import React, { useState, useRef } from 'react';
import { Github, Linkedin, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const awardsRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setSidebarOpen(false);
  };

  const colors = {
    primary: '#2563eb',    // Modern blue
    secondary: '#1e40af',  // Darker blue
    accent: '#3b82f6',     // Light blue
    dark: '#1f2937',       // Dark gray
  };

  const styles = {
    app: {
      position: 'relative',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      backgroundColor: '#f8fafc',
      lineHeight: 1.6,
    },
    menuToggle: {
      position: 'fixed',
      top: '20px',
      left: '20px',
      zIndex: 1001,
      background: 'white',
      border: `2px solid ${colors.primary}`,
      borderRadius: '12px',
      width: '52px',
      height: '52px',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(37, 99, 235, 0.15)',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sidebar: {
      position: 'fixed',
      left: sidebarOpen ? '0' : '-320px',
      top: 0,
      width: '320px',
      height: '100vh',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      borderRight: `3px solid ${colors.primary}`,
      transition: 'left 0.3s ease',
      zIndex: 1000,
      padding: '80px 25px 25px',
      overflowY: 'auto',
      boxShadow: '4px 0 30px rgba(0, 0, 0, 0.1)',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.4)',
      zIndex: 999,
    },
    profileSection: {
      textAlign: 'center',
      marginBottom: '35px',
      paddingBottom: '25px',
      borderBottom: `2px solid ${colors.primary}`,
    },
    profileImageContainer: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
      margin: '0 auto 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px',
      color: 'white',
      fontWeight: '700',
      border: '4px solid white',
      boxShadow: `0 8px 25px rgba(37, 99, 235, 0.3)`,
      position: 'relative',
      overflow: 'hidden',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    profileName: {
      fontSize: '22px',
      fontWeight: 700,
      marginBottom: '8px',
      color: colors.dark,
    },
    profileTitle: {
      color: colors.primary,
      fontSize: '15px',
      fontWeight: 600,
      marginBottom: '15px',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '20px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontSize: '12px',
      color: '#64748b',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '15px',
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
    },
    navMenu: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    navLink: {
      display: 'block',
      width: '100%',
      padding: '14px 18px',
      color: colors.dark,
      borderRadius: '10px',
      transition: 'all 0.3s ease',
      fontWeight: 600,
      fontSize: '14px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left',
      marginBottom: '6px',
    },
    section: {
      padding: '60px 40px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    sectionAlt: {
      backgroundColor: '#f8fafc',
    },
    sectionContent: {
      maxWidth: '900px',
      width: '100%',
    },
    sectionH2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '40px',
      color: colors.dark,
      position: 'relative',
      paddingBottom: '15px',
    },
    sectionH2After: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '80px',
      height: '4px',
      background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
      borderRadius: '2px',
    },
    sectionP: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: '#475569',
      marginBottom: '20px',
    },
    experienceItem: {
      marginBottom: '35px',
      padding: '30px',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      border: `2px solid ${colors.primary}`,
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(37, 99, 235, 0.1)',
    },
    experienceHeader: {
      marginBottom: '15px',
    },
    experienceTitle: {
      fontSize: '1.4rem',
      fontWeight: 700,
      color: colors.primary,
      marginBottom: '8px',
    },
    experienceCompany: {
      fontSize: '1.1rem',
      color: colors.dark,
      fontWeight: 600,
      marginBottom: '5px',
    },
    experienceDate: {
      fontSize: '0.95rem',
      color: '#64748b',
      fontWeight: 500,
    },
    experiencePoints: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0 0 0',
    },
    experiencePoint: {
      padding: '8px 0',
      color: '#475569',
      position: 'relative',
      paddingLeft: '25px',
      marginBottom: '12px',
      lineHeight: 1.6,
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginTop: '30px',
    },
    skillCard: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      padding: '25px',
      borderRadius: '15px',
      border: `2px solid ${colors.accent}`,
      boxShadow: '0 8px 30px rgba(59, 130, 246, 0.1)',
    },
    skillTitle: {
      fontSize: '1.2rem',
      fontWeight: 700,
      marginBottom: '18px',
      color: colors.primary,
    },
    skillList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    skillItem: {
      padding: '6px 0',
      color: '#475569',
      fontSize: '0.95rem',
      fontWeight: 500,
    },
    projectCard: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      padding: '30px',
      borderRadius: '15px',
      border: `2px solid ${colors.primary}`,
      marginBottom: '25px',
      boxShadow: '0 8px 30px rgba(37, 99, 235, 0.1)',
      transition: 'all 0.3s ease',
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '15px',
    },
    projectTitle: {
      fontSize: '1.3rem',
      fontWeight: 700,
      color: colors.primary,
      marginBottom: '8px',
    },
    projectTech: {
      fontSize: '0.95rem',
      color: colors.secondary,
      marginBottom: '15px',
      fontWeight: 600,
      fontStyle: 'italic',
    },
    projectDescription: {
      color: '#475569',
      lineHeight: 1.7,
    },
    projectLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      color: colors.primary,
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 600,
      transition: 'all 0.3s ease',
    },
    educationItem: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      padding: '25px',
      borderRadius: '15px',
      border: `2px solid ${colors.accent}`,
      marginBottom: '20px',
      boxShadow: '0 8px 30px rgba(59, 130, 246, 0.1)',
    },
    educationDegree: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: colors.primary,
      marginBottom: '8px',
    },
    educationSchool: {
      fontSize: '1.05rem',
      color: colors.dark,
      fontWeight: 600,
      marginBottom: '5px',
    },
    educationDate: {
      fontSize: '0.95rem',
      color: '#64748b',
      fontWeight: 500,
    },
    awardsList: {
      listStyle: 'none',
      padding: 0,
      margin: '25px 0 0 0',
    },
    awardItem: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      padding: '18px 25px',
      borderRadius: '12px',
      border: `2px solid ${colors.accent}`,
      marginBottom: '12px',
      color: '#475569',
      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.1)',
    },
    awardTitle: {
      fontWeight: 700,
      color: colors.primary,
    },
    sectionDivider: {
      fontSize: '1.4rem',
      fontWeight: 700,
      marginTop: '40px',
      marginBottom: '20px',
      color: colors.dark,
    },
  };

  return (
    <div style={styles.app}>
      {/* Hamburger Menu Button */}
      <button 
        style={styles.menuToggle}
        onClick={toggleSidebar}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      >
        <div style={{
          width: '22px',
          height: '2px',
          background: sidebarOpen ? 'transparent' : colors.primary,
          position: 'relative',
          transition: 'all 0.3s ease',
        }}>
          <div style={{
            position: 'absolute',
            width: '22px',
            height: '2px',
            background: colors.primary,
            top: sidebarOpen ? '0' : '-7px',
            left: 0,
            transform: sidebarOpen ? 'rotate(45deg)' : 'rotate(0)',
            transition: 'all 0.3s ease',
          }} />
          <div style={{
            position: 'absolute',
            width: '22px',
            height: '2px',
            background: colors.primary,
            bottom: sidebarOpen ? '0' : '-7px',
            left: 0,
            transform: sidebarOpen ? 'rotate(-45deg)' : 'rotate(0)',
            transition: 'all 0.3s ease',
          }} />
        </div>
      </button>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.profileSection}>
          <div style={styles.profileImageContainer}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: '700',
              color: 'white'
            }}>
              NB
            </div>
          </div>
          <h3 style={styles.profileName}>NIRANJAN B</h3>
          <p style={styles.profileTitle}>Data Analyst & Decision Scientist</p>
          
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <Phone size={14} />
              <span>+91 95141 05807</span>
            </div>
            <div style={styles.contactItem}>
              <Mail size={14} />
              <span>niranjan382002@gmail.com</span>
            </div>
            <div style={styles.contactItem}>
              <MapPin size={14} />
              <span>Coimbatore, Tamil Nadu</span>
            </div>
          </div>

          <div style={styles.socialLinks}>
            <a 
              href="https://github.com/niranjan382002" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px) scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0) scale(1)'}
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/niranjan-b-data-analyst" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px) scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0) scale(1)'}
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <nav>
          <ul style={styles.navMenu}>
            {[
              { text: 'About', ref: aboutRef },
              { text: 'Experience', ref: experienceRef },
              { text: 'Education', ref: educationRef },
              { text: 'Skills', ref: skillsRef },
              { text: 'Projects', ref: projectsRef },
              { text: 'Awards & Certifications', ref: awardsRef },
            ].map((item, index) => (
              <li key={index}>
                <button 
                  style={styles.navLink}
                  onClick={() => scrollToSection(item.ref)}
                  onMouseEnter={(e) => {
                    e.target.style.background = `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`;
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = colors.dark;
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div style={styles.overlay} onClick={() => setSidebarOpen(false)} />}

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section ref={aboutRef} style={styles.section}>
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionH2}>
              About Me
              <div style={styles.sectionH2After}></div>
            </h2>
            <p style={styles.sectionP}>
              Results-driven Data Analyst with a strong foundation in data preprocessing, statistical analysis, and dashboard development. Skilled at extracting insights from structured and unstructured datasets using Python, SQL, and industry-standard libraries.
            </p>
            <p style={styles.sectionP}>
              Demonstrated ability to support business decisions through data storytelling, machine learning, and hypothesis-driven experimentation. Passionate about transforming complex data into actionable insights that drive strategic business outcomes.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} style={{...styles.section, ...styles.sectionAlt}}>
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionH2}>
              Professional Experience
              <div style={styles.sectionH2After}></div>
            </h2>
            
            <div style={styles.experienceItem}>
              <div style={styles.experienceHeader}>
                <h3 style={styles.experienceTitle}>Decision Scientist</h3>
                <p style={styles.experienceCompany}>Mu Sigma</p>
                <p style={styles.experienceDate}>Aug 2024 – Dec 2024</p>
              </div>
              <ul style={styles.experiencePoints}>
                <li style={styles.experiencePoint}>
                  <span style={{position: 'absolute', left: 0, color: colors.primary, fontSize: '20px'}}>•</span>
                  Analyzed large-scale customer datasets to extract churn indicators (KPI) and behavioral segments using high-dimensional clustering algorithms.
                </li>
                <li style={styles.experiencePoint}>
                  <span style={{position: 'absolute', left: 0, color: colors.primary, fontSize: '20px'}}>•</span>
                  Built and analyzed predictive models using Random Forest and quantile inferencing, achieving 88% accuracy via extensive hyperparameter tuning.
                </li>
                <li style={styles.experiencePoint}>
                  <span style={{position: 'absolute', left: 0, color: colors.primary, fontSize: '20px'}}>•</span>
                  Developed an interactive React dashboard to visualize churn risks, improving customer retention by 1.2× and revenue by 1.4×.
                </li>
              </ul>
            </div>

            <div style={styles.experienceItem}>
              <div style={styles.experienceHeader}>
                <h3 style={styles.experienceTitle}>Engineering Intern</h3>
                <p style={styles.experienceCompany}>Tekion India Pvt Ltd</p>
                <p style={styles.experienceDate}>Dec 2022 – Jan 2023</p>
              </div>
              <ul style={styles.experiencePoints}>
                <li style={styles.experiencePoint}>
                  <span style={{position: 'absolute', left: 0, color: colors.primary, fontSize: '20px'}}>•</span>
                  Designed a ride-by-wire steering system targeting 30% cost reduction for electric vehicles.
                </li>
                <li style={styles.experiencePoint}>
                  <span style={{position: 'absolute', left: 0, color: colors.primary, fontSize: '20px'}}>•</span>
                  Implemented single-shot edge-based computer vision object detection algorithm (YOLO) to support real-time autonomous navigation and obstacle avoidance.
                </li>
                <li style={styles.experiencePoint}>
                  <span style={{position: 'absolute', left: 0, color: colors.primary, fontSize: '20px'}}>•</span>
                  Trained and optimized a Convolutional Neural Network (CNN) for vehicular imagery to improve object classification accuracy by 18% IoU.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section ref={educationRef} style={styles.section}>
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionH2}>
              Education
              <div style={styles.sectionH2After}></div>
            </h2>
            
            <div style={styles.educationItem}>
              <h3 style={styles.educationDegree}>M.Tech, Computer Science Engineering</h3>
              <p style={styles.educationSchool}>Amrita Vishwa Vidyapeetham</p>
              <p style={styles.educationDate}>Jul 2025 – Jun 2027</p>
            </div>

            <div style={styles.educationItem}>
              <h3 style={styles.educationDegree}>B.E., Electrical and Electronics Engineering</h3>
              <p style={styles.educationSchool}>Coimbatore Institute of Technology</p>
              <p style={styles.educationDate}>Aug 2020 – May 2024</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} style={{...styles.section, ...styles.sectionAlt}}>
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionH2}>
              Technical Skills
              <div style={styles.sectionH2After}></div>
            </h2>
            
            <div style={styles.skillsGrid}>
              <div style={styles.skillCard}>
                <h3 style={styles.skillTitle}>Languages & Tools</h3>
                <ul style={styles.skillList}>
                  {['Python', 'SQL', 'Java', 'JavaScript', 'Excel', 'AWS'].map((skill, index) => (
                    <li key={index} style={styles.skillItem}>• {skill}</li>
                  ))}
                </ul>
              </div>

              <div style={styles.skillCard}>
                <h3 style={styles.skillTitle}>Libraries & Frameworks</h3>
                <ul style={styles.skillList}>
                  {['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'TensorFlow', 'Flask', 'React', 'LangChain', 'FAISS', 'RAG'].map((skill, index) => (
                    <li key={index} style={styles.skillItem}>• {skill}</li>
                  ))}
                </ul>
              </div>

              <div style={styles.skillCard}>
                <h3 style={styles.skillTitle}>Soft Skills</h3>
                <ul style={styles.skillList}>
                  {['Problem Solving', 'Cross-functional Communication', 'Data Storytelling', 'Project Management'].map((skill, index) => (
                    <li key={index} style={styles.skillItem}>• {skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} style={styles.section}>
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionH2}>
              Featured Projects
              <div style={styles.sectionH2After}></div>
            </h2>

            <div style={styles.projectCard}>
              <div style={styles.projectHeader}>
                <div>
                  <h3 style={styles.projectTitle}>Interactive AI Diary App</h3>
                  <p style={styles.projectTech}>React Native, Flask, RAG, FAISS, PostgreSQL</p>
                </div>
                <a 
                  href="https://github.com/Niranjan832/reflect-gemini-journal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.projectLink}
                >
                  <ExternalLink size={16} />
                  View Code
                </a>
              </div>
              <div style={styles.projectDescription}>
                <p>• Built a multi-platform journaling app using Retrieval Augmented Generation (RAG) for personalized diary summaries.</p>
                <p>• Integrated speech-to-text, emotion analysis, and Nomic embeddings to generate context-aware reflections.</p>
                <p>• Used PostgreSQL for managing metadata and storing structured .txt entries by date with sentiment and mood tracking.</p>
              </div>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectHeader}>
                <div>
                  <h3 style={styles.projectTitle}>AI Interviewer</h3>
                  <p style={styles.projectTech}>LangChain, FAISS, Flask, RAG</p>
                </div>
                <a 
                  href="https://github.com/Niranjan832/Ai-interviewer-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.projectLink}
                >
                  <ExternalLink size={16} />
                  View Code
                </a>
              </div>
              <div style={styles.projectDescription}>
                <p>• Created a retrieval-augmented question-answering system to generate personalized interview questions using LangChain and FAISS.</p>
                <p>• Developed LangChain pipelines, integrating Nomic embeddings to boost the accuracy of the AI-based interview bot.</p>
                <p>• Improved interview scoring accuracy by 20% using domain-specific embeddings and response analysis.</p>
                <p>• Enabled structured feedback delivery with explainable AI-driven scoring logic.</p>
              </div>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectHeader}>
                <div>
                  <h3 style={styles.projectTitle}>Logistics Optimization Platform</h3>
                  <p style={styles.projectTech}>Python, Graph Theory, Flask</p>
                </div>
                <a 
                  href="https://github.com/Niranjan832/logistics" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.projectLink}
                >
                  <ExternalLink size={16} />
                  View Code
                </a>
              </div>
              <div style={styles.projectDescription}>
                <p>• Designed a graph-based route optimization model using metaheuristics, reducing delivery time by 19% over traditional algorithms.</p>
                <p>• Deployed a Flask-based dashboard for real-time logistics insights, improving fleet utilization by 20%.</p>
              </div>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectHeader}>
                <div>
                  <h3 style={styles.projectTitle}>Predictive Battery Charging System</h3>
                  <p style={styles.projectTech}>Machine Learning, Regression Analysis</p>
                </div>
                <a 
                  href="https://github.com/niranjan382002/battery-charging-system" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.projectLink}
                >
                  <ExternalLink size={16} />
                  View Code
                </a>
              </div>
              <div style={styles.projectDescription}>
                <p>• Developed a smart charging model using regression, achieving 92% prediction accuracy.</p>
                <p>• Improved battery lifespan by 20% through dynamic usage pattern analysis and optimized charging logic.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Certifications Section */}
        <section ref={awardsRef} style={{...styles.section, ...styles.sectionAlt}}>
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionH2}>
              Awards, Certifications & Publications
              <div style={styles.sectionH2After}></div>
            </h2>
            
            <h3 style={styles.sectionDivider}>Achievements</h3>
            <ul style={styles.awardsList}>
              <li style={styles.awardItem}>
                <span style={styles.awardTitle}>Finalist – Ashok Leyland Grand Challenge</span> (2024)
              </li>
              <li style={styles.awardItem}>
                <span style={styles.awardTitle}>Finalist – Smart India Hackathon</span> (2022)
              </li>
            </ul>

            <h3 style={styles.sectionDivider}>Certifications</h3>
            <ul style={styles.awardsList}>
              <li style={styles.awardItem}>
                <span style={styles.awardTitle}>Machine Learning</span> – IIT Madras (2023)
              </li>
              <li style={styles.awardItem}>
                <span style={styles.awardTitle}>Power Electronics in EVs</span> – IIT Madras (2023)
              </li>
              <li style={styles.awardItem}>
                <span style={styles.awardTitle}>Data Analytics & Linear Regression</span> – Analytica (2022)
              </li>
              <li style={styles.awardItem}>
                <span style={styles.awardTitle}>Fundamentals of Data Analytics</span> – Analytica (2022)
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;