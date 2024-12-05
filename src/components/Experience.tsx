import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceItem = ({ role, company, period, description, technologies }: {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}) => (
  <div className=" bg-background dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
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
  const experiences = [
    {
      role: "Senior Frontend Developer & Tech Lead",
      company: "Google",
      period: "2020 - Present",
      description: "Leading a team of developers in building and maintaining large-scale web applications. Implementing best practices and mentoring junior developers.",
      technologies: ["React", "TypeScript", "Next.js", "TailwindCSS"]
    },
    {
      role: "Frontend Developer",
      company: "Microsoft",
      period: "2018 - 2020",
      description: "Developed and maintained core features for Microsoft's web-based products. Collaborated with UX designers to implement responsive designs.",
      technologies: ["JavaScript", "Vue.js", "SCSS", "Jest"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;