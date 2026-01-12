import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    { icon: "✉️", label: "Email", value: "sahilshinde2402@email.com", link: "mailto:sahilshinde2402@email.com" },
    { icon: "🐙", label: "GitHub", value: "github.com/Sahil3299", link: "https://github.com/Sahil3299" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/sahil-shinde-3299", link: "https://linkedin.com/in/sahil-shinde-3299" }
  ];

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">Let's connect and build something amazing together</p>
      
      <div className="contact-grid">
        {contacts.map((contact, idx) => (
          <motion.a
            key={contact.label}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            whileHover={{ scale: 1.08, backgroundColor: "#111111" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="contact-icon">{contact.icon}</div>
            <h3>{contact.label}</h3>
            <p>{contact.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
