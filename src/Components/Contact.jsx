import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const iconVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 relative bg-[#030014] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/5 blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariant}
            className="space-y-8"
          >
            {/* Heading */}
            <motion.div variants={iconVariant}>
              <h2 className="text-sm uppercase tracking-[0.5em] text-purple-500 font-bold mb-2">
                Connect
              </h2>
              <h3 className="text-5xl font-black text-white">
                Let’s Start a <br />
                <span className="text-gray-500 text-4xl">Conversation</span>
              </h3>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
                Do you have a vision, or just a question? Feel free to reach out
                — I’ll do my best to respond within 24 hours.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariant}
            >
              {/* Email */}
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{
                    boxShadow: "0 0 25px rgba(168,85,247,0.6), 0 0 50px rgba(168,85,247,0.3)"
                  }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300"
                >
                  <span className="text-purple-500">📧</span>
                </motion.div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                  <p className="text-white font-medium">nimra.pnrm@gmail.com</p>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{
                    boxShadow: "0 0 25px rgba(168,85,247,0.8), 0 0 60px rgba(168,85,247,0.4)"
                  }}
                  className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center transition-all duration-300"
                >
                  <FaLinkedinIn className="text-white text-lg" />
                </motion.div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-purple-400 transition"
                  >
                    linkedin.com/in/YOUR_USERNAME
                  </a>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{
                    boxShadow: "0 0 25px rgba(168,85,247,0.8), 0 0 60px rgba(168,85,247,0.4)"
                  }}
                  className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center transition-all duration-300"
                >
                  <FaGithub className="text-white text-lg" />
                </motion.div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">GitHub</p>
                  <a
                    href="https://github.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-purple-400 transition"
                  >
                    github.com/YOUR_USERNAME
                  </a>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl" > <form className="space-y-5"> <div className="grid md:grid-cols-2 gap-5"> <input type="text" placeholder="Enter your Name..." className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-purple-500" /> <input type="email" placeholder="Enter your Email..." className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-purple-500" /> </div> <textarea placeholder="Tell me about your project..." rows="4" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-purple-500 resize-none" /> <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-black uppercase tracking-widest rounded-2xl transition-all active:scale-[0.98]"> Send Message 🚀 </button> </form> </motion.div>




        </div>
      </div>
    </section>
  );
};

export default Contact;