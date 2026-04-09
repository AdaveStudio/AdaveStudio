import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Global Partnerships' },
  { value: '15+', label: 'Specialized Minds' },
  { value: '200+', label: 'High-End Deliveries' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white text-black overflow-hidden">
      <div className="md:max-w-[1440px] md:mx-auto px-3 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-bold text-[#888] mb-4 block">About Our Studio</span>
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Forging <span className='bg-brand-black text-brand-green'>Authority</span>  <br className="hidden lg:block" />
              In A Digital Age
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-8 lg:gap-16"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-bold text-brand-green bg-black px-2 mb-1 self-start">{stat.value}</span>
                <span className="text-xs font-semibold text-[#888] uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Main Image - Spans 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:row-span-2 relative min-h-[400px] lg:min-h-full rounded-[32px] overflow-hidden"
          >
            <img
              src="/images/about.png"
              alt="Team working"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1522071823991-b19c06f246d7?auto=format&fit=crop&q=80";
              }}
            />
          </motion.div>

          {/* Cards Area */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1: Performance Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-accent-light md:p-6 p-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Performance Marketing</h3>
                <p className="text-[#555] leading-relaxed mb-8">
                  We design data-driven campaigns that don't just reach audiences—they dominate markets and maximize ROI through surgical precision.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Content Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-muted-light md:p-6 p-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Content Ecosystems</h3>
                <p className="text-[#555] leading-relaxed mb-8">
                  Beyond standard content, we build scalable media infrastructures that serve as the backbone for your brand's digital presence.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Enterprise Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card-muted-light md:p-6 p-4 md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
            >
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-4">Scalable Infrastructure</h3>
                <p className="text-[#555] leading-relaxed">
                  Our architecture is built for the long term. We deploy systems that grow alongside your ambitions, ensuring stability, security, and peak performance at any scale.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
