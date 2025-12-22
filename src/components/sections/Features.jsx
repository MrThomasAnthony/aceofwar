// src/components/sections/Features.jsx
import React from "react";

const Features = () => {
  return (
    <div className="py-20 bg-zinc-900 border-y border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-4">
            Why We Are <span className="text-primary">The Best</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Don't settle for cheap plastic toys. We use military-grade
            simulation equipment used by law enforcement for training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Feature 1 */}
          <div className="p-6 border border-white/10 bg-black/40 rounded-xl hover:border-primary/50 transition-colors">
            <div className="text-5xl mb-4">🔫</div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">
              Tactical Feedback
            </h3>
            <p className="text-zinc-400 text-sm">
              Real recoil, muzzle flash, and hit confirmation sensors. It feels
              like the real thing.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 border border-primary/30 bg-primary/5 rounded-xl hover:shadow-[0_0_30px_rgba(153,0,0,0.3)] transition-all">
            <div className="text-5xl mb-4">🏟️</div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">
              Multi-Level Arena
            </h3>
            <p className="text-zinc-400 text-sm">
              5,000 sq ft of ramps, sniper towers, and fog-filled corridors.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 border border-white/10 bg-black/40 rounded-xl hover:border-primary/50 transition-colors">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">
              Live Scoring
            </h3>
            <p className="text-zinc-400 text-sm">
              Track your K/D ratio, accuracy, and rank on our lobby leaderboards
              in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
