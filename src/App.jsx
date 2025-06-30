import { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/gallery";
import Navbar from "./components/Navbar";
 import React from "react";


function App() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.muted) {
        audio.muted = false;
        audio
          .play()
          .catch((err) =>
            console.warn("Autoplay was blocked. User interaction needed.", err)
          );
      } else {
        audio.muted = true;
      }
      setIsMuted(audio.muted);
    }
  };
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
        <audio
          ref={audioRef}
          autoPlay
          loop
          muted={true} // always start muted
          src="/music/Tranquility.mp3"
        />
        <Navbar toggleMute={toggleMute} isMuted={isMuted} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
