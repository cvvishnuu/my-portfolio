export const portfolioData = {
  personal: {
    name: "C V VISHNUU",
    title: "Senior Software Engineer",
    email: "cvishnuu01@gmail.com",
    phone: "+91-8610560986",
    location: "Chennai, India",
    links: {
      linkedin: "https://www.linkedin.com/in/vishnuu-chirayil/",
      github: "https://github.com/cvvishnuu/",
      codingProfile: "https://leetcode.com/u/Vishnuu/"
    }
  },
  about: {
    summary: `Passionate Senior Software Engineer with 4 years of experience architecting scalable microservices and building high-performance web applications. Proven track record of reducing API response times by 45%, cutting bug reports by 31%, and streamlining support tickets by 90%. Expert in modern web technologies, cloud platforms, and delivering mission-critical enterprise solutions.`,
    highlights: [
      { value: "45%", label: "API Performance Boost" },
      { value: "31%", label: "Bug Reduction" },
      { value: "90%", label: "Ticket Reduction" }
    ]
  },
  experience: [
    {
      company: "Newgen Digital Works",
      role: "Senior Software Engineer",
      period: "Apr 2024 – Present",
      location: "Chennai, India",
      responsibilities: [
        "Served as the onsite Point of contact for the booking service at TVS Motors, collaborating with stakeholders to gather requirements, address technical challenges and ensure seamless integration.",
        "Architected a scalable micro-services-based backend, designed to handle a 20% YOY growth for the next 5 years, ensuring system reliability under increasing demand.",
        "Enforced coding standards via code reviews and automated static analysis tools, decreasing bug reports by 31% and improving code maintainability.",
        "Reduced API response time by 45% by integrating Azure Service Bus to decouple long-running tasks, optimizing database queries through indexing, and implementing batch processing for independent asynchronous operations and implementing in-memory cache (LRU Cache) for search APIs."
      ]
    },
    {
      company: "Newgen Digital Works",
      role: "Software Engineer",
      period: "Nov 2021 – Mar 2024",
      location: "Chennai, India",
      responsibilities: [
        "Developed and optimized React applications, delivering high-performance, responsive user experiences.",
        "Modernized legacy static web applications by integrating Gatsby, improving load times.",
        "Reduced daily support tickets from 170+ to approximately 10, a 90% reduction by optimizing code structure, improving system reliability, and proactively addressing recurring issues."
      ]
    }
  ],
  projects: [
    {
      title: "Booking Service - TVS",
      date: "Dec 2024",
      description: "Architected and developed a mission-critical enterprise micro-service to unify online and offline booking systems, serving as the backbone of TVS's operations.",
      highlights: [
        "Implemented API exposure, versioning, and documentation using Azure API Management (APIM).",
        "Enhanced API security through dynamic tokenization with Microsoft Entra, ensuring robust access control.",
        "Streamlined booking workflows, reducing manual effort and eliminating system redundancies.",
        "Future-proofed the system with a modular design, enabling effortless feature expansion."
      ],
      techStack: ["Node.js", "NestJS", "Azure", "Microsoft SQL Server", "Jest", "SonarQube"],
      link: null
    },
    {
      title: "Numed",
      date: "Nov 2021",
      description: "Led frontend development for a healthcare platform enabling patients to schedule lab tests remotely.",
      highlights: [
        "Led frontend development with ReactJS and React Native, ensuring a consistent and responsive user experience across web and mobile platforms.",
        "Optimized state management by implementing MobX, improving performance, scalability, and maintainability.",
        "Integrated RESTful APIs with frontend applications, enabling seamless communication and efficient data handling.",
        "Enhanced healthcare accessibility, enabling patients to schedule lab tests remotely with ease."
      ],
      techStack: ["React", "React Native", "MobX", "RESTful APIs"],
      link: "https://numedlabs.com/login"
    }
  ],
  skills: {
    languages: [
      { name: "JavaScript", proficiency: 80 },
      { name: "TypeScript", proficiency: 70 },
      { name: "Java", proficiency: 40 },
      { name: "HTML", proficiency: 85 },
      { name: "CSS", proficiency: 85 },
      { name: "SQL", proficiency: 85 }
    ],
    frameworks: [
      { name: "React", proficiency: 75 },
      { name: "React Native", proficiency: 55 },
      { name: "Express.JS", proficiency: 80 },
      { name: "Nest.JS", proficiency: 85 }
    ],
    tools: [
      { name: "Postman", proficiency: 90 },
      { name: "SonarQube", proficiency: 55 },
      { name: "Github", proficiency: 85 }
    ],
    platforms: [
      { name: "Microsoft Azure", proficiency: 50 }
    ],
    databases: [
      { name: "Postgres", proficiency: 70 },
      { name: "Azure SQL", proficiency: 75 },
      { name: "Microsoft SQL Server", proficiency: 75 }
    ]
  },
  education: {
    degree: "B.E in Computer Science",
    institution: "Saveetha School Of Engineering",
    location: "Chennai",
    period: "Aug 2017 – Aug 2021"
  }
};
