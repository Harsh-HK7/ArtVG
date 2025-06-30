import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import ArtVG from "../assets/ArtVG.png";
import React from "react";

const Navbar = ({ toggleMute, isMuted }) => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold tracking-wider">
        <img src={ArtVG} alt="ArtVG" className="w-14 h-10 select-none"/>
      </Link>
      <div className="space-x-4 flex items-center">
        <Link
          to="/"
          className={`hover:underline ${
            pathname === "/" ? "underline text-yellow-400" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/gallery"
          className={`hover:underline ${
            pathname === "/gallery" ? "underline text-yellow-400" : ""
          }`}
        >
          Gallery
        </Link>
        <button
          onClick={toggleMute}
          className="px-2 py-1 bg-gray-700 rounded text-white hover:bg-gray-600 transition"
        >
          {isMuted ? "🔇 Unmute" : "🔊 Mute"}
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
