import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PHP",
    "Laravel",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub"
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* 🎨 DIFFERENT BACKGROUND (VARIATION) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />

      {/* ✨ SOFT GRID TEXTURE */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:30px_30px]" />

      {/* 🔥 SIDE GLOW */}
      <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-indigo-500/30 blur-[120px] rounded-full"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-14 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
        >
          Skills
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="relative p-5 rounded-xl text-center backdrop-blur-md bg-white/5 border border-white/10 hover:border-purple-400 transition group"
            >

              {/* 🔥 HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl rounded-xl"></div>

              {/* TEXT */}
              <span className="relative z-10 text-gray-200 font-medium">
                {skill}
              </span>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}