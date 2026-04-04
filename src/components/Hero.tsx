import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-brand-black">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-green/10 blur-[100px] md:blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/5 blur-[80px] md:blur-[100px] rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-brand-green text-xs font-medium mb-8"
            >
              <Star size={14} fill="currentColor" />
              <span className="tracking-wide uppercase">Digital Design Agency</span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-8 leading-[0.95] text-white tracking-tighter">
              We Create <br />
              <span className="text-brand-green italic">Digital Excellence</span>
            </h1>

            <p className="text-gray-400 text-lg lg:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We craft premium digital experiences that transform ideas into powerful brands.
              High-end strategy meets precision execution.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 px-8 py-4 bg-brand-green text-black font-bold rounded-full transition-shadow hover:shadow-[0_0_20px_rgba(163,255,0,0.4)]"
              >
                Get Started <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#portfolio"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-full transition-all"
              >
                View Work
              </motion.a>
            </div>

            {/* Social Proof / Stats Mini Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 pt-8"
            >
              <div>
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Awards</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            {/* Floating Card UI Effect */}
            <div className="relative z-20 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-green to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-brand-black rounded-xl overflow-hidden border border-white/10">
                <motion.img
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  src="/Frame 1.png"
                  alt="Agency Showcase"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Decorative Geometric Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-green/30" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-green/30" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}