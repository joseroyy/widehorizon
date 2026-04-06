import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '', bg = 'bg-white', animate = true }) => {
  const baseClasses = `py-16 md:py-24 ${bg} ${className}`;

  if (!animate) {
    return (
      <section id={id} className={baseClasses}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={baseClasses}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
