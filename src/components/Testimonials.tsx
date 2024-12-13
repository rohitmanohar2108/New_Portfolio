import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    content: "The animations and interactions are simply mind-blowing. This is the future of web design.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    content: "Incredible performance and smooth animations. Our users love the experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    content: "The attention to detail in every animation is remarkable. Exactly what we needed.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <Section className="bg-gradient-to-b from-gray-900 to-black py-20">
      <motion.div
        ref={containerRef}
        style={{ scale }}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.div 
          style={{ rotate }}
          className="absolute top-10 right-10 text-purple-500/20"
        >
          <Quote size={120} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">What People Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-lg border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}