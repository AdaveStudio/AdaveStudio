import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Web Development',
    description: 'We build high-performance, scalable web applications using cutting-edge technologies that drive business growth.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive, beautiful interfaces that users love, combining aesthetics with functionality.',
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    number: '03',
    title: 'Brand Strategy',
    description: 'We develop powerful brand identities that differentiate your business and resonate deeply with your target audience.',
    tags: ['Identity', 'Branding', 'Strategy', 'Messaging'],
  },
  {
    number: '04',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that maximize ROI, increase visibility, and convert visitors into loyal customers.',
    tags: ['SEO', 'PPC', 'Social Media', 'Analytics'],
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
            <motion.div variants={itemVariants} className="section-tag after:bg-black before:bg-black text-black">Our Services</motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
              Discover Our{' '}
              <span className="text-brand-green bg-black px-2 mt-2 inline-block">Working Formula</span>
            </motion.h2>
          </div>
          <motion.p variants={itemVariants} className="text-[#555] max-w-md leading-relaxed lg:text-right text-lg">
            We blend strategy, design, and technology to deliver digital solutions that truly work for your business goals.
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
              className="card-light p-8 group cursor-pointer"
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

        {/* Bottom CTA
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="btn-outline !text-black !border-black/20 hover:!border-brand-green hover:!bg-brand-green inline-flex">
            View All Services <ArrowRight size={16} />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
