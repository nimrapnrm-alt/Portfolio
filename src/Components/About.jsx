import { motion } from "framer-motion";
import profileImg from "/my image.jpeg"; // 👈 TOP par import karo

const About = () => {
  const stats = [
    { label: "Experience", value: "1+ Year" },
    { label: "Projects", value: "15+" },
    { label: "Focus", value: "UI/UX" },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden bg-[#030014]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.5em] text-purple-500 font-bold mb-2">
            Discovery
          </h2>
          <div className="h-[2px] w-12 bg-purple-500 mb-4"></div>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            About Me
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
              <img
                src={profileImg}
                alt="Nimra Zulfqar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                <p className="text-purple-400 font-mono text-sm">
                  {"<p> Hello World! </p>"}
                </p>
                <p className="text-gray-300 text-sm mt-2 font-light italic">
                  "I build things for the web."
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-200 font-medium leading-relaxed">
              I am a{" "}
              <span className="text-purple-500 font-bold italic">
                BSCS Graduate
              </span>{" "}
              and passionate Frontend Developer who loves transforming ideas
              into high-performance web interfaces.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My focus is not only on writing clean code, but also on creating
              engaging user experiences. I specialize in the React ecosystem,
              ensuring that every pixel and every animation serves a meaningful
              purpose.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center"
                >
                  <h4 className="text-2xl font-bold text-white">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all"
              >
                Learn more about my process <span className="text-xl">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
