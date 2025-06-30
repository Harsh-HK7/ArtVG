const ArtworkModal = ({ artwork, onClose }) => {
  if (!artwork) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full shadow-xl relative">
        <button
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{artwork.title}</h2>
          <p className="text-gray-700 mb-1"><strong>Artist:</strong> {artwork.artist}</p>
          <p className="text-gray-600">{artwork.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;
