// components/ImageScreen.jsx
import React from "react";
import { motion } from "framer-motion";

const ImageScreen = ({ title, imageSrc, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl max-sm:text-xl font-bold text-white">{title}</h1>
      <img
        src={imageSrc}
        alt={title}
        className="w-[400px] h-[600px] max-w-lg mt-4 rounded-lg shadow-lg"
      />
      <h2 className="text-lg text-white w-[450px] max-sm:w-full mt-3">
        {description}
      </h2>
    </motion.div>
  );
};

export default ImageScreen;
