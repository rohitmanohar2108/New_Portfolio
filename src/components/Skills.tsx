import React from "react";
import { SkillOrb } from "./SkillOrb";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInView } from "./FadeInView";
import { useRef } from "react";

import {
  Code2,
  Database,
  Globe,
  Server,
  Cloud,
  Shield,
  GitBranch,
  Terminal,
  Cpu,
  Brain,
  Layout,
  Settings,
  Quote,
} from "lucide-react";
import { FaCloud, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiRedux,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { Section } from "./Section";

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const skillGroups = [
    {
      name: "Core",
      color: "from-blue-500 to-purple-500",
      skills: [
        { icon: FaC, name: "C Programming", level: 90 },
        { icon: SiCplusplus, name: "C++ Programming", level: 90 },
        { icon: FaReact, name: "React/Next.js", level: 90 },
        { icon: FaHtml5, name: "HTML/CSS", level: 85 },
        { icon: SiJavascript, name: "JavaScript", level: 88 },
        { icon: SiTypescript, name: "TypeScript", level: 88 },
      ],
    },
    {
      name: "Backend",
      color: "from-emerald-500 to-cyan-500",
      skills: [
        { icon: FaNodeJs, name: "Node.js", level: 92 },
        { icon: SiMysql, name: "SQL/NoSQL", level: 87 },
        { icon: FaCloud, name: "Cloud", level: 85 },
      ],
    },
    {
      name: "Tools",
      color: "from-pink-500 to-rose-500",
      skills: [
        { icon: FaGithub, name: "Github", level: 89 },
        { icon: SiRedux, name: "Redux Toolkit", level: 86 },
        { icon: Brain, name: "AI/ML", level: 84 },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="relative min-h-screen bg--900 py-24 overflow-hidden"
    >
      <motion.div
      ref={containerRef}
      style={{ scale }}
      className="max-w-7xl mx-auto px-4"
      >
         <motion.div
          style={{ rotate }}
          className="absolute top-10 right-10  text-gray-700/30 z-20"
        >
          <Code2 size={120} />
        </motion.div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Technical Universe
            </h2>
            <p className="mt-4 text-gray-400">
              Explore the interconnected world of technologies
            </p>
          </div>
         

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillGroups.map((group, index) => (
              <FadeInView
                key={index}
                delay={index * 0.2}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div key={index} className="relative group perspective-1000">
                  <div
                    className="absolute -inset-1 bg-gradient-to-r opacity-75 blur-lg transition-all duration-500 group-hover:opacity-100"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    }}
                  ></div>
                  <div className="relative shadow-lg  border border-gray-200 hover:border-gray-100 dark:bg-white/10 dark:border dark:border-white/10 dark:hover:border-white/20  p-6 rounded-xl transform-gpu transition-all duration-500 group-hover:rotate-y-12">
                    <h3
                      className={`text-2xl font-bold mb-6 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}
                    >
                      {group.name}
                    </h3>
                    <div className="space-y-8 ">
                      {group.skills.map((skill, skillIndex) => (
                        <SkillOrb
                          key={skillIndex}
                          {...skill}
                          groupColor={group.color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
