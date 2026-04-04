import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We start by deep-diving into your business goals, target audience, and competitive landscape to forge a rock-solid strategy.',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Our designers craft stunning wireframes and interactive prototypes that validate concepts before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Development & Launch',
    description: 'Our engineers build robust, performant solutions using modern tech stacks, rigorously tested before a smooth launch.',
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description: "Post-launch, we monitor performance, gather data, and continuously optimize to ensure your product's long-term growth.",
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
            <motion.div variants={itemVariants} className="section-tag after:bg-black before:bg-black text-black">How We Work</motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
              Our Working <span className="text-brand-green bg-black px-2 mt-2 inline-block">Process</span>
            </motion.h2>
          </div>
          <motion.div variants={itemVariants} className="max-w-md">
            <p className="text-[#555] leading-relaxed mb-6 text-lg">
              Our proven four-step process has helped hundreds of businesses achieve their digital ambitions on time and on budget.
            </p>
            <a href="#contact" className="btn-outline !text-black !border-black/20 hover:!border-brand-green hover:!bg-brand-green inline-flex rounded-full">
              Start Conversation <ArrowRight size={18} />
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
              className="relative card-light p-7 group"
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
          className="mt-16 rounded-xl bg-brand-green p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-black mb-2">
              Ready to Build Something Great?
            </div>
            <p className="text-black/70 text-sm lg:text-base">
              Join 850+ companies that trust Adave Studio with their digital future.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-black text-white font-bold text-sm px-8 py-4 rounded-sm hover:bg-brand-dark transition-colors inline-flex items-center gap-2"
          >
            Get Started Today <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
