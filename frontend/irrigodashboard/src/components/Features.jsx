import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Droplets, Cloud, LineChart, Activity, Zap, Map } from "lucide-react";
// import { Feature } from "../assets/types";

const featuresData = [
  {
    id: 1,
    title: "Real-Time Monitoring",
    description:
      "Monitor soil moisture, temperature, and humidity in real-time through sensors deployed across your fields.",
    icon: <Activity className="h-12 w-12 text-primary" />,
  },
  {
    id: 2,
    title: "AI-Based Predictions",
    description:
      "Our AI model predicts irrigation needs based on historical data, current conditions, and crop type.",
    icon: <LineChart className="h-12 w-12 text-primary" />,
  },
  {
    id: 3,
    title: "Weather Integration",
    description:
      "Automatically adjusts irrigation schedules when rain is predicted to conserve water resources.",
    icon: <Cloud className="h-12 w-12 text-primary" />,
  },
  {
    id: 4,
    title: "Water Conservation",
    description:
      "Smart algorithms ensure optimal water usage, reducing waste while maintaining crop health.",
    icon: <Droplets className="h-12 w-12 text-primary" />,
  },
  {
    id: 5,
    title: "Edge AI Technology",
    description:
      "Works even in low-connectivity areas with Edge AI processing data directly on-site.",
    icon: <Zap className="h-12 w-12 text-primary" />,
  },
  {
    id: 6,
    title: "LoRa Communication",
    description:
      "Long-range, low-power wireless communication enables sensors to work across vast farmland.",
    icon: <Map className="h-12 w-12 text-primary" />,
  },
];

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            Powerful Features for{" "}
            <span className="text-primary">Smart Farming</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subheading"
          >
            Our system combines cutting-edge technology with practical farming
            solutions to revolutionize how you manage irrigation.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="feature-card flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
