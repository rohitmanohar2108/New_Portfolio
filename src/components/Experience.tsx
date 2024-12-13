import React from "react";
import { Briefcase, Calendar, Quote } from "lucide-react";
import { SkillsCanvas } from "./SkillsCanvas";
import { FadeInView } from "./FadeInView";
import { TextReveal } from "./TextReveal";
import { useRef } from "react";
import { Section } from "./Section";
import { motion, useScroll, useTransform } from "framer-motion";

const ExperienceItem = ({
  role,
  company,
  period,
  description,
  technologies,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}) => (
  <div className="bg-background dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
        <Briefcase className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-text-heading mb-1">{role}</h3>
        <p className="text-primary font-medium mb-2">{company}</p>
        <div className="flex items-center text-sm text-text-body mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{period}</span>
        </div>
        <p className="text-text-body mb-4">{description}</p>
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
  </div>
);

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const experiences = [
    {
      role: "Executive Media Member",
      company: "TEDxNITK",
      period: "2022 - Present",
      description: "Designed posters and promotional materials for TEDx events",
      technologies: ["Canva", "Photoshop"],
    },
  ];

  return (
    <Section id="experience" className="relative py-20">
      <div className="absolute inset-0 bg-secondary  dark:bg-secondary/25 w-full h-1/2"></div>
      <motion.div
        ref={containerRef}
        style={{ scale }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 bg-background dark:bg-secondary/5 w-full h-1/2"></div>
          <SkillsCanvas />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <TextReveal
            text="Experience"
            className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12"
          />

          <FadeInView>
            <div className="max-w-4xl mx-auto space-y-6 font-extralight">
              {experiences.map((experience, index) => (
                <ExperienceItem key={index} {...experience} />
              ))}
            </div>
          </FadeInView>
        </div>
      </motion.div>
    </Section>
  );
};

export default Experience;
