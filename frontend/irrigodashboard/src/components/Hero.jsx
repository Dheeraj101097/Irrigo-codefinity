import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2508607/pexels-photo-2508607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto md:mx-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Smart Irrigation for the Future of Farming
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-100">
            AI-powered irrigation monitoring and control system built for modern
            farmers. Save water, increase yields, and farm smarter with
            real-time data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Explore Features
            </motion.a>

            <motion.a
              href="#dashboard"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
            >
              View Dashboard
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <a href="#features" className="text-white flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>

      {/* Floating Elements Animation */}
      <div className="hidden lg:block">
        <motion.div
          className="absolute top-1/3 right-20 w-32 h-32 bg-white/10 rounded-full"
          animate={{
            y: [0, 30, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-20 w-20 h-20 bg-white/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
