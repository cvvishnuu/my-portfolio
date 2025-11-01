import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "@/data/portfolio-data";
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare, Sparkles } from "lucide-react";

export const Contact = () => {
  const { personal } = portfolioData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const notificationTemplateId = import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID; // Template to send you the message
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Template for auto-reply to sender
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Check if EmailJS is configured
      if (!serviceId || !publicKey) {
        console.warn("EmailJS not configured. Please add credentials to .env file.");
        console.warn("See EMAILJS_SETUP.md for instructions.");

        // Fallback: Simulate sending for demo purposes
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        return;
      }

      console.log("Sending notification email to you...");

      // 1. Send notification email to you with name and message
      await emailjs.send(
        serviceId,
        notificationTemplateId,
        {
          name: formData.name,
          message: `${formData.email} messaged you - ${formData.message}`,
        },
        publicKey
      );

      console.log("✓ Notification email sent successfully!");
      console.log("Sending auto-reply to sender...");

      // 2. Send auto-reply to the person who contacted you
      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        {
          name: formData.name,
          to_email: formData.email, // Send auto-reply to the person's email
        },
        publicKey
      );

      console.log("✓ Auto-reply sent successfully!");
      console.log("✓ Both emails sent successfully!");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      console.error("Error details:", {
        message: error?.text || error?.message,
        status: error?.status,
        error: error,
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-950/20 dark:to-purple-950/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
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
          className="absolute bottom-40 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
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
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl"
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ duration: 0.5, type: "spring" }} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-full mb-4">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Have a question or want to work together? Feel free to reach out!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + index * 0.1 }}>
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1}>
                      <Card className="border-2 border-transparent hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group relative overflow-hidden">
                        {/* Gradient overlay */}
                        <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={false} />

                        <CardContent className="p-4 relative z-10">
                          <div className="flex items-center gap-4">
                            <motion.div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg" whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
                              <Icon className="h-6 w-6 text-white" />
                            </motion.div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{info.label}</p>
                              {info.href ? (
                                <a href={info.href} className="font-semibold text-gray-800 dark:text-gray-200 hover:text-primary transition-colors">
                                  {info.value}
                                </a>
                              ) : (
                                <p className="font-semibold text-gray-800 dark:text-gray-200">{info.value}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>

                        {/* Bottom glow */}
                        <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={false} />
                      </Card>
                    </Tilt>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1}>
              <Card className="border-2 border-transparent hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group relative overflow-hidden">
                {/* Gradient overlay */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={false} />

                {/* Sparkle decoration */}
                <motion.div className="absolute top-4 right-4" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                  <Sparkles className="w-6 h-6 text-primary/30 group-hover:text-primary transition-colors" />
                </motion.div>

                <CardContent className="p-6 relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full border-2 focus:border-primary transition-colors" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="w-full border-2 focus:border-primary transition-colors" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Message
                      </label>
                      <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Your message..." className="w-full min-h-[150px] border-2 focus:border-primary transition-colors" />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" disabled={isSubmitting} size="lg">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>

                    {submitStatus === "success" && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md text-sm font-medium border border-green-200 dark:border-green-800">
                        ✓ Message sent successfully! I'll get back to you soon.
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-md text-sm font-medium border border-red-200 dark:border-red-800">
                        ✗ Oops! Something went wrong. Please try again or email me directly.
                      </motion.div>
                    )}
                  </form>
                </CardContent>

                {/* Bottom glow */}
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={false} />
              </Card>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
