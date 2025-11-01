import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio-data";
import { ExternalLink, Calendar, Sparkles, Zap, MousePointerClick } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const { projects } = portfolioData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = (link: string | null) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-gray-900/50 dark:to-gray-950/50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
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
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my recent work showcasing innovative solutions and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-full"
            >
              {/* Bounce Card Wrapper */}
              <motion.div
                className="h-full"
                whileHover={{
                  y: -12,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                whileTap={{
                  scale: 0.98,
                  y: -8,
                }}
                onClick={() => handleCardClick(project.link)}
              >
                <Card
                  className={`h-full flex flex-col border-2 border-transparent hover:border-primary/50 transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl group relative overflow-hidden ${
                    project.link ? 'cursor-pointer' : ''
                  }`}
                >
                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    initial={false}
                  />

                  {/* Click Indicator for Clickable Cards */}
                  {project.link && (
                    <motion.div
                      className="absolute top-4 left-4 z-20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        hoveredIndex === index
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs font-semibold shadow-lg">
                        <MousePointerClick className="w-3 h-3" />
                        Click to Visit
                      </div>
                    </motion.div>
                  )}

                  {/* Sparkle Effect */}
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    animate={hoveredIndex === index ? { rotate: 360, scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0 }}
                  >
                    <Zap className={`w-6 h-6 ${hoveredIndex === index ? 'text-yellow-500' : 'text-gray-300'} transition-colors`} />
                  </motion.div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        {project.title}
                        {hoveredIndex === index && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-primary"
                          >
                            ✨
                          </motion.span>
                        )}
                      </CardTitle>
                      {project.link && (
                        <motion.div
                          className="text-gray-400 group-hover:text-primary transition-colors"
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(project.link);
                          }}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </motion.div>
                      )}
                    </div>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col relative z-10">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Key Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <motion.span
                              className="text-primary mt-1 flex-shrink-0 font-bold"
                              whileHover={{ scale: 1.3, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              ✓
                            </motion.span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.05 }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(59, 130, 246, 0.2)",
                              y: -2,
                            }}
                            className="px-3 py-1.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-primary rounded-full text-xs font-medium border border-primary/20 cursor-default transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  {/* Bottom Glow Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Ripple Effect on Click */}
                  {hoveredIndex === index && project.link && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={false}
                    >
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 rounded-full"
                        animate={{
                          scale: [0, 3],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
