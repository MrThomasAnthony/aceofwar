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
            This isn't just laser tag, it's tactical combat. Our system is built
            for mission-based scenarios with real-time feedback. Here's the
            loadout:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Feature 1 */}
          <div className="p-6 border border-white/10 bg-black/40 rounded-xl hover:border-primary/50 transition-colors">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">
              HIGH-TECH TAGGERS:
            </h3>
            <p className="text-zinc-400 text-sm">
              Our equipment fires precise infrared beams. No vests, no
              projectiles—just pinpoint accuracy with haptic feedback.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 border border-white/10 bg-black/40 rounded-xl hover:border-primary/50 transition-colors">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">
              SMART SENSORS:
            </h3>
            <p className="text-zinc-400 text-sm">
              Sensors on the tagger and your head register every hit. Your gear
              lights up, vibrates, and alerts you when you're eliminated.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 border border-white/10 bg-black/40 rounded-xl hover:border-primary/50 transition-colors">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">
              REAL-TIME STATS:
            </h3>
            <p className="text-zinc-400 text-sm">
              Your performance is tracked live. See your score, accuracy, and
              team ranking on the arena leaderboards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
