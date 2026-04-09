import { motion } from 'framer-motion';
import { ArrowRight, Code2, Smartphone, Globe, Zap, Users, ShieldCheck, Mail } from 'lucide-react';

const roles = [
  {
    title: 'Senior Web Developer',
    type: 'Full-time / Remote',
    description: 'Lead the engineering of high-fidelity web ecosystems for global market leaders. Focus on performance, motion, and precision.',
    requirements: ['React / Next.js Expert', 'TypeScript Mastery', 'Framer Motion & UX Design focus', 'Perf Optimization obsessed'],
    icon: Code2,
  },
  {
    title: 'Senior Mobile Developer',
    type: 'Full-time / Remote',
    description: 'Architect premium cross-platform mobile experiences that redefine user interaction. Build native-feel apps with modern stacks.',
    requirements: ['React Native / Flutter expert', 'iOS & Android native knowledge', 'High-end UI/UX implementation', 'API Architecture'],
    icon: Smartphone,
  },
];

const benefits = [
  { title: 'Remote-First', icon: Globe, desc: 'Work from anywhere in the world.' },
  { title: 'Elite Tech Stack', icon: Zap, desc: 'We only use the best, most modern tools.' },
  { title: 'Collaborative Growth', icon: Users, desc: 'Learn from industry veterans daily.' },
  { title: 'Full Autonomy', icon: ShieldCheck, desc: 'Take ownership of your build from A to Z.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Careers() {
  return (
    <div className="bg-brand-black min-h-screen pt-32 pb-20 text-white">
      <div className="md:max-w-[1440px] md:mx-auto px-4 lg:px-8">

        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-center mb-32"
        >
          <div className="text-sm font-black text-brand-green bg-white/5 border border-white/10 px-4 py-2 inline-block uppercase tracking-[0.3em] rounded-full mb-8">Careers</div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            Architect The <br />
            <span className="text-brand-green italic">Next Digital Frontier</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            We don't just hire developers; we recruit visionaries. Join a studio where engineering meets artistry to build the world's most ambitious products.
          </p>
        </motion.div>

        {/* Roles Section */}
        <section id="roles" className="mb-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {roles.map((role) => (
              <motion.article
                key={role.title}
                variants={itemVariants}
                className="bg-brand-dark border border-white/5 p-6 rounded-[32px] hover:border-brand-green/30 transition-all group"
              >
                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-green group-hover:text-black transition-colors">
                  <role.icon size={28} />
                </div>
                <div className="mb-4">
                  <span className="text-xs font-black text-brand-green uppercase tracking-widest">{role.type}</span>
                  <h3 className="text-3xl font-black tracking-tight mt-2">{role.title}</h3>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed font-medium">
                  {role.description}
                </p>
                <div className="space-y-3 mb-10">
                  {role.requirements.map((req) => (
                    <div key={req} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                      <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                      {req}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={`mailto:careers@adavestudio.com?subject=Application for ${role.title}`}
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white hover:text-brand-green transition-colors"
                  >
                    Apply Now <ArrowRight size={18} />
                  </a>
                  <Mail size={18} className="text-white/20 group-hover:text-brand-green transition-colors" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white/5 border border-white/10 rounded-[40px] p-10 lg:p-">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {benefits.map((benefit) => (
              <motion.div variants={itemVariants} key={benefit.title} className="text-center md:text-left">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <benefit.icon size={24} className="text-brand-green" />
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Speculative CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-40 text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-black tracking-tighter mb-8 text-white">
            Don't See Your Role?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg font-medium">
            We are always looking for exceptional talent. If you have a unique skillset and a drive for excellence, send us your portfolio.
          </p>
          <a
            href="mailto:careers@adavestudio.com?subject=Speculative Application"
            className="btn-primary inline-flex items-center gap-3 px-10 py-5 bg-brand-green text-black font-black rounded-full transition-shadow hover:shadow-[0_0_20px_rgba(163,255,0,0.4)] uppercase tracking-widest text-xs"
          >
            Send Speculative Application <ArrowRight size={18} />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
