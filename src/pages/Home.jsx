import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import React from "react";

const featuredArtworks = [
  {
    id: 1,
    title: "Dreamscape",
    artist: "Alex Turner",
    image: "/artworks/art1.jpg",
    description: "A surreal journey through an abstract dream world.",
  },
  {
    id: 2,
    title: "Golden Horizon",
    artist: "Maya Lin",
    image: "/artworks/art2.jpg",
    description: "A warm sunset casting golden hues over calm waters.",
  },
  {
    id: 3,
    title: "Urban Pulse",
    artist: "Daniel Ray",
    image: "/artworks/art3.jpg",
    description: "The energy of a city captured in vivid color and form.",
  },
  {
    id: 4,
    title: "Whispers of the Forgotten Sky",
    artist: "Elara Venn",
    image: "/artworks/art4.jpg",
    description:
      "A surreal blend of stardust and mist, capturing the silence that follows a dream lost to time.",
  },
  {
    id: 5,
    title: "Fragments of Tomorrow",
    artist: "Kael Dross",
    image: "/artworks/art5.jpg",
    description:
      "A shattered glass collage that reflects distorted visions of a future no one expected.",
  },
  {
    id: 6,
    title: "Velvet Dusk",
    artist: "Mira Solen",
    image: "/artworks/art6.jpg",
    description:
      "A soft-hued landscape where twilight bleeds into ocean waves, blurring day and night.",
  },
  {
    id: 7,
    title: "Mechanical Soul",
    artist: "Daniel Ray",
    image: "/artworks/art7.jpg",
    description:
      "A steampunk-inspired portrait of an android contemplating its own humanity.",
  },
  {
    id: 8,
    title: "Echoes in the Tides",
    artist: "Elara Venn",
    image: "/artworks/art8.jpg",
    description:
      "Soft brushstrokes capture the soundless repetition of ocean waves and ancient memories.",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 p-6 dark:bg-slate-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to the Virtual Art Gallery
      </h1>

      <section className="w-full overflow-hidden mt-12">
        <h2 className="text-white text-2xl font-semibold mb-4 text-center">
          Featured Artworks
        </h2>

        {/* Group wraps the scrollable area */}
        <div className="relative w-full overflow-hidden">
            <Marquee
              pauseOnHover={true}
              gradient={false}
              speed={80}
              direction="right" // or "left"
            >
              {[...featuredArtworks, ...featuredArtworks].map((art, index) => (
                <div
                  key={index}
                  className="min-w-[16rem] bg-gray-800 rounded-xl shadow-md mx-2"
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-40 object-cover rounded-t-xl blur-sm hover:blur-none"
                  />
                  <div className="p-3 text-white">
                    <h3 className="font-bold text-lg">{art.title}</h3>
                    <p className="text-sm text-gray-300">{art.artist}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
      </section>

      <p className="text-lg mb-8 max-w-xl">
        Explore a curated collection of modern artworks from talented artists
        around the world. Dive into a rich visual experience and enjoy the
        beauty of creativity.
      </p>
      <Link
        to="/gallery"
        className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition"
      >
        Enter Gallery
      </Link>
    </div>
  );
};

export default Home;
