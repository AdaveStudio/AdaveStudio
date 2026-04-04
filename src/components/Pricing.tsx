import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$999',
    description: 'Perfect for small projects and startups looking for a professional boost.',
    features: [
      'High-fidelity Wireframes',
      'Custom UI/UX Design',
      'Responsive Web Development',
      '2 Rounds of Revisions',
      '30-Day Support',
    ],
    cta: 'Start with Starter',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$2,499',
    description: 'Our most popular plan for growing brands that need a full digital transformation.',
    features: [
      'Everything in Starter',
      'Advanced Framer Animations',
      'E-commerce Integration',
      'SEO Optimization Suite',
      'CMS Setup (Contentful/Sanity)',
      'Priority Support',
    ],
    cta: 'Go Professional',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale platforms and complex digital ecosystems.',
    features: [
      'Full-scale SaaS Platforms',
      'Branding & Visual Identity',
      'Mobile App Development',
      'Marketing Automation',
      'Dedicated Account Manager',
      'Ongoing 24/7 Maintenance',
    ],
    cta: 'Contact for Enterprise',
    highlighted: false,
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

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-[#080808] text-white overflow-hidden">
      <div className="md:max-w-[1440px] md:mx-auto px-3 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-20"
        >
          <div className="section-tag justify-center">Flexible Pricing</div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Plans That Scale <span className="text-brand-green">With You</span>
          </h2>
          <p className="text-[#aaa] max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your business needs. Transparent pricing for exceptional digital outcomes.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.article
              variants={itemVariants}
              key={plan.name}
              className={`relative flex flex-col md:p-8 p-4 rounded-2xl border transition-all duration-500 group ${plan.highlighted
                ? 'bg-brand-green border-brand-green text-black scale-105 z-10 shadow-[0_20px_50px_rgba(163,255,0,0.2)]'
                : 'bg-brand-surface border-white/5 text-white hover:border-brand-green/30'
                }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-xl">
                  <Sparkles size={10} className="text-brand-green" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-black' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className={`text-sm font-medium ${plan.highlighted ? 'text-black/60' : 'text-[#666]'}`}>/project</span>}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? 'text-black/70' : 'text-[#aaa]'}`}>
                  {plan.description}
                </p>
              </div>

              <div className={`flex-1 md:space-y-4 space-y-2 mb-10`}>
                <div className={`text-xs font-black uppercase tracking-widest ${plan.highlighted ? 'text-black/40' : 'text-white/20'}`}>
                  What's Included
                </div>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm font-medium">
                    <Check size={18} className={`mt-0.5 shrink-0 ${plan.highlighted ? 'text-black' : 'text-brand-green'}`} />
                    <span className={plan.highlighted ? 'text-black/80' : 'text-[#aaa]'}>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn ${plan.highlighted
                  ? 'bg-black text-white hover:bg-[#111]'
                  : 'bg-white/10 text-white hover:bg-brand-green hover:text-black border border-white/10'
                  }`}
              >
                {plan.cta}
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-[#555] text-sm">
            Need a custom package? <a href="#contact" className="text-brand-green hover:underline font-bold">Talk to our strategy team</a> for a tailored quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
