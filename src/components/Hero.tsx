import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import ProfileImage from "./ProfileImage";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { ParallaxText } from "./ParallaxText";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-background dark:bg-secondary/5 transition-colors duration-200 overflow-hidden"
    >
      <AnimatedBackground />
      <div className=" -mt-[4%] hidden sm:block">
        <ParallaxText baseVelocity={-5}>
          CREATIVE DEVELOPER INNOVATIVE THINKER
        </ParallaxText>
      </div>
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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center lg:justify-start lg:items-start space-x-4 sm:space-x-6 md:space-x-5 mt-4"
            >
              {[
                { Icon: Github, href: "#", color: "from-blue-500/20 to-purple-500/20" },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/rohit-manohar-80b949207/",
                  color: "from-blue-500/20 to-purple-500/20",
                },
                { Icon: Mail, href: "#", color: "from-blue-500/20 to-purple-500/20" },
                { Icon: Code2, href: "#", color: "from-blue-500/20 to-purple-500/20" },
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-14 h-14 rounded-xl  bg-gradient-to-br ${color}  dark:text-white  flex items-center justify-center text-black shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <Icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center">
            <ProfileImage imageUrl="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 hidden sm:block">
        
        <ParallaxText baseVelocity={5}>
          PROBLEM SOLVER TECH ENTHUSIAST
        </ParallaxText>
      </div>
      <button
        className="absolute bottom left-1/2 -translate-x-1/2 text-blue-600 dark:text-blue-600 hover:text-purple-300 transition-colors cursor-auto touch-highlight z-20 mt-20"
        aria-label="Scroll to skills"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
