import { motion } from "framer-motion";

export default function FashionFilm() {
  return (
    <section className="fashion-film">

      <motion.div
        className="film-text"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <p className="film-tag">
          FASHION FILM
        </p>

        <h2>
          A cinematic
          <br />
          vision of style.
        </h2>

        <p>
          Inspired by the rhythm of the runway,
          every frame captures elegance,
          movement and emotion, transforming
          fashion into timeless storytelling.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.97
          }}
        >
          Watch Story
        </motion.button>

      </motion.div>

      <motion.div
        className="film-image"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.2
        }}
      >

        <img
          src="haute.jpg"
          alt="Fashion Film"
        />

      </motion.div>

    </section>
  );
}