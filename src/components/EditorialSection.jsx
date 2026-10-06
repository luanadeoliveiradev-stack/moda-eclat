import { motion } from "framer-motion";

export default function EditorialSection() {
  return (
    <section id="editorial" className="editorial">

      <motion.div
        className="editorial-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <p className="editorial-small">
          ÉCLAT MANIFESTO
        </p>

        <h2>
          Fashion is not
          <br />
          about clothing.
        </h2>

        <h3>
          It is about identity.
        </h3>

        <p className="editorial-text">
          Every silhouette tells a story.
          <br />
          Every movement creates emotion.
          <br />
          Fashion becomes a language that speaks
          <br />
          before a single word is said.
        </p>

      </motion.div>

    </section>
  );
}