import { motion } from "framer-motion";
import bg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section className="h-screen w-full relative overflow-hidden">

      {/* 🌌 BACKGROUND IMAGE */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full object-cover"
      />

      {/* 🌑 DARK OVERLAY (for text readability) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center px-10 md:px-20">

        <div className="w-full md:w-1/2">

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-300 text-xl mb-2"
          >
            Hi, I’m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-indigo-300 text-transparent bg-clip-text"
          >
            Rahul Kumar Pal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-gray-300 max-w-lg leading-relaxed"
          >
            Full Stack Developer focused on building clean, scalable and
            user-friendly web applications using modern technologies.
          </motion.p>

          {/* 🔘 BUTTONS */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-white font-medium hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-300 rounded-lg text-purple-200 hover:bg-purple-500/10 transition"
            >
              Contact Me
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}