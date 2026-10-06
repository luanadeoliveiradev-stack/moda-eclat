import { motion } from "framer-motion";

export default function CollectionShowcase() {
  return (
    <section id="collections" className="collection-showcase">
      <motion.h2
        className="collection-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        COLLECTIONS
      </motion.h2>

      <div className="collection-grid">
        <motion.div
          className="collection-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="collection-image">
            <img src="/02.jpg" alt="Spring 2026 Collection" />
          </div>

          <div className="collection-info">
            <p>SPRING / SUMMER 2026</p>
            <h3>Spring 2026</h3>
            <span>
              Silhouettes fluides, tons luminosos e uma nova expressão de
              elegância.
            </span>
          </div>
        </motion.div>

        <motion.div
          className="collection-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="collection-image">
            <img
              src="runway.jpg"
              alt="Couture Edition"
            />
          </div>

          <div className="collection-info">
            <p>LIMITED EDITION</p>
            <h3>Couture Edition</h3>
            <span>
              Peças exclusivas que unem detalhes impecáveis, presença e
              sofisticação.
            </span>
          </div>
        </motion.div>

        <motion.div
          className="collection-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="collection-image">
            <img
              src="summer.jpg"
              alt="Runway Archive"
            />
          </div>

          <div className="collection-info">
            <p>ÉCLAT ARCHIVE</p>
            <h3>Runway Archive</h3>
            <span>
              Momentos icônicos que celebram a história, o movimento e a
              identidade da maison.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}