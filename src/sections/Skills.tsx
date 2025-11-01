import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio-data";
import { Code, Layers, Wrench, Cloud, Database, Sparkles, Award } from "lucide-react";
import { useState } from "react";

export const Skills = () => {
  const { skills } = portfolioData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      items: skills.languages.map((skill) => ({ name: skill, proficiency: 90 })),
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.5)",
    },
    {
      title: "Frameworks",
      items: skills.frameworks.map((skill) => ({ name: skill, proficiency: 92 })),
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      title: "Tools",
      items: skills.tools.map((skill) => ({ name: skill, proficiency: 88 })),
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.5)",
    },
    {
      title: "Platforms",
      items: skills.platforms.map((skill) => ({ name: skill, proficiency: 85 })),
      icon: Cloud,
      color: "from-green-500 to-teal-500",
      glowColor: "rgba(34, 197, 94, 0.5)",
    },
    {
      title: "Databases",
      items: skills.databases.map((skill) => ({ name: skill, proficiency: 87 })),
      icon: Database,
      color: "from-indigo-500 to-blue-500",
      glowColor: "rgba(99, 102, 241, 0.5)",
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/30 via-blue-50/30 to-white dark:from-gray-950/50 dark:via-blue-950/20 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-full mb-4"
          >
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Technical Expertise</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mastery across modern technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  scale={1.02}
                  transitionSpeed={2000}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#ffffff"
                  glarePosition="all"
                  glareBorderRadius="0.75rem"
                >
                  <Card className="h-full border-2 border-transparent hover:border-primary/50 transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl group relative overflow-hidden">
                    {/* Card Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${category.glowColor}, transparent 70%)`,
                      }}
                    />

                    {/* Sparkle Icon */}
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                    </motion.div>

                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {category.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        {category.items.map((skill, i) => (
                          <div
                            key={i}
                            onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <motion.span
                                className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                whileHover={{ x: 5, color: "rgb(59, 130, 246)" }}
                              >
                                {skill.name}
                              </motion.span>
                              <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                  opacity: hoveredSkill === `${category.title}-${skill.name}` ? 1 : 0,
                                  scale: hoveredSkill === `${category.title}-${skill.name}` ? 1 : 0.8,
                                }}
                                className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded-full"
                              >
                                Expert
                              </motion.span>
                            </div>
                            {/* Animated Progress Bar */}
                            <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.proficiency}%` } : {}}
                                transition={{ duration: 1.5, delay: index * 0.1 + i * 0.1, ease: "easeOut" }}
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                              >
                                {/* Glow Effect */}
                                <motion.div
                                  className="absolute inset-0 blur-sm"
                                  style={{
                                    background: `linear-gradient(to right, ${category.glowColor}, ${category.glowColor})`,
                                  }}
                                  animate={{
                                    opacity: hoveredSkill === `${category.title}-${skill.name}` ? [0.5, 1, 0.5] : 0.3,
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                                {/* Shimmer Effect */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                  animate={{
                                    x: ["-100%", "200%"],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: index * 0.2,
                                  }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Bottom Border Glow */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={false}
                    />
                  </Card>
                </Tilt>
              </motion.div>
            );
          })}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Education
          </h3>
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.01}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.1}
          >
            <Card className="max-w-3xl mx-auto border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group">
              <CardContent className="p-6 relative overflow-hidden">
                {/* Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {portfolioData.education.degree}
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      {portfolioData.education.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {portfolioData.education.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {portfolioData.education.period}
                    </p>
                  </div>
                </div>

                {/* Bottom Glow */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
              </CardContent>
            </Card>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};
