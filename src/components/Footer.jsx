import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <div className="footer-left">
          <h3>Sahil Shinde</h3>
          <p>Engineering Student • Web Developer • React Learner</p>
        </div>

        <div className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/Sahil3299"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-shinde-a30948329"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sahil Shinde. All rights reserved.
      </div>
    </motion.footer>
  );
}
