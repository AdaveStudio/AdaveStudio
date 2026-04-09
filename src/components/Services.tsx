import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Precision Web Development',
    description: 'We architect high-performance, conversion-led applications using a technical stack optimized for speed, security, and exponential growth.',
    tags: ['Next.js', 'Enterprise Architecture', 'API Integration', 'Cloud Native'],
  },
  {
    number: '02',
    title: 'Strategic UI/UX Design',
    description: 'User-centric design systems that reduce friction and drive user retention. We don\'t just make things look good; we make them perform.',
    tags: ['Modular Design', 'User Psychology', 'Design Systems', 'Rapid Prototyping'],
  },
  {
    number: '03',
    title: 'Brand Architecture',
    description: 'Developing cohesive brand ecosystems that establish authority and resonate with high-value audiences across all touchpoints.',
    tags: ['Visual Identity', 'Brand DNA', 'Market Positioning', 'Voice & Tone'],
  },
  {
    number: '04',
    title: 'Growth Marketing',
    description: 'Performance-driven marketing strategies engineered to maximize customer acquisition costs and drive sustainable revenue growth.',
    tags: ['Data Intelligence', 'Conversion Optimization', 'Performance SEO', 'Paid Acquisition'],
  },
  {
    number: '05',
    title: 'Full-Spectrum Visuals',
    description: 'Bespoke creative direction that elevates your brand\'s aesthetic to a premium tier, ensuring you stand out in saturated markets.',
    tags: ['Creative Direction', 'Motion Graphics', '3D Visualization', 'Brand Assets'],
  },
  {
    number: '06',
    title: 'Brand Activation',
    description: 'Bringing your brand into the physical world through high-impact environmental design and premium print experiences.',
    tags: ['Signage', 'Environmental Graphics', 'Premium Print', 'Exhibition Design'],
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

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white text-black">
      <div className="md:max-w-[1440px] md:mx-auto px-3 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20"
        >
          <div className="max-w-2xl">
            <motion.div variants={itemVariants} className="section-tag after:bg-black before:bg-black text-black">Our Expertise</motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
              Engineering Your{' '}
              <span className="text-brand-green bg-black px-2 mt-2 inline-block">Success Formula</span>
            </motion.h2>
          </div>
          <motion.p variants={itemVariants} className="text-[#555] max-w-md leading-relaxed lg:text-right text-lg">
            We merge disruptive strategy with world-class execution to build the digital infrastructure of tomorrow.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.article
              variants={itemVariants}
              key={service.number}
              className="card-light md:p-8 p-4 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="number-badge">{service.number}</div>
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300">
                  <ArrowRight size={16} className="text-black group-hover:text-black transition-colors duration-300" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-black/5 border border-black/10 rounded-full text-[#666]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
