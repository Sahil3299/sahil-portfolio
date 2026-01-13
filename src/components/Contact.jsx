import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    { icon: "✉️", label: "Email", value: "sahilshinde2402@email.com", link: "mailto:sahilshinde2402@email.com" },
    { icon: "🐙", label: "GitHub", value: "github.com/Sahil3299", link: "https://github.com/Sahil3299" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/sahil-shinde-3299", link: "https://www.linkedin.com/in/sahil-shinde-a30948329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", target: "_blank" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">📬 Get In Touch</h2>
        <div className="title-underline" style={{ margin: "1rem 0" }} />
        <p className="contact-subtitle">Let's connect and build something amazing together</p>
      </motion.div>

      <motion.div
        className="contact-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {contacts.map((contact) => (
          <motion.a
            key={contact.label}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="contact-icon">{contact.icon}</div>
            <h3>{contact.label}</h3>
            <p>{contact.value}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
