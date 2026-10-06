import { motion } from "framer-motion";

export default function EditorialGrid() {
  return (
    <section className="editorial-grid-section">
      <motion.div
        className="editorial-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p>EDITORIAL</p>
        <h2>The Art of Fashion</h2>
      </motion.div>

      <div className="editorial-grid">
        <motion.div
          className="editorial-card grid-large"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="editorial-image">
            <img
              src="run.jpg"
              alt="Runway Moments"
            />
          </div>

          <div className="editorial-info">
            <span>SPRING / SUMMER 2026</span>
            <h3>Runway Moments</h3>
            <p>
              Movimento, luz e identidade traduzidos em uma visão contemporânea
              da moda.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="editorial-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="editorial-image">
            <img
              src="03.jpg"
              alt="Minimal Elegance"
            />
          </div>

          <div className="editorial-info">
            <span>EDITORIAL</span>
            <h3>Minimal Elegance</h3>
            <p>
              Formas puras e beleza silenciosa para uma elegância que não precisa
              pedir atenção.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="editorial-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="editorial-image">
            <img
              src="ok.jpg"
              alt="Luxury Details"
            />
          </div>

          <div className="editorial-info">
            <span>ÉCLAT</span>
            <h3>Luxury Details</h3>
            <p>
              Texturas, acabamentos e pequenos gestos que transformam cada peça
              em algo memorável.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}