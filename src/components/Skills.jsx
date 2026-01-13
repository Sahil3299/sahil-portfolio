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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">💻 Skills & Technologies</h2>
        <div className="title-underline" style={{ margin: "1rem 0" }} />
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            variants={itemVariants}
            whileHover={{ scale: 1.08, rotateZ: 3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
