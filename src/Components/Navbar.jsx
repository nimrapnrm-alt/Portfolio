import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Projects", "Skills", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center px-4 py-5">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`
          flex items-center justify-between rounded-full transition-all duration-500
          ${
            scrolled
              ? "w-full max-w-5xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.15)] px-4 py-3"
              : "w-full max-w-6xl bg-transparent px-4 py-4"
          }
        `}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="relative group cursor-pointer"
        >
          <img
            src="NZ_LOGO.png"
            alt="Logo"
            className="h-11 relative z-10"
          />

          <div className="absolute -inset-3 bg-purple-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`
                  relative px-6 py-3 rounded-full text-xs uppercase font-bold tracking-[0.2em] transition-all
                  ${
                    active === item
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {active === item && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                  />
                )}

                <span className="relative z-10">{item}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          onClick={() => setActive("Let's Talk")}
          whileHover={{ scale: 1.05 }}
          className={`
            hidden md:block relative overflow-hidden px-8 py-3 rounded-full
            text-xs font-black uppercase tracking-widest group transition-all
            ${
              active === "Let's Talk"
                ? "bg-purple-600 text-white"
                : "bg-white text-black"
            }
          `}
        >
          <span className="relative z-10 group-hover:text-white transition">
            Let’s Talk
          </span>

          <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="absolute top-24 w-[90%] bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:hidden"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActive(item);
                    setMenuOpen(false);
                  }}
                  className="text-white text-sm uppercase tracking-widest font-semibold hover:text-purple-400 transition"
                >
                  {item}
                </a>
              ))}
            </ul>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => {
                setActive("Let's Talk");
                setMenuOpen(false);
              }}
              className="mt-8 block text-center w-full py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest hover:bg-purple-500 hover:text-white transition"
            >
              Let’s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;