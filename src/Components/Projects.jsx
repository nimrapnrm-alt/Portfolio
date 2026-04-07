import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "ProStore",
      desc: "E-commerce Website with advanced filtering.",
      tech: ["React", "Redux", "Tailwind"],
      link: "#",
    },
    {
      title: "Hotel Booking UI",
      desc: "Luxurious stay booking experience.",
      tech: ["Next.js", "Framer Motion"],
      link: "#",
    },
    {
      title: "Animated Portfolio",
      desc: "3D interactions and smooth scroll.",
      tech: ["React", "Three.js"],
      link: "#",
    },
    {
      title: "Task Manager",
      desc: "Efficiency and productivity tracker.",
      tech: ["Node.js", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#030014]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-purple-500 font-mono tracking-widest text-sm mb-2"
          >
            SELECTED WORKS
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Featured <span className="text-gray-500 italic">Projects</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-1">
                <div className="bg-[#0a0a0a] rounded-[2.4rem] overflow-hidden">
                  
                  {/* Image Placeholder / Visual */}
                  <div className="h-64 bg-gradient-to-tr from-purple-900/20 to-blue-900/20 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl group-hover:scale-125 transition-transform duration-500 opacity-20">🚀</div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-purple-600/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-4">
                      <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition">Demo</button>
                      <button className="border border-white text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-black transition">Code</button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex gap-2 mb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-bold tracking-widest uppercase text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-2 bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-colors -z-10" />
            </motion.div>
          ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-20 text-center">
          <button className="text-gray-500 hover:text-white transition-colors border-b border-gray-800 pb-2 text-sm tracking-widest uppercase font-bold">
            View All Experiments
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;