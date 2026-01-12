import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I’m a third-year engineering student with a strong interest in web
          development and modern JavaScript technologies. I enjoy building
          clean, responsive, and user-focused web applications.
        </p>

        <p style={{ marginTop: "15px" }}>
          Currently, I’m focused on improving my React skills, understanding
          real-world project workflows, and preparing for software engineering
          roles. I believe in writing simple, maintainable code and constantly
          improving my fundamentals.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ marginTop: "60px" }}
      >
        <h2>Education</h2>
        <div className="education-grid">
          {[
            {
              icon: "🎓",
              type: "School",
              degree: "Diploma",
              college: "Jaihind Polytechnic Kuran",
              period: "2021-2024"
            },
            {
              icon: "🎓",
              type: "College",
              degree: "B.E in AIML",
              college: "PES Modern College of Engineering Pune",
              period: "2024-2027"
            }
          ].map((edu, idx) => (
            <motion.div
              key={idx}
              className="education-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-type">{edu.type}</div>
              <h3>{edu.degree}</h3>
              <p className="edu-college">{edu.college}</p>
              <p className="edu-period">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
