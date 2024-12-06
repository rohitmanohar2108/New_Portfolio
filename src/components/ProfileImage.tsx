import { Braces, Code, Code2, Cpu, Sparkle, Sparkles } from 'lucide-react';
import React from 'react';

const ProfileImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative">
      {/* Glowing effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur-2xl opacity-30 dark:opacity-40 animate-pulse" />
      
      {/* Image container */}
      <Sparkles className='text-blue-500 dark:text-white text-2xl animate-float' />
      
      <div className="relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 dark:border-white shadow-2xl overflow-hidden">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Rotating border */}
        <div className="absolute -inset-4 border-4 border-dashed border-primary/30 rounded-full animate-spin-slow" />
      </div>
      
      {/* Floating elements */}
      <Cpu className='absolute dark:text-white text-blue-600 text-2xl animate-float -top-3 -right-3 z-20' />
      <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/80 rounded-full animate-float" />
      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/80 rounded-full animate-float animation-delay-2000" />
      <Code2 className='absolute dark:text-blue-500 text-blue-500 text-2xl animate-float -bottom-4 -right-4' />
    </div>
  );
};

export default ProfileImage;