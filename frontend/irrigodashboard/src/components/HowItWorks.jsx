import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HowItWorks = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const steps = [
    {
      id: 1,
      title: "Deploy Sensors",
      description:
        "Place our smart sensors throughout your fields to monitor soil moisture, temperature, and environmental conditions.",
      image:
        "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Collect & Analyze Data",
      description:
        "Our system collects real-time data from sensors and analyzes it using advanced AI algorithms to determine irrigation needs.",
      image:
        "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Smart Irrigation Control",
      description:
        "Based on AI predictions and weather forecasts, the system automatically adjusts irrigation schedules for optimal water usage.",
      image:
        "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Monitor & Optimize",
      description:
        "Track performance through the dashboard and refine settings as needed. The system continuously learns and improves over time.",
      image:
        "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            How <span className="text-primary">Irrigo</span> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subheading"
          >
            Our simple yet powerful system brings smart irrigation to your farm
            in four easy steps.
          </motion.p>
        </div>

        <div ref={ref} className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-16`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-xl transform -rotate-3"></div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative rounded-lg w-full h-64 md:h-80 object-cover shadow-lg"
                  />
                  <div className="absolute -top-5 -left-5 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {step.id}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
