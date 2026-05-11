import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: "95%",
      color: "from-orange-500 to-orange-300",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: "90%",
      color: "from-blue-500 to-cyan-300",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "88%",
      color: "from-yellow-400 to-yellow-200",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: "92%",
      color: "from-cyan-500 to-sky-300",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      level: "95%",
      color: "from-sky-500 to-blue-300",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: "85%",
      color: "from-red-500 to-orange-300",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      level: "80%",
      color: "from-violet-500 to-purple-300",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      level: "75%",
      color: "from-gray-500 to-gray-200",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: "78%",
      color: "from-blue-600 to-blue-300",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-[#030014] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.35em] text-sm text-purple-400 font-medium"
          >
            My Technical Toolkit
          </motion.span>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-white mt-4"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Crafting beautiful, responsive and modern web experiences using
            cutting-edge frontend technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]"
            >
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${skill.color} transition duration-500`}
              />

              {/* Top Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition duration-700" />

              {/* Icon */}
              <div className="relative z-10 text-5xl text-white mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                {skill.icon}
              </div>

              {/* Name */}
              <div className="relative z-10 flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>

                <span className="text-sm text-purple-300 font-medium">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative z-10 w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 italic text-sm md:text-base">
            Always learning, improving, and building premium user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;