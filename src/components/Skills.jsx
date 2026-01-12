import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "🏗️" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "GitHub", icon: "🐙" },
    { name: "Tailwind CSS", icon: "🎯" },
    { name: "Bootstrap", icon: "⭐" },
    { name: "Auth API", icon: "🔐" },
    { name: "SQL", icon: "🗄️" }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            whileHover={{ scale: 1.12, rotateZ: 5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{skill.icon}</div>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
