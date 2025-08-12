import { motion } from "framer-motion"; // Use correct import from 'framer-motion'

const TypewriterText = ({ text }) => {
  return (
    <motion.h1
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-3xl md:text-4xl lg:text-6xl font-thin tracking-tight leading-tight"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}  // Start with opacity 0 for each character
          animate={{ opacity: 1 }}   // Animate to full opacity for the typewriter effect
          transition={{
            duration: 0.1,            // Duration for each character's animation
            delay: index * 0.1,       // Sequential delay based on character index
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TypewriterText;
