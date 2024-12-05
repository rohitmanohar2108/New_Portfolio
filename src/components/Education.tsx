import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationItem = ({ degree, school, year, description }: {
  degree: string;
  school: string;
  year: string;
  description: string;
}) => (
  <div className="bg-background dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20   p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
        <GraduationCap className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-text-heading mb-1">{degree}</h3>
        <p className="text-primary font-medium mb-2">{school}</p>
        <div className="flex items-center text-sm text-text-body mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{year}</span>
        </div>
        <p className="text-text-body">{description}</p>
      </div>
    </div>
  </div>
);

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      year: "2018 - 2020",
      description: "Specialized in Human-Computer Interaction and Web Technologies. Led research projects on modern web development practices."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "MIT",
      year: "2014 - 2018",
      description: "Focused on full-stack development and user interface design. Graduated with honors and received the Outstanding Student Award."
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary dark:bg-secondary/25 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;