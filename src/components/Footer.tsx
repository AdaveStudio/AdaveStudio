import { Twitter, Linkedin, Instagram, Github, Sparkles, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const links = {
  Services: ['Web Development', 'UI/UX Design', 'Brand Strategy', 'Digital Marketing', 'SEO'],
  Company: ['About Us', 'Portfolio', 'Careers'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      {/* Newsletter Banner */}
      <div className="bg-brand-dark border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-extrabold mb-2">Stay Ahead of the Curve</h2>
              <p className="text-[#aaa] text-sm">Subscribe for weekly digital insights, design tips, and agency updates.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full lg:w-auto gap-0"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email..."
                required
                className="flex-1 lg:w-64 bg-brand-black border border-white/10 border-r-0 rounded-l-sm px-4 py-3 text-sm text-white placeholder:text-[#444] focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-brand-green text-black font-bold text-sm px-6 py-3 rounded-r-sm hover:bg-brand-green-dim transition-colors flex items-center gap-2"
              >
                <Sparkles size={14} /> Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-5 gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6 group" aria-label="Adave Studio">
              <span className="w-8 h-8 bg-brand-green rounded-sm flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </span>
              <span className="text-xl font-extrabold tracking-tight">
                Adave<span className="text-brand-green">.</span>
              </span>
            </a>
            <p className="text-[#aaa] text-sm leading-relaxed mb-6 max-w-xs">
              We're a full-service digital agency crafting exceptional online experiences that drive measurable results for ambitious brands worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-[#aaa] hover:bg-brand-green hover:text-black hover:border-brand-green transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <motion.div variants={itemVariants} key={heading}>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-white mb-5">{heading}</h3>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#aaa] hover:text-brand-green transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[1440px] mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-xs text-[#555] order-2 md:order-1">
            © {new Date().getFullYear()} Adave Studio. All rights reserved. Crafted with ❤️ for the web.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="order-1 md:order-2 w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-black hover:border-brand-green transition-all duration-300 group"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
