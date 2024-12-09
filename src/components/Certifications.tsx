import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Certified Kubernetes Administrator (CKA)",
    provider: "Cloud Native Computing Foundation",
    period: "Sep 2023",
    description:
      "Demonstrated proficiency in managing Kubernetes clusters and deploying cloud-native applications.",
    image: "https://example.com/cka-logo.png",
    link: "https://www.cncf.io/certification/cka/",
  },
  {
    title: "AWS Certified Solutions Architect",
    provider: "Amazon Web Services",
    period: "Jun 2023",
    description:
      "Designed scalable and secure cloud solutions leveraging AWS services and infrastructure.",
    image: "https://example.com/aws-logo.png",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    title: "React Developer Certification",
    provider: "Meta Platforms",
    period: "Mar 2023",
    description:
      "Validated expertise in building responsive web applications using React and modern JavaScript.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT8oisc622hViXocONZl1c61XRM6xc4LQ_bw&s",
    link: "https://www.coursera.org/meta-react-certification",
  },
];

export const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20" id="certifications">
      {/* First background color */}
      <div className="absolute inset-0 bg-secondary h-1/2" />

      {/* Second background color */}
      <div className="absolute inset-0  bg-background  top-1/2 h-1/2" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-black dark:text-white mb-16"
        >
          Certifications
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-1 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-primary/70">
                <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-primary/70 flex items-center justify-center">
                  <Award size={12} className="text-white" />
                </div>
              </div>

              <div className="bg-background border border-zinc-300 dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg p-6 ml-6 flex items-center">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mr-6"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-20 h-20 object-contain rounded-lg border border-gray-600"
                  />
                </a>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-text-heading"
                    >
                      {cert.title}
                    </a>
                  </h3>
                  <div className="text-primary font-medium mb-2 flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>{cert.provider}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm mb-4 font-extraligh space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.period}</span>
                  </div>
                  <p className="text-gray-300 text-text-body font-extralight">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
