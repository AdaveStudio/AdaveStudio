import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Highlighted Crazy Animation Variants
  const menuVariants = {
    closed: {
      x: "100%",
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
      }
    },
    open: {
      x: "0%",
      borderTopLeftRadius: "0%",
      borderBottomLeftRadius: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        restDelta: 2
      }
    }
  };

  const simpleMenuVariants = {
    closed: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
    open: { x: "0%", opacity: 1, transition: { duration: 0.3 } }
  };
  
  const activeVariants = shouldReduceMotion ? simpleMenuVariants : menuVariants;

  const itemVariants = {
    closed: { x: 100, opacity: 0 },
    open: (idx: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 20,
        delay: 0.1 * idx + 0.1 
      }
    })
  };

  const simpleItemVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const activeItemVariants = shouldReduceMotion ? simpleItemVariants : itemVariants;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-panel' : 'bg-transparent'
          }`}
      >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" aria-label="Adave Studio Home">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-(--accent) blur-md opacity-20 group-hover:opacity-70 transition-opacity duration-500 rounded-full pointer-events-none"></div>
              <img
                src="/AdaveLogo.png"
                alt="Adave Studio"
                className="w-4 h-8 md:w-5 md:h-10 object-contain relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out"
              />
            </div>
            <span className="text-xl md:text-2xl font-extrabold tracking-tight group-hover:text-(--accent) transition-colors duration-300">
              Adave<span className="text-(--accent) group-hover:text-white transition-colors duration-300">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#aaa] hover:text-brand-green transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="btn-primary text-sm py-3 px-8 rounded-full">
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      </motion.header>

      {/* Mobile Menu Background Overlay */}
      <AnimatePresence>
        {open && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={() => setOpen(false)}
             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
           />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
             initial="closed"
             animate="open"
             exit="closed"
             variants={activeVariants}
             className="lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-[500px] bg-[#0f0f0f] z-40 overflow-y-auto overflow-x-hidden border-l border-white/5 shadow-[-32px_0_64px_rgba(0,0,0,0.5)] flex flex-col"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col p-8 pt-24 min-h-full relative overflow-hidden flex-1">
              
              {/* Massive Rotated Watermark */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-[50%] pointer-events-none opacity-[0.03] -rotate-90">
                <span className="text-[12rem] sm:text-[16rem] font-black tracking-tighter whitespace-nowrap">ADAVE</span>
              </div>

              {/* Decorative Background Elements */}
              {!shouldReduceMotion && (
                <>
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: 0.15 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-0 translate-x-1/2 w-64 h-64 bg-(--accent) rounded-full blur-3xl pointer-events-none -z-10"
                  />
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.5, 1], opacity: 0.1 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 -left-16 w-48 h-48 bg-(--accent) rounded-full blur-[100px] pointer-events-none -z-10"
                  />
                </>
              )}

              {/* Links aligned to the right */}
              <ul className="flex flex-col gap-6 mt-8 z-10 relative">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    custom={idx}
                    variants={activeItemVariants}
                    className="overflow-hidden flex justify-end"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-6 py-2 text-5xl sm:text-6xl font-black text-white/80 hover:text-(--accent) transition-all duration-500 w-full justify-end relative"
                    >
                      <motion.span
                        className="text-(--accent) opacity-0 group-hover:opacity-100 transform translate-x-8 group-hover:translate-x-0 transition-all duration-500 ease-out text-4xl"
                      >
                        ←
                      </motion.span>
                      <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-4 drop-shadow-lg">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                className="mt-auto pt-24 pb-12 z-10 relative w-full flex flex-col items-end"
                custom={navLinks.length}
                variants={activeItemVariants}
              >
                <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-bold mb-6 text-right">Start a new project</p>
                <a 
                  href="#contact" 
                  onClick={() => setOpen(false)} 
                  className="btn-primary w-full max-w-[280px] flex justify-center py-5 text-lg rounded-full relative overflow-hidden group border border-(--accent)/30"
                >
                  <span className="relative z-10 flex items-center gap-2 font-bold tracking-wide">
                    Let's Talk
                    <motion.span
                      animate={!shouldReduceMotion ? { x: [0, 4, 0], y: [0, -4, 0] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ↗
                    </motion.span>
                  </span>
                  {!shouldReduceMotion && (
                     <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full pointer-events-none"></span>
                  )}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
