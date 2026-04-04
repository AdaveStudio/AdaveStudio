import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    category: 'Design',
    date: 'March 15, 2025',
    title: "10 UI/UX Trends Dominating Digital Design in 2025",
    excerpt: "From glassmorphism to bento grids, here are the trends shaping the future of product design this year.",
    image: '/images/blog-1.png',
    readTime: '5 min read',
  },
  {
    id: 2,
    category: 'Development',
    date: 'March 8, 2025',
    title: "Why TypeScript Should Be Your Default Choice in 2025",
    excerpt: "The case for TypeScript has never been stronger. We break down why every serious project should adopt it.",
    image: '/images/blog-2.png',
    readTime: '7 min read',
  },
  {
    id: 3,
    category: 'Strategy',
    date: 'February 28, 2025',
    title: "Building a Website That Converts: A Data-Driven Approach",
    excerpt: "Stop guessing and start optimizing. Here's a proven framework to build websites that actually convert.",
    image: '/images/blog-3.png',
    readTime: '6 min read',
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-brand-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12"
        >
          <div>
            <div className="section-tag">Latest Insights</div>
            <h2 className="text-3xl lg:text-5xl font-extrabold">
              Our Latest <span className="text-brand-green">Blog & News</span>
            </h2>
          </div>
          <a href="#blog" className="btn-outline inline-flex text-sm">
            View All Articles
          </a>
        </motion.div>

        {/* Posts Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.article variants={itemVariants} key={post.id} className="card-dark overflow-hidden group">
              {/* Image */}
              <div className="relative aspect-[16/10] bg-brand-surface overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = 'none';
                    const parent = t.parentElement!;
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-brand-surface">
                        <span class="text-brand-green/20 text-6xl font-extrabold">${post.id.toString().padStart(2, '0')}</span>
                      </div>
                    `;
                  }}
                />
                <div className="absolute top-4 left-4 bg-brand-green text-black text-xs font-bold px-3 py-1 rounded-sm">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-[#666] mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-base mb-3 leading-snug group-hover:text-brand-green transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-[#aaa] leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className="text-brand-green text-xs font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
