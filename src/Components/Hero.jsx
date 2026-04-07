import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect'; 

const Hero = () => {
  return (
    <div className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      
      <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase">
            Available for Freelance
          </span>
        </motion.div>

        {/* Updated Heading with Fixed Text + Typewriter */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[1.2] min-h-[160px]"
        >
          I am expert in <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent inline-block">
            <Typewriter
              options={{
                strings: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                  "Tailwind CSS"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Hi, I'm <span className="text-white font-medium italic underline decoration-purple-500/50 underline-offset-4">Nimra Zulfqar</span>. 
          A BSCS Graduate turning complex problems into elegant, responsive React interfaces.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Explore My Work
          </a>

          <button className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-lg text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 active:scale-95">
            Download CV
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <motion.div 
             animate={{ y: [0, 12, 0] }}
             transition={{ duration: 1.5, repeat: Infinity }}
             className="w-1 h-1 bg-gray-500 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;