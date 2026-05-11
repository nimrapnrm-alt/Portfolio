import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-[#030014] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-purple-400 font-semibold">
            Contact
          </h2>

          <h3 className="text-5xl md:text-6xl font-black text-white mt-4">
            Let’s Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Together
            </span>
          </h3>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Have an idea, project or opportunity? Let’s build something amazing
            together 🚀
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* EMAIL CARD */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition"
            >
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Email
              </p>

              <h4 className="text-white font-semibold mt-2">
                nimra.pnrm@gmail.com
              </h4>
            </motion.div>

            {/* SOCIAL CARDS */}
            <div className="grid gap-5">

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                whileHover={{ x: 8 }}
                className="flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white">
                  <FaLinkedinIn />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    LinkedIn
                  </p>
                  <p className="text-white font-medium">
                    Connect with me professionally
                  </p>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com"
                target="_blank"
                whileHover={{ x: 8 }}
                className="flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white">
                  <FaGithub />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    GitHub
                  </p>
                  <p className="text-white font-medium">
                    Check my projects & code
                  </p>
                </div>
              </motion.a>
            </div>

            {/* SMALL NOTE */}
            <p className="text-gray-500 text-sm italic">
              Usually I reply within 24 hours ⚡
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl"
          >
            <form className="space-y-6">
              
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white focus:border-purple-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white focus:border-purple-500 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white focus:border-purple-500 outline-none resize-none"
              />

              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold hover:scale-[1.02] transition">
                Send Message 🚀
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;