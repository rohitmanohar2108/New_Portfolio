import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { SkillsCanvas } from "./SkillsCanvas";
import { TextReveal } from "./TextReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "./Section";
import { FadeInView } from "./FadeInView";
import { useRef } from "react";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}) => (
  <div className="bg-background border border-zinc-300 dark:bg-white/5  dark:border dark:border-white/10 dark:hover:border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
    <div className="relative group">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
        >
          <Github className="w-5 h-5 text-primary" />
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
        >
          <ExternalLink className="w-5 h-5 text-primary" />
        </a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-text-heading mb-2">{title}</h3>
      <p className="text-text-body mb-4 italic">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);


  const projects = [
    {
      title: "FilmNinja ✨",
      description:
        "Built a responsive movie browsing app with real-time data and smart suggestions, featuring optimized search and secure user authentication.",
      image: "https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      github: "https://github.com/rohitmanohar2108/FilmNinja",
      demo: "#",
    },
    {
      title: "Operating System Simulator✨",
      description:
        "Developed a web app to simulate and visualize FIFO, LRU, and Optimal page replacement algorithms, enhancing understanding of memory management and system performance optimization.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["JQuery ", "Node Js", "HTML", "CSS"],
      github: "https://github.com/rohitmanohar2108/OS-LAB-PROJECT",
      demo: "#",
    },
    {
      title: "Airlines Reservation System✨",
      description:
        "Effective airline management relies on online booking systems to enhance customer experience, streamline operations, and boost profitability. These systems improve reservations, reduce errors, and provide valuable data for tailored services and marketing.",
      image:
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "SQL", "JavaScript"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <Section id="projects" className="relative py-20">
       <div className="absolute inset-0 bg-secondary  dark:bg-secondary/25 w-full h-1/2"></div>
      <motion.div
      ref={containerRef}
      style={{ scale }}
      className="max-w-7xl mx-auto px-4"
      >
      {/* Background Layers */}
       <div className="absolute inset-0">
       
        <div className="absolute top-1/2 bg-background dark:bg-secondary-5 w-full h-1/2"></div>
        <SkillsCanvas />
      </div> 

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
       
        <TextReveal
            text="Featured Projects"
            className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12"
          />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-extralight">
        
          {projects.map((project, index) => (
            <FadeInView
            key={index}
            delay={index * 0.2}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <ProjectCard key={index} {...project} />
            </FadeInView>
          ))}
        </div>
       
      </div>
      </motion.div> 
    </Section>
  );
};

export default Projects;
