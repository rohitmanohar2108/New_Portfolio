import React from "react";
import { ArrowRight, ChevronDown  } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import ProfileImage from "./ProfileImage";


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-background dark:bg-secondary/5 transition-colors duration-200 overflow-hidden">
      <AnimatedBackground />
     
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="section-divider mb-12"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading leading-tight">
              Hi, I'm Rohit.
              <br />
              <span className="text-primary font-thin text-6xl">
              Computer Science student
              </span>{" "}
              at NITK.
            </h1>
            <p className="text-xl text-text-body font-extralight">
              Passionate about web development, building scalable applications,
              and exploring innovative solutions to real-world challenges.
            </p>
            <button className="relative group flex z-20 font-extralight items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg tracking-wide transition-all duration-200 transform hover:scale-105 mx-auto md:mx-0">
              <span>Resume</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex justify-center">
            <ProfileImage imageUrl="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          </div>
        </div>
      </div>
      <button
          className="absolute bottom left-1/2 -translate-x-1/2 text-blue-600 dark:text-blue-600 hover:text-purple-300 transition-colors cursor-auto touch-highlight z-20 mt-28"
          aria-label="Scroll to skills"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
    </section>
  );
};

export default Hero;