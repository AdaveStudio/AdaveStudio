import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Web Design', 'Branding', 'Development', 'Marketing'];

const projects = [
  {
    id: 1,
    title: 'Tech On Demand',
    category: 'Web Design',
    image: '/images/Techondemand.png',
    desc: 'A modern, responsive web design for Tech On Demand, a leading provider of technology solutions.',
    link: 'https://techondemandltd.com/',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 2,
    title: 'FootFlex',
    category: 'Web Design',
    image: '/images/Footflex.png',
    desc: 'A modern, responsive web design for FootFlex, a leading provider of footwear solutions.',
    link: 'https://footflexng.com/',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 3,
    title: 'LucemMaritime',
    category: 'Web Design',
    image: '/images/LucemMaritime.png',
    desc: 'A modern, responsive web design for LucemMaritime, a leading provider of maritime solutions.',
    link: 'https://www.lucemglobal.com/',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 4,
    title: 'Neural Brand Identity',
    category: 'Marketing',
    image: '/images/project-2.png',
    desc: 'A modern, responsive web design for Neural Brand Identity, a leading provider of AI solutions.',
    link: 'https://neuralbrandidentity.com/',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 5,
    title: 'Zenith E-Commerce',
    category: 'Development',
    image: '/images/project-1.png',
    desc: 'High-converting e-commerce platform with seamless UX.',
    link: 'https://zenithecommerce.com',
    tags: ['Next.js', 'Stripe'],
  },
  {
    id: 6,
    title: 'Flux Creative',
    category: 'Branding',
    image: '/images/project-2.png',
    desc: 'Portfolio site for a global creative director.',
    link: 'https://fluxcreative.com',
    tags: ['Design', 'Motion'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-brand-black">
      <div className="md:max-w-[1440px] md:mx-auto px-3 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center">Our Work</div>
          <h2 className="text-4xl sm:text-4xl lg:text-7xl font-black mb-8 leading-[0.95] text-white tracking-tighter">
            Our Recent <span className="text-brand-green">Work Showcase</span>
          </h2>
          <p className="text-[#aaa] max-w-xl mx-auto text-lg">
            A curated selection of projects that demonstrate our commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
          role="tablist"
          aria-label="Portfolio filter"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`md:px-5 px-2 py-1 rounded-sm text-sm font-semibold transition-all duration-300 border ${activeCategory === cat
                ? 'bg-brand-green text-black border-brand-green'
                : 'bg-transparent text-[#aaa] border-white/15 hover:border-brand-green hover:text-brand-green'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.article
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={project.id}
                className="card-dark overflow-hidden group"
              >
                {/* <a href={project.link} target="_blank" rel="noopener noreferrer"></a> */}
                {/* Image */}
                <div className="relative bg-brand-surface overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = 'none';
                      const parent = t.parentElement!;
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-brand-surface to-brand-dark flex items-center justify-center">
                          <span class="text-brand-green text-4xl font-extrabold opacity-20">${project.id.toString().padStart(2, '0')}</span>
                        </div>
                      `;
                    }}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      target='_blank'
                      className="btn-primary py-3 px-5 text-sm"
                      aria-label={`View ${project.title} project`}
                    >
                      View Work <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-brand-green text-black text-xs font-bold rounded-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-brand-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#aaa] mb-4">{project.desc}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-white/10 rounded text-[#aaa]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
