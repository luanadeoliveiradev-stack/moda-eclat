import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >

      <div className="footer-logo">
        ÉCLAT
      </div>

      <nav className="footer-links">

        <a href="#collections">
          Collections
        </a>

        <a href="#editorial">
          Editorial
        </a>

        <a href="#home">
          Runway
        </a>

        <a href="#maison">
          Maison
        </a>

      </nav>

      <p className="footer-copy">
        © 2026 ÉCLAT. Crafted with elegance.
      </p>

    </motion.footer>
  );
}