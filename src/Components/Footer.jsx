import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030014] pt-20 pb-10 overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* Branding/Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic">
            NIMRA<span className="text-purple-500">.</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            Building digital products that combine design with performance.
          </p>
        </motion.div>

        {/* Social Links / Quick Actions */}
        <div className="flex gap-8 mb-10">
          {['LinkedIn', 'GitHub', 'Twitter', 'Email'].map((social) => (
            <a 
              key={social}
              href={`#${social.toLowerCase()}`}
              className="text-gray-400 hover:text-purple-400 text-xs font-bold uppercase tracking-widest transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
          <p className="text-gray-500 text-xs tracking-wide">
            © {currentYear} <span className="text-gray-300 font-medium">Nimra Zulfqar</span>. 
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for work
            </span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition-all group"
            >
              <span className="group-hover:-translate-y-1 transition-transform text-white">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;