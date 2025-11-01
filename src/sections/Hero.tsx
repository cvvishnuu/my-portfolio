import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export const Hero = () => {
  const { personal } = portfolioData;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(useMotionValue(mousePosition.x), springConfig);
  const mouseY = useSpring(useMotionValue(mousePosition.y), springConfig);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Animated Blobs */}
        <motion.div
          className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"
          animate={{
            scale: [1, 1.3, 1.1, 1],
            x: [0, 60, 30, 0],
            y: [0, 40, -20, 0],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-48 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"
          animate={{
            scale: [1, 1.2, 1.4, 1],
            x: [0, -40, 50, 0],
            y: [0, -60, 30, 0],
            rotate: [0, -90, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-48 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"
          animate={{
            scale: [1, 1.4, 1.2, 1],
            x: [0, -50, 40, 0],
            y: [0, 50, -30, 0],
            rotate: [360, 270, 180, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 dark:bg-blue-400/30 rounded-full"
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

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41IiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20 dark:opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Photo with 3D Effect */}
          <motion.div initial={{ opacity: 0, x: -100, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1, type: "spring" }} className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            {/* Glowing Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Profile Image Container */}
            <motion.div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              {/* Pulsing Glow Rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(59, 130, 246, 0.3), 0 0 40px 10px rgba(147, 51, 234, 0.2)",
                    "0 0 30px 10px rgba(59, 130, 246, 0.4), 0 0 60px 20px rgba(147, 51, 234, 0.3)",
                    "0 0 20px 5px rgba(59, 130, 246, 0.3), 0 0 40px 10px rgba(147, 51, 234, 0.2)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Multiple Orbiting Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: "-6px",
                    marginTop: "-6px",
                  }}
                  animate={{
                    x: [
                      Math.cos((i * 60 * Math.PI) / 180) * 150,
                      Math.cos(((i * 60 + 360) * Math.PI) / 180) * 150,
                    ],
                    y: [
                      Math.sin((i * 60 * Math.PI) / 180) * 150,
                      Math.sin(((i * 60 + 360) * Math.PI) / 180) * 150,
                    ],
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Static Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900 shadow-2xl">
                  <img src="/profile.jpeg" alt={personal.name} className="w-full h-full object-cover object-top scale-125" style={{ objectPosition: "50% 20%" }} />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-200%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 2,
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }} whileHover={{ scale: 1.1 }}>
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Coffee Powered ☕</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="text-center lg:text-left order-1 lg:order-2">
            {/* Welcome Badge */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-block mb-6">
              <motion.span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-primary rounded-full text-sm font-medium backdrop-blur-sm" whileHover={{ scale: 1.05 }}>
                <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  👋
                </motion.span>
                Welcome to my portfolio
              </motion.span>
            </motion.div>

            {/* Name with Gradient */}
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">{personal.name}</span>
            </motion.h1>

            {/* Typing Animation for Title */}
            <motion.div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 h-20 text-gray-700 dark:text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <TypeAnimation
                sequence={["Senior Software Engineer", 2000, "Full Stack Developer", 2000, "Night time Coder 🌙", 2000, "Bug Terminator 🐛", 2000, "Coffee-Powered Developer ☕", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"
              />
            </motion.div>

            {/* Description */}
            <motion.p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              Architecting scalable microservices and building high-performance web applications with modern technologies
            </motion.p>

            {/* Social Links with Glow Effect */}
            <motion.div className="flex justify-center lg:justify-start gap-4 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
              {[
                { icon: Github, link: personal.links.github, color: "hover:text-gray-900 dark:hover:text-white" },
                { icon: Linkedin, link: personal.links.linkedin, color: "hover:text-blue-600" },
                { icon: Code2, link: personal.links.codingProfile, color: "hover:text-green-600" },
                { icon: Mail, link: `mailto:${personal.email}`, color: "hover:text-red-600" },
              ].map(({ icon: Icon, link, color }, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="outline" size="icon" onClick={() => window.open(link, "_blank")} className={`relative overflow-hidden group ${color} transition-all duration-300`}>
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" initial={false} />
                    <Icon className="h-5 w-5 relative z-10 group-hover:text-white transition-colors" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" onClick={() => scrollToSection("projects")} className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="border-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <ArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-500" />
        </div>
      </motion.div>
    </section>
  );
};
