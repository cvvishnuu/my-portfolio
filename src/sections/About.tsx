import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio-data";
import { TrendingUp, Zap, Award, User, Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export const About = () => {
  const { about } = portfolioData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for floating elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const icons = [TrendingUp, Zap, Award];

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000, shouldStart: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!shouldStart) return;

      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * (end - startValue) + startValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, shouldStart]);

    return count;
  };

  // Parse percentage values for counters
  const parseValue = (value: string) => parseInt(value.replace('%', ''));

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 via-purple-50/30 to-white dark:from-gray-900/50 dark:via-purple-950/20 dark:to-gray-800 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl"
          style={{ rotate }}
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Code Symbols */}
        {['{ }', '</>', '< />', '{ }'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl font-bold text-primary/10 dark:text-primary/5"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}

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
            <User className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Get to Know Me</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about building scalable solutions that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl group">
              {/* Decorative gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Sparkle decoration */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-primary/30 group-hover:text-primary transition-colors" />
              </motion.div>

              <div className="relative z-10">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {about.summary}
                </p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    Key Achievements
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <motion.li
                      className="flex items-start group/item"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="text-primary mr-3 mt-1 text-xl"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✓
                      </motion.span>
                      <span>
                        Reduced API response time by <strong className="text-primary">45%</strong> through
                        strategic optimizations
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex items-start group/item"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="text-primary mr-3 mt-1 text-xl"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✓
                      </motion.span>
                      <span>
                        Decreased bug reports by <strong className="text-primary">31%</strong> via code reviews
                        and automated analysis
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex items-start group/item"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="text-primary mr-3 mt-1 text-xl"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✓
                      </motion.span>
                      <span>
                        Streamlined support tickets by <strong className="text-primary">90%</strong> through
                        system reliability improvements
                      </span>
                    </motion.li>
                  </ul>
                </div>
              </div>

              {/* Bottom glow */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </div>
          </motion.div>

          {/* Highlights Cards with Animated Counters */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-6"
          >
            {about.highlights.map((highlight, index) => {
              const Icon = icons[index];
              const numericValue = parseValue(highlight.value);
              const animatedCount = useCounter(numericValue, 2000, inView);

              return (
                <motion.div key={index} variants={itemVariants}>
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    scale={1.03}
                    transitionSpeed={2000}
                    glareEnable={true}
                    glareMaxOpacity={0.15}
                    glareColor="#ffffff"
                    glarePosition="all"
                    glareBorderRadius="0.75rem"
                  >
                    <Card className="border-2 border-transparent hover:border-primary/50 transition-all duration-500 hover:shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group relative overflow-hidden">
                      {/* Gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      />

                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="h-8 w-8 text-white" />
                          </motion.div>
                          <div>
                            <motion.div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-1">
                              {animatedCount}%
                            </motion.div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                              {highlight.label}
                            </div>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <motion.div
                          className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ delay: 0.5 + index * 0.2 }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full relative"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${numericValue}%` } : {}}
                            transition={{ duration: 2, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                          >
                            {/* Glow effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-sm"
                              animate={{
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                          </motion.div>
                        </motion.div>
                      </CardContent>

                      {/* Bottom border glow */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      />
                    </Card>
                  </Tilt>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
