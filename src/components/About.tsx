import { motion } from 'framer-motion';

const stats = [
  { value: '10k+', label: 'Deal with Clients' },
  { value: '1.5k+', label: 'Team Members' },
  { value: '24.1k+', label: 'Completed Project' },
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
              Transforming Bold Ideas <br className="hidden lg:block" />
              Into Digital Excellence
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

            {/* Card 1: Ad Campaign Strategies (Accent) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-accent-light p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Ad Campaign Strategies</h3>
                <p className="text-[#555] leading-relaxed mb-8">
                  Our ad campaign strategies are designed to maximize your brand's reach and impact,
                  ensuring effective engagement and measurable results.
                </p>
              </div>
              {/* <button className="px-6 py-2.5 rounded-xl bg-black/5 border border-black/5 text-sm font-bold group w-fit hover:bg-black/10 transition-all flex items-center gap-2">
                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button> */}
            </motion.div>

            {/* Card 2: Content Strategy (Muted) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-muted-light p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Content Strategy</h3>
                <p className="text-[#555] leading-relaxed mb-8">
                  Our content strategy focuses on creating engaging, relevant material
                  that drives audience interaction and supports your business goals.
                </p>
              </div>
              {/* <button className="px-6 py-2.5 rounded-xl bg-white border border-black/5 shadow-sm text-sm font-bold group w-fit hover:bg-black/5 transition-all flex items-center gap-2">
                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button> */}
            </motion.div>

            {/* Card 3: Business Scaling (Muted, Wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card-muted-light p-8 md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
            >
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-4">Business Scaling</h3>
                <p className="text-[#555] leading-relaxed">
                  Our expert strategies in business scaling help you expand your operations efficiently,
                  ensuring sustainable growth and increased market presence. Partner with us to elevate your business to new heights.
                </p>
              </div>
              {/* <button className="px-6 py-2.5 rounded-xl bg-white border border-black/5 shadow-sm text-sm font-bold group w-fit flex-shrink-0 hover:bg-black/5 transition-all flex items-center gap-2">
                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button> */}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
