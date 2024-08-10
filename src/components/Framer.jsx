import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-700 to-green-500 overflow-hidden py-6 mt-12">
      <div className="absolute inset-0 bg-opacity-30 bg-white backdrop-blur-md"></div>
      <motion.div
        className="flex whitespace-nowrap relative z-10"
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center mx-8 space-x-6">
            <span className="text-white text-2xl md:text-3xl font-bold">Nimyle</span>
            <span className="text-yellow-200 text-xl md:text-2xl font-semibold">100% Biodegradable</span>
            <span className="text-white text-2xl md:text-3xl font-bold">&</span>
            <span className="text-yellow-200 text-xl md:text-2xl font-semibold">100% Natural</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedBanner;
