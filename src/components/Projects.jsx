import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">🚀 Featured Projects</h2>
        <div className="title-underline" style={{ margin: "1rem 0" }} />
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Project
          title="Blood Connect"
          desc="Online blood donation platform using MERN stack."
          tags={["React", "Node.js", "MongoDB", "Express"]}
          url="https://blood-connect-teal.vercel.app/"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeN-BE5kekzky21Qf-Hv8RvWFfJaoz2uoVA&s"
          variants={itemVariants}
        />
        <Project
          title="Driver Drowsiness Detection"
          desc="ML-based fatigue detection system using OpenCV."
          tags={["Python", "OpenCV", "ML", "Computer Vision"]}
          url="https://github.com/sahil3299/driver-drowsiness-detection"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIz1931FLaYjfG56VEy9Z8trHoP-sZ5RIU8A&s"
          variants={itemVariants}
        />
      </motion.div>
    </section>
  );
}

function Project({ title, desc, tags, variants, url, img }) {
  return (
    <motion.div
      className="project-card"
      variants={variants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {img && <img src={img} alt={`${title} screenshot`} className="project-img" />}
      <div className="project-header">
        <div className="project-badge"></div>
        <h3>{title}</h3>
      </div>
      
      <p className="project-desc">{desc}</p>
      
      <div className="project-tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      
      <a className="btn btn-project" href={url} target="_blank" rel="noopener noreferrer">View Project →</a>
    </motion.div>
  );
}
