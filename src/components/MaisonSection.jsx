import { motion } from "framer-motion";

export default function MaisonSection() {
  return (
    <section id="maison" className="maison">

      <motion.div
        className="maison-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <p className="maison-tag">
          MAISON ÉCLAT
        </p>

        <h2>
          Luxury is not
          <br />
          a trend.
        </h2>

        <h3>
          It is a legacy.
        </h3>

        <p className="maison-text">
          Founded on the belief that elegance transcends time,
          <br />
          ÉCLAT represents a new vision of contemporary luxury.
          <br />
          <br />
          Every collection is designed to celebrate individuality,
          confidence and timeless beauty.
        </p>

      </motion.div>

    </section>
  );
}