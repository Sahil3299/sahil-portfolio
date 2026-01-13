import { motion } from "framer-motion";

export default function About() {
  const education = [
    {
      icon: "🎓",
      type: "School",
      degree: "Diploma In Computer Engineering",
      college: "Jaihind Polytechnic Kuran",
      period: "2021-2024",
      description: "Foundation in engineering fundamentals and technical skills"
    },
    {
      icon: "🎓",
      type: "College",
      degree: "B.E in AIML",
      college: "PES Modern College of Engineering Pune",
      period: "2024-2027",
      description: "Specializing in Artificial Intelligence and Machine Learning"
    }
  ];

  return (
    <section id="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-header">
            <h2 className="section-title">👨‍💻 About Me</h2>
            <div className="title-underline" />
          </div>

          <div className="about-text">
            <p className="about-description">
              I'm a third-year engineering student with a strong interest in web
              development and modern JavaScript technologies. I enjoy building
              clean, responsive, and user-focused web applications.
            </p>

            <p className="about-description">
              Currently, I'm focused on improving my React skills, understanding
              real-world project workflows, and preparing for software engineering
              roles. I believe in writing simple, maintainable code and constantly
              improving my fundamentals.
            </p>
          </div>

          {/* Core Values */}
          <div className="about-highlights">
            <motion.div
              className="highlight-item"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="highlight-icon">🚀</div>
              <h4>Problem Solver</h4>
              <p>Analytical thinking and creative solutions</p>
            </motion.div>

            <motion.div
              className="highlight-item"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="highlight-icon">💡</div>
              <h4>Innovative</h4>
              <p>Always exploring new technologies</p>
            </motion.div>

            <motion.div
              className="highlight-item"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="highlight-icon">🎯</div>
              <h4>Detail Oriented</h4>
              <p>Attention to quality and user experience</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="education-header">
            <h2 className="section-title">🎓 Education</h2>
            <div className="title-underline" />
          </div>

          <div className="education-grid">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="education-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="edu-header">
                  <div className="edu-icon">{edu.icon}</div>
                  <div className="edu-type-badge">{edu.type}</div>
                </div>

                <div className="edu-content">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-college">{edu.college}</p>
                  <p className="edu-description">{edu.description}</p>
                  <div className="edu-period">
                    <span className="period-icon">📅</span>
                    {edu.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
