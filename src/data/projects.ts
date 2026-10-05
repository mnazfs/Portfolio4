import type { Project } from "./types";

export const projects: readonly Project[] = [
  {
    slug: "imgis",
    title: "IMGIS",
    category: "GIS · Full-Stack",
    summary:
      "GIS-enabled infrastructure management platform with a natural-language query layer.",
    description:
      "A full-stack geospatial platform for infrastructure management. A React and Leaflet frontend sits on a Node.js backend and a GeoServer spatial data layer. A custom NLP module with a RAG pipeline answers natural-language infrastructure queries and returns the results rendered on the map.",
    stack: ["React.js", "Node.js", "Leaflet", "Python", "PostgreSQL", "QGIS", "GeoServer"],
    highlights: [
      "Interactive map frontend built on Leaflet",
      "GeoServer-backed spatial data layer",
      "NLP and RAG pipeline for natural-language queries with map-rendered answers",
    ],
    featured: true,
  },
  {
    slug: "lensbook",
    title: "Lensbook",
    category: "Marketplace · Web & Mobile",
    summary:
      "Two-sided marketplace connecting clients with photographers and videographers.",
    description:
      "A marketplace where clients discover creators through portfolios, negotiate packages, book services and pay, all in one place. Built as responsive web and mobile applications with real-time chat, availability management, reviews, creator subscriptions and portfolio management.",
    stack: ["Next.js", "React Native (Expo)", "Node.js", "Express.js", "PostgreSQL"],
    highlights: [
      "Web (Next.js) and mobile (Expo) clients",
      "Real-time chat between clients and creators",
      "Availability management, reviews and creator subscriptions",
      "Booking and payment flow",
    ],
    featured: true,
  },
  {
    slug: "college-bus-management",
    title: "College Bus Management System",
    category: "Full-Stack Web",
    summary:
      "Automates college bus transport with route optimisation, tracking and attendance.",
    description:
      "A full-stack platform that automates college bus transportation: student registration, route optimisation, real-time tracking and route-wise attendance. Role-based access serves students, admins, drivers and bus secretaries, and real-time delay notifications keep everyone informed.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Role-based access for four user types",
      "Real-time tracking and delay notifications",
      "Route optimisation and route-wise attendance",
    ],
    featured: true,
  },
  {
    slug: "antimicrobial-activity-prediction",
    title: "Antimicrobial Activity Prediction",
    category: "Machine Learning",
    summary:
      "ML and deep learning pipeline for antimicrobial screening from molecular descriptors.",
    description:
      "A machine learning and deep learning pipeline for antimicrobial activity screening, built on molecular descriptors and structural fingerprints extracted from chemical compound datasets. It combines XGBoost, deep neural networks, RDKit and autoencoder-based dimensionality reduction for classification and regression, improving prediction of both antimicrobial activity and minimum inhibitory concentration.",
    stack: ["Python", "XGBoost", "Deep Neural Network", "Autoencoder", "RDKit"],
    highlights: [
      "Classification and regression on molecular descriptors and fingerprints",
      "Autoencoder-based dimensionality reduction",
      "Predicts activity and minimum inhibitory concentration",
    ],
  },
  {
    slug: "smart-foot-pressure-insole",
    title: "Smart Foot Pressure Insole",
    category: "IoT · Embedded",
    summary:
      "Piezoelectric insole streaming live foot-pressure data to a React dashboard.",
    description:
      "A foot pressure monitoring system that uses piezoelectric sensors and an ESP32 for real-time data acquisition and wireless transmission. A React frontend visualises pressure distribution and raw sensor data live for analysis.",
    stack: ["C++", "ESP32", "Piezoelectric sensors", "React.js"],
    highlights: [
      "Real-time acquisition and wireless transmission from an ESP32",
      "Live pressure-distribution visualisation in React",
    ],
  },
  {
    slug: "retracing-wheelchair",
    title: "Retracing Wheelchair",
    category: "Embedded · Accessibility",
    summary:
      "Smart wheelchair system built with a multidisciplinary team under IIT Madras's LEAP programme.",
    description:
      "A smart wheelchair system developed with a multidisciplinary team as part of the LEAP Project by the IIT Madras Incubation Cell. It integrates embedded programming, sensors and electronic components to improve wheelchair accessibility and user assistance. The team was First Runner Up in the programme.",
    stack: ["C++", "ESP32", "Sensors", "Electronic components"],
    highlights: [
      "Embedded firmware, sensors and electronics integrated into one system",
      "First Runner Up, LEAP Project, IIT Madras Incubation Cell",
    ],
  },
  {
    slug: "ulearn-campus-community",
    title: "μLearn Campus Community",
    category: "Community Platform",
    summary:
      "Campus community platform for discussions, resource sharing and events.",
    description:
      "A community platform that connects students and supports collaboration across campus. It covers community discussions, learning-resource sharing, event and activity management and student engagement, giving academic and extracurricular life one central place.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Discussions and learning-resource sharing",
      "Event and activity management",
    ],
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);