import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* 🌌 BACKGROUND MATCH HERO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f4a] via-[#0b0f2a] to-[#020617]" />

      {/* ✨ STARS */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* 🔥 GLOW LIGHT */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/30 blur-[120px] rounded-full"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative p-8 md:p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >

          {/* INNER GLOW */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[inset_0_0_60px_rgba(168,85,247,0.15)]"></div>

          <p className="text-gray-300 leading-8 text-lg">
            I am a Full Stack Web Developer with 2 year of hands-on experience
            (including freelance) in building responsive and scalable web applications.
            I have worked with technologies like React.js, Node.js, PHP, and MySQL.
          </p>

          <p className="text-gray-400 mt-6 leading-8 text-lg">
            I enjoy building clean user interfaces and solving real-world problems
            through code. I also have experience in deployment, VPS setup, and
            backend integration.
          </p>

        </motion.div>

      </div>
    </section>
  );
}