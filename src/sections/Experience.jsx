import { motion } from "framer-motion";

export default function Experience() {
  const data = [
    {
      role: "Web Developer – Comptech Ltd Pvt",
      time: "2025 – Present",
      desc: "Working on real-world web applications using Laravel, PHP, and React.js. Responsible for backend APIs, frontend integration, and VPS deployment."
    },
    {
      role: "Freelance Web Developer",
      time: "2023 – 2025",
      desc: "Developed responsive websites and dashboards for schools and businesses using modern frontend technologies."
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* 🎨 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0b0f2a] to-[#020617]" />

      {/* 🔥 SOFT GLOW */}
      <div className="absolute right-[-100px] top-[80px] w-[250px] h-[250px] bg-purple-500/20 blur-[100px] rounded-full"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-14 text-center bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text"
        >
          Experience
        </motion.h2>

        {/* CARDS */}
        <div className="space-y-8">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="relative group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition"
            >

              {/* 🔥 LEFT ACCENT LINE */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>

              {/* 🔥 HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl rounded-xl"></div>

              {/* CONTENT */}
              <div className="relative z-10 pl-4">

                <h3 className="text-lg font-semibold text-white">
                  {item.role}
                </h3>

                <p className="text-sm text-purple-300 mt-1">
                  {item.time}
                </p>

                <p className="text-gray-400 mt-3 leading-relaxed text-sm">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}