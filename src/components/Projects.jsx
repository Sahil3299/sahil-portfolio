import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <Project
          title="Blood Connect"
          desc="Online blood donation platform using MERN stack."
          tags={["React", "Node.js", "MongoDB", "Express"]}
        />
        <Project
          title="Driver Drowsiness Detection"
          desc="ML-based fatigue detection system using OpenCV."
          tags={["Python", "OpenCV", "ML", "Computer Vision"]}
        />
      </div>
    </section>
  );
}

function Project({ title, desc, tags }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -12, boxShadow: "0 25px 50px rgba(37, 99, 235, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-badge"></div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="project-tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <a className="btn btn-project" href="#">View Project →</a>
    </motion.div>
  );
}
