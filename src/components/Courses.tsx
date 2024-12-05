import React from 'react';
import { ArrowRight } from 'lucide-react';

const CourseCard = ({ title, description, image, level }: {
  title: string;
  description: string;
  image: string;
  level: string;
}) => (
  <div className="bg-background dark:bg-secondary/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-sm font-semibold text-primary mb-2 block">{level}</span>
      <h3 className="text-xl font-bold text-text-heading mb-2">{title}</h3>
      <p className="text-text-body mb-4">{description}</p>
      <button className="group flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

const Courses = () => {
  const courses = [
    {
      title: "CSS Mastery",
      description: "Master modern CSS techniques, flexbox, grid, and responsive design principles.",
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Intermediate"
    },
    {
      title: "JavaScript Fundamentals",
      description: "Build a solid foundation in JavaScript with practical examples and projects.",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Beginner"
    },
    {
      title: "Responsive Web Design",
      description: "Create beautiful websites that work perfectly across all devices.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Advanced"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-secondary dark:bg-secondary/25 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12">Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;