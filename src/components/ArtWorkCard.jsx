import { motion } from "framer-motion";
 import React from "react";


const ArtworkCard = ({ artwork, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(artwork)}
      className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
    >
      <img
        src={artwork.image}
        alt={artwork.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 bg-gray-200 dark:bg-gray-600 dark:text-white">
        <h3 className="text-xl font-semibold">{artwork.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{artwork.artist}</p>
      </div>
    </motion.div>
  );
};

export default ArtworkCard;
