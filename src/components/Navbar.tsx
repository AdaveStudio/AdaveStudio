import { useState, useEffect } from 'react';
import { Menu, X, Twitter, Linkedin, Instagram, Github, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const shouldReduceMotion = useReducedMotion();

  // Highlighted Crazy Animation Variants
  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    },
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
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
        stiffness: 300,
        damping: 25,
        delay: 0.05 * idx + 0.1
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

  // Intersection Observer for Active Section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black' : 'bg-transparent'
          }`}
      >
        <div className="md:max-w-[1440px] md:mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-1">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group" aria-label="Adave Studio Home">
              <div className="relative flex items-center justify-center">
                <img
                  src="/AdaveLogo2.png"
                  alt="Adave Studio"
                  className="w-10 h-10 md:w-15 md:scale-200 scale-110 object-contain relative z-10"
                />
              </div>
              {/* <span className="text-xl md:text-2xl font-extrabold tracking-tight group-hover:text-(--accent) transition-colors duration-300">
                Adave<span className="text-(--accent) group-hover:text-white transition-colors duration-300">.</span>
              </span> */}
            </a>

            {/* Desktop Nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 relative group ${isActive ? 'text-brand-green' : 'text-[#aaa] hover:text-brand-green'
                      }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-green transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                  </a>
                );
              })}
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
            className="lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-[500px] bg-[#0a0a0a] z-40 overflow-y-auto overflow-x-hidden border-l border-white/5 shadow-[-32px_0_64px_rgba(0,0,0,0.5)] flex flex-col"
            style={{ willChange: 'transform' }}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col md:p-8 p-4 pt-32 min-h-full relative flex-1">

              {/* Massive Watermark */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none opacity-[0.02] transform -rotate-90 origin-left">
                <span className="text-[14rem] font-black tracking-tighter whitespace-nowrap leading-none">STRATEGY</span>
              </div>

              {/* Static Glowing Nodes (Performance optimized) */}
              <div className="absolute top-1/4 -right-32 w-96 h-96 bg-(--accent) rounded-full blur-[160px] opacity-[0.05] pointer-events-none -z-10" />
              <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-white rounded-full blur-[140px] opacity-[0.03] pointer-events-none -z-10" />

              <ul className="flex flex-col gap-8 z-10 relative">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <motion.li
                      key={link.label}
                      custom={idx}
                      variants={activeItemVariants}
                      className="overflow-hidden"
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex flex-col gap-1 py-1 transition-all duration-300"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className={`text-xs font-black tabular-nums transition-colors ${isActive ? 'text-(--accent) opacity-100' : 'text-(--accent) opacity-40'
                            }`}>
                            0{idx + 1}
                          </span>
                          <span className={`text-2xl sm:text-6xl font-black transition-colors duration-500 ${isActive ? 'text-brand-green' : 'text-white hover:text-brand-green'
                            }`}>
                            {link.label}
                          </span>
                          <ArrowRight size={32} className={`text-brand-green transition-all duration-500 hidden sm:block ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`} />
                        </div>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto pt-24 space-y-12 z-10 relative">
                {/* CTA */}
                <motion.div variants={activeItemVariants} custom={navLinks.length}>
                  <p className="text-white/40 text-xs uppercase tracking-[0.4em] font-bold mb-4">Launch a project</p>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/10 rounded-2xl group hover:bg-(--accent) transition-all duration-500"
                  >
                    <span className="text-xl font-bold group-hover:text-black transition-colors">Let's build something</span>
                    <span className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-black/10 transition-colors">
                      <ArrowRight className="group-hover:text-black transition-colors" />
                    </span>
                  </a>
                </motion.div>

                {/* Socials & Footer */}
                <motion.div
                  variants={activeItemVariants}
                  custom={navLinks.length + 1}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 pb-8 border-t border-white/5 pt-12"
                >
                  <div className="space-y-4">
                    <p className="text-white/40 text-xs uppercase tracking-[0.4em] font-bold">Follow Us</p>
                    <div className="flex gap-4">
                      {[
                        { icon: Twitter, href: '#' },
                        { icon: Linkedin, href: '#' },
                        { icon: Instagram, href: '#' },
                        { icon: Github, href: '#' }
                      ].map((social, i) => (
                        <a key={i} href={social.href} className="w-5 h-5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/50 hover:bg-(--accent) hover:text-black hover:border-(--accent) transition-all duration-300">
                          <social.icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/20 uppercase tracking-widest leading-loose">
                      © {new Date().getFullYear()} Adave Studio<br />
                      Built for standard.
                    </p>
                  </div>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

