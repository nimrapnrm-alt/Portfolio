import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "🌐", color: "from-orange-500/20" },
    { name: "CSS3", icon: "🎨", color: "from-blue-500/20" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-500/20" },
    { name: "React", icon: "⚛️", color: "from-cyan-500/20" },
    { name: "Tailwind", icon: "🌊", color: "from-sky-400/20" },
    { name: "Git", icon: "📜", color: "from-red-500/20" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-24 px-6 relative bg-[#030014]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-500 font-mono tracking-[0.3em] uppercase text-sm"
          >
            My Technical Toolkit
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            Skills & <span className="text-gray-500">Technologies</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`relative group p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]`}
            >
              {/* Background Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${skill.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]`} />
              
              {/* Icon */}
              <div className="text-4xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              {/* Name */}
              <span className="text-sm font-bold text-gray-300 group-hover:text-white tracking-wide relative z-10">
                {skill.name}
              </span>

              {/* Decorative Dot */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-purple-500 transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-gray-500 italic text-sm"
        >
          Hamaysha nayi technologies seekhne aur behtar experiences banane ki koshish...
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;