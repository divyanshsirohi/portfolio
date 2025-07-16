import './App.css'
import Projects from "./projects.tsx";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function App() {

  return (
    <>
        <div className="fade-up-on-load">

            <div className="hero-section">
                <div className="intro-text">
                    <h1>Hi! I'm Divyansh 👋</h1>
                    <span className="job-title">Full-Stack Developer • Systems Programmer • Machine Learning</span>

                    <div className="quick-links-icons">
                        <a href="https://github.com/divyanshsirohi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://linkedin.com/in/divyanshsirohi" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="mailto:sirohidivyansh@gmail.com"><FaEnvelope /></a>
                    </div>
                </div>

                <img src="WhatsApp Image 2025-07-16 at 22.25.25.jpeg" alt="profile" className="profile" />
            </div>


            <div className="about-section">
                <h2>About me</h2>
                <p className="text">Hi! I'm Divyansh Sirohi, a passionate and versatile developer focused on building scalable systems, intuitive user experiences, and intelligent machine learning solutions. I specialize in systems programming, full-stack web development, and applied machine learning. I enjoy working across the stack from low-level kernel code in Rust to AI driven apps in Python and real-time systems in C++.</p>
            </div>

            <div className="education-section">
                <h2>Education</h2>

                <div className="edu-card">
                    <img
                        src="Manipal_University_Jaipur_logo.png"
                        alt="MIT Logo"
                        className="edu-logo"
                    />

                    <div className="edu-content">
                        <div>
                            <h3 className="edu-institution">Manipal Institute of Technology</h3>
                            <p className="edu-degree">B.Tech in Computer and Communication Engineering</p>
                            <p className="edu-degree"> CGPA: 8.04 / 10.00</p>
                        </div>
                        <span className="edu-dates">-Expected graduation in 2027</span>
                    </div>
                </div>
            </div>


            <div className="skills-section">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {[
                        "C", "C++", "Python", "Java", "Go", "Rust", "JavaScript", "TypeScript",
                        "ReactJS", "Next.js", "Tailwind CSS", "Node.js", "Express",
                        "PostgreSQL", "MongoDB", "Docker",
                        "DSA", "OOP", "System Design", "DBMS", "Embedded Systems",
                        "Pytest", "Jest", "Postman", "Figma", "GitHub Actions"
                    ].map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </div>

            <Projects />

            <h3>For more projects please check out my GitHub!</h3>

        </div>
    </>
  )
}

export default App
