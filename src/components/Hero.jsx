import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/Sahil_Resume.pdf";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          👋 Welcome to my portfolio
        </motion.div>
        
        <h1>Hi, I'm Sahil</h1>
        <p className="hero-subtitle">Engineering Student | Web Developer | React Learner</p>

        <div className="hero-buttons">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-outline" href={resume} download>
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/Sahil3299" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sahil-shinde-a30948329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profile}
          alt="profile"
          className="hero-image"
        />
      </motion.div>
    </section>
  );
}

