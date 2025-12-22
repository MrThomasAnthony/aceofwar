import { Button } from "@nextui-org/react";
import droneVideo from "../assets/droneview.mp4";
import GameModes from "../components/sections/GameModes";
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing";
import Reviews from "../components/sections/Reviews";

const Home = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden mb-20">
        {/* 1. BACKGROUND VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={droneVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 2. DARK OVERLAY (Crucial for text readability) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>

        {/* 3. CONTENT (Z-Index must be higher than video) */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase mb-4 text-white drop-shadow-2xl">
            Dominate the{" "}
            <span className="text-primary animate-pulse">Arena</span>
          </h1>
          <p className="text-zinc-200 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            Experience the most advanced tactical laser tag in the city.
            Multi-level arenas, realistic weaponry, and intense game modes.
          </p>

          <Button
            color="primary"
            variant="shadow"
            className="mt-8 px-8 py-4 font-bold text-lg"
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* 2. GAME MODES (The Fun) */}
      <GameModes />

      {/* 3. VALUE BUILDER (The Quality) */}
      <Features />

      <Reviews />

      {/* 4. PRICING (The Close) */}
      <Pricing />
    </div>
  );
};

export default Home;
