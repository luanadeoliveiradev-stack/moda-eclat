import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video-vogue-teste.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="overlay"></div>

      <nav className="navbar" aria-label="Menu principal">

        <h1 className="logo">ÉCLAT</h1>

        <ul>
          <li>
            <a href="#collections">COLLECTIONS</a>
          </li>

          <li>
            <a href="#editorial">EDITORIAL</a>
          </li>

          <li>
            <a href="#home">RUNWAY</a>
          </li>

          <li>
            <a href="#maison">MAISON</a>
          </li>
        </ul>

      </nav>

      <div className="hero-content fade-up">

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3
          }}
        >
          SPRING / SUMMER 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5
          }}
        >
          ELEGANCE
          <br />
          IN MOTION
        </motion.h2>

        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5
          }}
        >
          Explore Collection
        </motion.button>

      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <span>↓</span>
      </div>

    </section>
  );
}