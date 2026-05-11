import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "ProStore",
      desc: "Modern e-commerce platform with filtering, cart system and premium UI.",
      tech: ["React", "Redux", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      github: "#",
      live: "#",
    },
    {
  title: "Hotel Booking UI",
  desc: "Luxury hotel booking experience with animations and elegant design.",
  tech: ["React.js", "Tailwind CSS"],
  image: "/public/Hotel.png",
  github: "#",
  live: "https://hotel-management-51ld.vercel.app",
},
    {
      title: "Animated Portfolio",
      desc: "Interactive portfolio with smooth animations and 3D effects.",
      tech: ["React", "Tailwind CSS"],
     image: "/public/portfolio.png",
      github: "#",
      live: "https://portfolio-one-delta-bcc21njax8.vercel.app",
    },
    {
      title: "Task Manager",
      desc: "Powerful productivity tracker with task management system.",
      tech: ["React.js", "css"],
       image: "/public/task.png",
      github: "#",
      live: "",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-[#030014] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.35em] text-sm text-purple-400 font-medium"
          >
            Selected Works
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-white mt-4"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of modern web applications focused on user experience,
            performance and beautiful interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
                
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
                    
                    <a
                      href={project.live}
                      className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      className="flex items-center gap-2 border border-white text-white px-5 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
                    >
                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs uppercase tracking-widest text-purple-300 border border-purple-500/20 bg-purple-500/10 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:bg-white hover:text-black transition duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;