import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "Bitlink",
      tech: "React.js • Node.js • Express.js",
      desc: "Full-stack URL shortener with dynamic link generation and fast redirection system.",
      live: "https://bitlink-mauve.vercel.app/",
      github: "https://github.com/klrahul/bitlink"
    },
    {
      title: "iTask",
      tech: "HTML • CSS • JavaScript",
      desc: "Task management app with add, edit, delete and local storage persistence.",
      live: "https://rrmusic.freewebhostmost.com/",
      github: "#"
    },
    {
      title: "Hotel Dashboard",
      tech: "React.js",
      desc: "Admin dashboard to manage bookings, rooms and users with clean UI.",
      live: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">

      {/* 🎨 BACKGROUND (DIFFERENT BUT MATCHING) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-[#0b0f2a]" />

      {/* ✨ STAR TEXTURE */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* 🔥 SIDE GLOW */}
      <div className="absolute left-[-100px] bottom-[-100px] w-[350px] h-[350px] bg-purple-500/30 blur-[120px] rounded-full"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text"
        >
          Projects
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-purple-400 transition duration-300"
            >

              {/* 🔥 GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl rounded-2xl"></div>

              {/* TITLE */}
              <h3 className="relative z-10 text-xl font-semibold text-white">
                {project.title}
              </h3>

              {/* TECH */}
              <p className="relative z-10 text-sm text-purple-300 mt-2">
                {project.tech}
              </p>

              {/* DESC */}
              <p className="relative z-10 text-gray-400 mt-4 leading-relaxed">
                {project.desc}
              </p>

              {/* BUTTONS */}
              <div className="relative z-10 mt-6 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md hover:scale-105 transition"
                >
                  Live →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 text-sm border border-white/20 rounded-md hover:bg-white/10 transition"
                >
                  GitHub
                </a>
              </div>

              {/* 🔥 INNER LIGHT */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[inset_0_0_60px_rgba(168,85,247,0.15)]"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}