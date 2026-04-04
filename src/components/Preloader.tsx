import { motion } from 'framer-motion';

const BAR_COUNT = 10;
const BAR_COUNT_MOBILE = 5;

// Variants for each bar
const barVariants = {
  initial: {
    scaleY: 1,
  },
  animate: () => ({
    scaleY: 0,
    transition: {
      duration: 3,
      ease: [0.19, 1, 0.22, 1], // Custom cubic-bezier for a premium feel
      delay: Math.random() * 0.5 + 0.2, // Randomized delay for PowerPoint effect
    }
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-9999 flex pointer-events-none"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {[...Array(BAR_COUNT)].map((_, i) => (
        <motion.div
          key={i}
          variants={barVariants}
          custom={i}
          className="h-full flex-1 bg-brand-green hidden md:block origin-top first:border-l-0 border-l border-white"
          style={{ willChange: 'transform' }}
        />
      ))}
      {[...Array(BAR_COUNT_MOBILE)].map((_, i) => (
        <motion.div
          key={i}
          variants={barVariants}
          custom={i}
          className="h-full flex-1 bg-brand-green origin-top md:hidden first:border-l-0 border-l border-white"
          style={{ willChange: 'transform' }}
        />
      ))}

      {/* Center Branding during reveal */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-4">
          <img
            src="/AdaveLogo2.png"
            alt="Adave Logo"
            className="w-16 h-16 md:w-24 md:h-24 object-contain animate-pulse"
          />
          <div className="h-0.5 w-12 bg-brand-green rounded-full overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
              className="h-full w-full bg-white opacity-50"
            />
          </div>
        </div>
      </motion.div> */}
    </motion.div>
  );
}
