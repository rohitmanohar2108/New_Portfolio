import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, Sparkles } from "lucide-react";

const ProfileImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glowing circular background */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
        className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur-2xl opacity-30 dark:opacity-40"
      />

      {/* Circular profile container */}
      <div className="relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 dark:border-white shadow-2xl overflow-hidden">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Rotating dashed border */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
          className="absolute -inset-4 border-4 border-dashed border-primary/30 rounded-full animate-spin-slow"
        />
      </div>

      {/* Floating elements */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        className="absolute dark:text-white text-black text-2xl animate-float -top-3 -right-3 z-20"
      >
        <Cpu />
      </motion.div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        className="absolute dark:text-blue-500 text-blue-500 text-2xl animate-float -bottom-4 -right-4"
      >
        <Code2 />
      </motion.div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        className="absolute text-blue-500 dark:text-white text-2xl animate-float -top-3 -left-3 z-20"
      >
        <Sparkles />
      </motion.div>

      {/* Decorative floating elements */}
      <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/80 rounded-full animate-float" />
      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/80 rounded-full animate-float animation-delay-2000" />
    </div>
  );
};

export default ProfileImage;
