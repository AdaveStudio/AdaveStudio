import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const contactDetails = [
  { icon: Mail, label: 'Email Us', value: 'hello@adavestudio.com', href: 'mailto:hello@adavestudio.com' },
  { icon: Phone, label: 'Call Us', value: '+1 (555) 000-0000', href: 'tel:+15550000000' },
  { icon: MapPin, label: 'Our Office', value: 'Global / Remote Friendly', href: '#' },
  { icon: Clock, label: 'Working Hours', value: 'Mon–Fri  9am – 6pm', href: '#' },
  { icon: Globe, label: 'Global Reach', value: 'Serving 40+ Countries', href: '#' },
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 text-black">
      <div className="md:max-w-[1440px] md:mx-auto px-3 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-20"
        >
          <div className="section-tag justify-center">Get In Touch</div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Just One Step to{' '}
            <span className="text-brand-green bg-black px-2 mt-1 inline-block">Your Project</span>
          </h2>
          <p className="text-[#555] max-w-xl mx-auto text-lg">
            Ready to take your digital presence to the next level? Let's have a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                variants={itemVariants}
                key={label}
                href={href}
                className="flex items-center gap-4 group"
                aria-label={label}
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-black/10 flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300 flex-shrink-0">
                  <Icon size={18} className="text-black group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-xs text-[#666] font-medium uppercase tracking-wider">{label}</div>
                  <div className="text-sm font-semibold text-black">{value}</div>
                </div>
              </motion.a>
            ))}


          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-black/10 rounded-xl p-3 lg:p-10 shadow-sm"
              aria-label="Contact form"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-[#666] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-gray-50 border border-black/10 rounded-sm px-4 py-3 text-sm text-black placeholder:text-[#888] focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-[#666] uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-gray-50 border border-black/10 rounded-sm px-4 py-3 text-sm text-black placeholder:text-[#888] focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="contact-service" className="text-xs font-semibold text-[#666] uppercase tracking-wider">
                  Service Needed
                </label>
                <select
                  id="contact-service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="bg-gray-50 border border-black/10 rounded-sm px-4 py-3 text-sm text-black focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Brand Strategy</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="contact-message" className="text-xs font-semibold text-[#666] uppercase tracking-wider">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-gray-50 border border-black/10 rounded-sm px-4 py-3 text-sm text-black placeholder:text-[#888] focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-4 text-sm hover:!bg-black hover:!text-white"
              >
                {status === 'sent' ? '✓ Message Sent!' : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
        {/* CTA Card */}
        <motion.div variants={itemVariants} className="mt-4 bg-brand-green rounded-xl p-6">
          <h3 className="text-black font-extrabold text-lg mb-2">Free Consultation</h3>
          <p className="text-black/70 text-sm mb-4">Book a 30-minute strategy session with our team at no cost.</p>
          <a
            href="mailto:hello@adavestudio.com"
            className="inline-flex items-center gap-2 bg-black text-white font-bold text-sm px-5 py-3 rounded-sm hover:bg-brand-dark transition-colors"
          >
            Book Now <Send size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
