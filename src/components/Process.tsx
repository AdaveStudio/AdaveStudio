import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Strategic Audit',
    description: 'We conduct an intensive analysis of your market position, competitive landscape, and user data to architect a definitive path to market authority.',
  },
  {
    number: '02',
    title: 'Experience Engineering',
    description: 'Our design team transforms strategy into high-fidelity prototypes, iterating on user psychology and interaction patterns to ensure optimal retention.',
  },
  {
    number: '03',
    title: 'Technical Deployment',
    description: 'We execute the build using world-class engineering standards, ensuring your infrastructure is fast, secure, and ready for global scalability.',
  },
  {
    number: '04',
    title: 'Performance Intelligence',
    description: "Post-launch, we activate our data-driven optimization engine, monitoring KPIs in real-time to drive continuous growth and market dominance.",
  },
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

export default function Process() {
  return (
    <section id="process" className="section-padding bg-gray-50 text-black">
      <div className="md:max-w-[1440px] md:mx-auto px-3 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row justify-between gap-10 mb-20"
        >
          <div className="max-w-2xl">
            <motion.div variants={itemVariants} className="section-tag after:bg-black before:bg-black text-black">Our Methodology</motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
              The Blueprint <span className="text-brand-green bg-black px-2 mt-2 inline-block">Of Execution</span>
            </motion.h2>
          </div>
          <motion.div variants={itemVariants} className="max-w-md">
            <p className="text-[#555] leading-relaxed mb-6 text-lg">
              A systematic, result-driven framework engineered to transition your brand from its current state to market dominance.
            </p>
            <a href="#contact" className="btn-outline !text-black !border-black/20 hover:!border-brand-green hover:!bg-brand-green inline-flex rounded-full">
              Explore the framework <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, idx) => (
            <motion.article
              variants={itemVariants}
              key={step.number}
              className="relative card-light md:p-7 p-4 group"
            >
              {/* Connector line for large screens */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute right-0 top-10 w-6 h-px bg-brand-green/60 translate-x-full z-10"
                />
              )}

              <div className="number-badge mb-6 border-black/10 text-black group-hover:bg-brand-green group-hover:border-brand-green transition-colors">{step.number}</div>

              <h3 className="font-bold text-lg mb-3 group-hover:text-black transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-[#555] leading-relaxed">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl bg-brand-green md:p-8 p-4 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-black mb-2">
              Ready to Accelerate Your Growth?
            </div>
            <p className="text-black/70 text-sm lg:text-base">
              Join the elite circle of 50+ visionary partners who have revolutionized their digital footprint with Adave Studio.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-black text-white font-bold text-sm px-8 py-4 rounded-sm hover:bg-brand-dark transition-colors inline-flex items-center gap-2"
          >
            Get Started <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
