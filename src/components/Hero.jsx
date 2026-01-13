import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/Sahil_Resume.pdf";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="hero">
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <motion.div
          className="floating-shape shape-1"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="floating-shape shape-2"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="floating-shape shape-3"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-content"
          variants={itemVariants}
        >
          <motion.div
            className="hero-badge"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)"
            }}
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              👋
            </motion.span>
            Welcome to my portfolio
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="hero-title"
          >
            Hi, I'm{" "}
            <motion.span
              className="hero-name"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Sahil
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={itemVariants}
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Engineering Student
            </motion.span>
            {" • "}
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              Web Developer
            </motion.span>
            {" • "}
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              React Learner
            </motion.span>
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.a
              className="btn btn-primary"
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(37, 99, 235, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                View Projects →
              </motion.span>
            </motion.a>
            <motion.a
              className="btn btn-outline"
              href={resume}
              download
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(37, 99, 235, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                📄
              </motion.span>
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-stats"
            variants={itemVariants}
          >
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.1 }}
            >
              <motion.span
                className="stat-number"
                initial={{ count: 0 }}
                animate={{ count: 2 }}
                transition={{ duration: 2, delay: 1 }}
              >
                0
              </motion.span>
              <span className="stat-label">Years Experience</span>
            </motion.div>
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.1 }}
            >
              <motion.span
                className="stat-number"
                initial={{ count: 0 }}
                animate={{ count: 10 }}
                transition={{ duration: 2, delay: 1.2 }}
              >
                10+
              </motion.span>
              <span className="stat-label">Projects Completed</span>
            </motion.div>
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.1 }}
            >
              <motion.span
                className="stat-number"
                initial={{ count: 0 }}
                animate={{ count: 12 }}
                transition={{ duration: 2, delay: 1.4 }}
              >
                12+
              </motion.span>
              <span className="stat-label">Skills Mastered</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-socials"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/Sahil3299"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 5,
                backgroundColor: "rgba(37, 99, 235, 0.1)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🐙
              </motion.span>
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sahil-shinde-a30948329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: -5,
                backgroundColor: "rgba(37, 99, 235, 0.1)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                💼
              </motion.span>
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="image-wrapper"
            variants={floatingVariants}
            animate="animate"
          >
            <motion.img
              src={profile}
              alt="profile"
              className="hero-image"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 30px 60px rgba(37, 99, 235, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="image-glow"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Floating Tech Icons */}
          {/* <motion.div
            className="floating-tech tech-1"
            animate={{
              rotate: [0, 360],
              x: [0, 20, 0],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ⚛️
          </motion.div>
          <motion.div
            className="floating-tech tech-2"
            animate={{
              rotate: [360, 0],
              x: [0, -15, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🚀
          </motion.div>
          <motion.div
            className="floating-tech tech-3"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💻
          </motion.div> */}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}

