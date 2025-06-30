import { useState } from "react";
import { artworks } from "../data/artworks";
import ArtworkCard from "../components/ArtWorkCard";
import ArtworkModel from "../components/ArtWorkModel";
 import React from "react";

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <div className="p-6 dark:bg-slate-800 dark:text-gray-200">
      <h2 className="text-3xl font-semibold text-center mb-10">Gallery</h2>
      <div className=" w-full justify-evenly grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {artworks.map((art) => (
          <ArtworkCard key={art.id} artwork={art} onClick={setSelectedArtwork} />
        ))}
      </div>

      {/* Modal */}
      {selectedArtwork && (
        <ArtworkModel
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
