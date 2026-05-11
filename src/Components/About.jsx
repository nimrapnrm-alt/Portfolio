import { motion } from "framer-motion";
import profileImg from "/my image.jpeg";
import { FaReact, FaLaptopCode, FaPalette } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      desc: "Building modern & responsive interfaces using React ecosystem.",
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      desc: "Designing elegant and user-focused digital experiences.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Clean Code",
      desc: "Writing scalable, maintainable and optimized code structure.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-[#050816] overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADING */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.4em] text-sm text-purple-400 font-semibold mb-4"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-white"
          >
            Passionate About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Modern Frontend
            </span>
          </motion.h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full" />

            {/* IMAGE CARD */}
            <div className="relative w-[350px] sm:w-[420px] rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl">
              
              <img
                src={profileImg}
                alt="Nimra Zulfqar"
                className="w-full h-[550px] object-cover"
              />

              {/* OVERLAY CARD */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                <p className="text-purple-400 text-sm font-medium">
                  Frontend Developer
                </p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  Nimra Zulfqar
                </h3>

                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  Creating premium user experiences with React &
                  modern frontend technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* TOP TEXT */}
            <p className="text-lg leading-relaxed text-gray-300">
              I’m a{" "}
              <span className="text-white font-semibold">
                BSCS Graduate
              </span>{" "}
              and passionate frontend developer focused on building
              modern, responsive and visually stunning web experiences.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              My goal is to combine clean code with beautiful design to
              create interfaces that are not only functional but also
              memorable for users. I enjoy working with React,
              Tailwind CSS and modern animation libraries.
            </p>

            {/* CARDS */}
            <div className="grid gap-5 mt-12">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-500/30 transition duration-500"
                >
                  <div className="flex items-start gap-5">
                    
                    {/* ICON */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-2xl text-white shrink-0">
                      {card.icon}
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {card.title}
                      </h4>

                      <p className="text-gray-400 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="mt-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold hover:scale-105 transition duration-300"
              >
                Let’s Work Together
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;