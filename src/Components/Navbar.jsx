import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Projects", "Skills", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center p-6">
      {/* Main Glass Capsule */}
      <nav className={`
        flex items-center justify-between px-2 py-2 rounded-full transition-all duration-500 ease-in-out
        ${scrolled 
          ? "w-full max-w-4xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.15)]" 
          : "w-full max-w-5xl bg-transparent border border-transparent"}
      `}>
        
        {/* Brand/Logo with Neon Glow */}
       <div className="pl-6 group cursor-pointer">
  <div className="relative">
    {/* Aapka Logo Image */}
    <img 
      src="NZ_LOGO.png" 
      alt="Nimra Zulfqar Logo" 
      className="h-10 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-110" 
    />
    
    {/* Glow Effect Jo Aapne Manga Tha */}
    <div className="absolute -inset-2 bg-purple-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`
                  relative px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300
                  ${active === item ? "text-white" : "text-gray-500 hover:text-gray-200"}
                `}
              >
                {item}
                {active === item && (
                  <span className="absolute inset-0 bg-white/5 rounded-full border border-white/10 -z-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"></span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Professional "Work" Status Button */}
        <div className="pr-2">
          <button className="relative group overflow-hidden px-8 py-3 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest transition-all hover:pr-10">
            <span className="relative z-10">Let's Talk</span>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              →
            </span>
            <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;