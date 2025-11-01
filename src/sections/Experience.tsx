import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio-data";
import { Briefcase, MapPin, Calendar, Sparkles, TrendingUp } from "lucide-react";
import { useRef } from "react";

export const Experience = () => {
  const { experience } = portfolioData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to climber position (0% at bottom, 100% at top)
  const climberY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const climberRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, -5]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
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
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Career Journey</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building scalable solutions and delivering impactful results
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line with Glow Effect */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 blur-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Climbing Person Animation */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20"
            style={{
              top: climberY,
              rotate: climberRotate,
            }}
          >
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Climber Icon - Person climbing emoji */}
              <div className="text-5xl drop-shadow-2xl" style={{ filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))" }}>
                🧗
              </div>
              {/* Glow effect around climber */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot with Pulse Animation */}
                <motion.div
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2, type: "spring" }}
                >
                  <div className="relative">
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content Card */}
                <div className={index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:col-start-2"}>
                  <Card className="border-2 border-transparent hover:border-primary/50 transition-all duration-500 hover:shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group relative overflow-hidden">
                    {/* Card Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    {/* Sparkle Icon */}
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                    </motion.div>

                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Briefcase className="h-5 w-5 text-white" />
                          </motion.div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {exp.role}
                          </CardTitle>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <div className="font-semibold text-primary text-base">
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300 cursor-default"
                          >
                            <motion.span
                              className="text-primary mt-1 flex-shrink-0 font-bold"
                              whileHover={{ scale: 1.3, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              ▹
                            </motion.span>
                            <span className="text-sm leading-relaxed">{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>

                    {/* Bottom Glow Border */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 ? (
                  <div className="hidden md:block"></div>
                ) : (
                  <div className="hidden md:block md:col-start-1 md:row-start-1"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
