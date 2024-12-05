import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, image, technologies, github, demo }: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}) => (
  <div className="bg-background dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
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
);

const Projects = () => {
  const projects = [
    {
      title: "E-Learning Platform",
      description: "A modern platform for online education with real-time collaboration features.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      github: "#",
      demo: "#"
    },
    {
      title: "Developer Portfolio",
      description: "A customizable portfolio template for developers with dark mode support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "Next.js", "TailwindCSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Code Editor",
      description: "Browser-based code editor with syntax highlighting and live preview.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Monaco Editor", "WebAssembly"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary dark:bg-secondary/25 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;