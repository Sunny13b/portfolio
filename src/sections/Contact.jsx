import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden text-white">

      {/* 🎨 BACKGROUND (DIFFERENT STYLE) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0b0f2a] to-[#020617]" />

      {/* 🔥 SIDE GLOW */}
      <div className="absolute right-[-120px] top-[50px] w-[350px] h-[350px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Let’s Work Together 🚀
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed max-w-md">
            I’m open to freelance projects, full-time opportunities and collaborations.
            If you have an idea or project, let’s connect and build something amazing.
          </p>

          {/* CTA BUTTON */}
          <a
            href="mailto:rahulpal87093@gmail.com"
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:scale-105 transition"
          >
            Send Email →
          </a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >

          {/* CARD 1 */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 transition">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-400 text-lg" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:rahulpal87093@gmail.com" className="text-white">
                  rahulpal87093@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 transition">
            <div className="flex items-center gap-4">
              <FaPhone className="text-purple-400 text-lg" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:8709301587" className="text-white">
                  +91 8709301587
                </a>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 transition">
            <p className="text-sm text-gray-400 mb-2">Social</p>

            <div className="flex gap-4 text-xl">
              <a
                href="https://github.com/Sunny13b/Sunny13b"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <FaLinkedin />
              </a>

              {/* Instagram */}
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    className="hover:text-pink-400 transition"
                >
                    <FaInstagram />
                </a>

                {/* Twitter / X */}
                <a
                    href="https://x.com/"
                    target="_blank"
                    className="hover:text-blue-400 transition"
                >
                    <FaTwitter />
                </a>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
