import React from "react";
import { Code2, Layout, Quote, Users } from "lucide-react";
import { FadeInView } from "./FadeInView";
import { TextReveal } from "./TextReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "./Section";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  return (
    <Section
      id="about"
      className="py-20 bg-background  relative overflow-hidden"
    >
      <div className="absolute inset-0 h-1/2 bg-secondary dark:bg-secondary/5 max-w-full"></div>
      <motion.div
        ref={containerRef}
        style={{ scale }}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.div
          style={{ rotate }}
          className="absolute top-10 right-10  text-gray-700/30 z-20"
        >
          <Quote size={120} />
        </motion.div>
        {/* Half background */}
        

        {/* Main Content */}
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="section-divider mb-12"></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
                About me
              </h2>
              
            </motion.div>
            
            <div className="flex justify-center mb-8">
              <img
                src="https://lh3.googleusercontent.com/ogw/AF2bZyio0AAPXlO9mBC0dENNLvzr1OjIZ21BH_8ArMJm6DrlyQ=s64-c-mo"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary"
              />
            </div>
            <FadeInView>
              <div className="relative p-6 bg-background rounded-lg shadow-lg">
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
                  about learning and applying modern web development
                  technologies. I focus on building clean, efficient, and
                  user-friendly applications while continuously improving my
                  skills and exploring innovative solutions.
                </p>
              </div>
            </FadeInView>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Clean Code",
                description:
                  "Writing maintainable, scalable, and efficient code that follows best practices.",
              },
              {
                icon: Layout,
                title: "Modern Design",
                description:
                  "Creating beautiful, responsive interfaces that provide excellent user experiences.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "Building a supportive community of developers learning and growing together.",
              },
            ].map((feature, index) => (
              <FadeInView
                key={index}
                delay={index * 0.2}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                
                 className="p-6 rounded-xl bg-secondary dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20 hover:shadow-lg transition-all duration-200">
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold text-text-heading mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-body">{feature.description}</p>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
