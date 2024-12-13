import React from "react";
import { GraduationCap, Calendar, Quote, Code2, Book } from "lucide-react";
import { SkillsCanvas } from "./SkillsCanvas";
import { FadeInView } from "./FadeInView";
import { TextReveal } from "./TextReveal";
import { useRef } from "react";
import { Section } from "./Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { CgCollage } from "react-icons/cg";

const EducationItem = ({
  degree,
  school,
  year,
  description,
}: {
  degree: string;
  school: string;
  year: string;
  description: string;
}) => (
  <div className="bg-background dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
        <GraduationCap className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-text-heading mb-1">{degree}</h3>
        <p className="text-primary font-medium mb-2">{school}</p>
        <div className="flex items-center text-sm  text-text-body mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{year}</span>
        </div>
        <p className="text-text-body">{description}</p>
      </div>
    </div>
  </div>
);

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const education = [
    {
      degree: "Bachelors of Technology in Computer Science",
      school: "National Institute of Technology Karnataka",
      year: "2022 - 2026",
      description:
        "• C programming • Data Structures and Algorithms • Operating System • Database management system • Linear Algebra And Matrices • Design of digital systems • Data Communication • Design And Anylisis of Algorithms • Software Engineering",
    },
    {
      degree: "Secondary Education",
      school: "Dharampeth M.P. Deo Memorial Science College, Nagpur",
      year: "2020 - 2022",
      description: "• Electronics • Physics • Chemistry • Mathematics",
    },
  ];

  return (
    <Section id="education" className="relative py-20">
       <div className="absolute inset-0 bg-secondary  dark:bg-secondary/25 w-full h-1/2"></div>
      <motion.div
        ref={containerRef}
        style={{ scale }}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.div
          style={{ rotate }}
          className="absolute bottom-10 left-10  text-gray-700/30 "
        >
          <GraduationCap size={120} />
        </motion.div>
        {/* Background split into two colors */}
        <div className="absolute inset-0">
         
          <div className="absolute top-1/2 bg-background dark:bg-secondary/5 w-full h-1/2"></div>
          <SkillsCanvas />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
        <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
                Education
              </h2>
              
            </motion.div>
            
      
          <FadeInView>
            <div className="max-w-4xl mx-auto space-y-6 font-extralight">
              {education.map((item, index) => (
                <EducationItem key={index} {...item} />
              ))}
            </div>
          </FadeInView>
        </div>
      </motion.div>
    </Section>
  );
};

export default Education;
