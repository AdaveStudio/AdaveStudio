import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Zayd Tahir',
    role: 'CEO, StudyLite.ai',
    avatar: '/images/Zayd2.png',
    rating: 5,
    text: "Adave Studio completely transformed our digital presence. Their team delivered a world-class product that tripled our conversion rate within the first month. Absolutely incredible work ethic and talent.",
  },
  {
    name: 'James Whitfield',
    role: 'Founder, Lumina Brands',
    avatar: '/images/testimonial-user.png',
    rating: 5,
    text: "Working with Adave was the best decision we made for our rebrand. They didn't just create a logo — they built an entire brand ecosystem. The ROI has been phenomenal.",
  },
  {
    name: 'Jafar Abass',
    role: 'Founder, Sparkcode',
    avatar: '/images/Jafar.jpeg',
    rating: 5,
    text: "I've worked with many agencies, but Adave Studio stands out for their technical depth and creative thinking. They delivered our SaaS platform 3 weeks ahead of schedule. Remarkable team.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? '#f59e0b' : 'none'}
          color={i < rating ? '#f59e0b' : '#aaa'}
        />
      ))}
    </div>
  );
}

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

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white text-black">
      <div className="md:max-w-[1440px] md:mx-auto px-3 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center">Client Stories</div>
          <h2 className="text-3xl lg:text-5xl font-extrabold">
            Testimonials That{' '}
            <span className="text-brand-green bg-black px-2 mt-1 inline-block">Speak for Itself</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.article
              variants={itemVariants}
              key={t.name}
              className={`card-light relative md:p-8 p-4 flex flex-col pt-12 overflow-hidden ${i === 1 ? 'bg-black text-white border-black' : ''}`}
            >
              {i === 1 && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-bl-full pointer-events-none" />
              )}

              <StarRating rating={t.rating} />

              <blockquote className={`mt-5 mb-8 text-sm leading-relaxed flex-grow ${i === 1 ? 'text-[#322f2f]' : 'text-[#000]'}`}>
                "{t.text}"
              </blockquote>

              <div className={`flex items-center gap-4 pt-6 border-t ${i === 1 ? 'border-white/10' : 'border-black/10'}`}>
                <div className="w-12 h-12 rounded-full overflow-hidden bg-black/5 border border-black/10 flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={`Photo of ${t.name}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement!;
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-brand-green text-black font-bold text-lg">
                          ${t.name[0]}
                        </div>
                      `;
                    }}
                  />
                </div>
                <div>
                  <div className={`font-bold text-sm ${i === 1 ? 'text-black' : 'text-black'}`}>{t.name}</div>
                  <div className={`text-xs mt-0.5 ${i === 1 ? 'text-[#666]' : 'text-[#666]'}`}>{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center"
        >
          {[
            { value: '850+', label: 'Happy Clients' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '25+', label: 'Global Awards' },
          ].map((item) => (
            <motion.div variants={itemVariants} key={item.label} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-black">{item.value}</span>
              <span className="text-xs text-[#555] mt-1 font-semibold">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
