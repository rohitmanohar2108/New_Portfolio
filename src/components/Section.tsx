import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface SectionProps {
    id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = '' }: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}