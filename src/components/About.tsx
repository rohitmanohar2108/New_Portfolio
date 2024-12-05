import React from "react";
import { Code2, Layout, Users } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-background transition-colors duration-200"
    >
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
            About Me
          </h2>
          <div className="flex justify-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            />
          </div>
          <div className="relative p-6 bg-background rounded-lg">
            <svg
              className="absolute top-4 left-4 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-gray-700/30"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-text-body text-lg leading-relaxed">
              I am a third-year Computer Science student at NITK, passionate
              about learning and applying modern web development technologies. I
              focus on building clean, efficient, and user-friendly applications
              while continuously improving my skills and exploring innovative
              solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="w-8 h-8 text-primary" />,
              title: "Clean Code",
              description:
                "Writing maintainable, scalable, and efficient code that follows best practices.",
            },
            {
              icon: <Layout className="w-8 h-8 text-primary" />,
              title: "Modern Design",
              description:
                "Creating beautiful, responsive interfaces that provide excellent user experiences.",
            },
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              title: "Community",
              description:
                "Building a supportive community of developers learning and growing together.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-secondary dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20 p-8 rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-text-heading mb-2">
                {item.title}
              </h3>
              <p className="text-text-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
