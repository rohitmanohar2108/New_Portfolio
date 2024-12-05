import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
    </div>
  );
};

export default AnimatedBackground;