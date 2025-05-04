import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Droplets,
  TrendingUp,
  Sprout,
  Timer,
  Smartphone,
  LineChart,
  BarChart,
  CloudSun,
} from "lucide-react";

const benefitsData = [
  {
    id: 1,
    title: "Water Conservation",
    description:
      "Reduce water usage by up to 30% through precision irrigation based on actual needs.",
    icon: <Droplets size={36} />,
    // color: "bg-blue-400",
    color: "from-blue-400 to-white",
  },
  {
    id: 2,
    title: "Increased Crop Yield",
    description:
      "Optimize growing conditions to improve yields by 15-25% across various crop types.",
    icon: <TrendingUp size={36} />,
    color: "from-orange-300 to-white",
  },
  {
    id: 3,
    title: "Sustainable Farming",
    description:
      "Reduce environmental impact with resource-efficient farming practices.",
    icon: <Sprout size={36} />,
    color: "from-green-400 to-white",
  },
  {
    id: 4,
    title: "Time Savings",
    description:
      "Automated systems save 5-10 hours per week in manual irrigation management.",
    icon: <Timer size={36} />,
    color: "from-purple-400 to-white",
  },
  {
    id: 5,
    title: "Remote Monitoring",
    description:
      "Check field conditions from anywhere using smartphone or computer.",
    icon: <Smartphone size={36} />,
    color: "from-amber-300 to-white",
  },
  {
    id: 6,
    title: "Data-Driven Decisions",
    description:
      "Make informed choices based on historical and real-time data analytics.",
    icon: <LineChart size={36} />,
    color: "from-emerald-300 to-white",
  },
  {
    id: 7,
    title: "Cost Reduction",
    description:
      "Lower operational costs through efficient resource utilization and labor savings.",
    icon: <BarChart size={36} />,
    color: "from-red-400 to-white",
  },
  {
    id: 8,
    title: "Weather Integration",
    description:
      "Automatic adjustments based on weather forecasts prevent overwatering.",
    icon: <CloudSun size={36} />,
    color: "from-cyan-400 to-white",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Benefits = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="benefits" className="py-20 bg-gray-50 ">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-heading "
          >
            The <span className="text-primary ">Benefits</span> of Smart
            Irrigation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subheading"
          >
            Discover how Irrigo transforms farming operations through innovative
            technology and data-driven solutions.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefitsData.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`${benefit.color} bg-gradient-to-b px-4 py-6 flex justify-center items-center text-white`}
              >
                {benefit.icon}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
