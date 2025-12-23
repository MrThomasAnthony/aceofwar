import React from "react";
import { Card, CardBody, Image, Button, Chip } from "@nextui-org/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full">
      {/* 1. HERO: The Origin Story */}
      <div className="relative py-20 md:py-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Chip
            color="primary"
            variant="dot"
            className="mb-6 uppercase tracking-widest border-white/20 text-white"
          >
            Est. Jan 2023
          </Chip>
          <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-8">
            Video Games <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">
              In Real Life
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            Ace of War wasn't built to be just another arcade. It was built to
            answer one question:
            <span className="text-white font-medium italic">
              {" "}
              "What if Call of Duty was real?"
            </span>
          </p>
        </div>
      </div>

      {/* 2. THE STATS (Grid Layout) */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stat Card 1 */}
          <Card className="bg-zinc-900/50 border border-white/10 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-5xl md:text-6xl font-black text-white mb-2">
              6,500
            </span>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Square Feet
            </span>
            <p className="text-zinc-500 text-xs mt-2">
              The largest activity space in Grande Prairie.
            </p>
          </Card>

          {/* Stat Card 2 */}
          <Card className="bg-zinc-900/50 border border-white/10 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-5xl md:text-6xl font-black text-white mb-2">
              50+
            </span>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Weapons
            </span>
            <p className="text-zinc-500 text-xs mt-2">
              Realistic recoil, muzzle flash, and live reloading.
            </p>
          </Card>

          {/* Stat Card 3 */}
          <Card className="bg-zinc-900/50 border border-white/10 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-5xl md:text-6xl font-black text-white mb-2">
              10k
            </span>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Players
            </span>
            <p className="text-zinc-500 text-xs mt-2">
              Joined the ranks since opening day.
            </p>
          </Card>
        </div>
      </div>

      {/* 3. THE MISSION (Image + Text) */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Cluster */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-xl"></div>
            <Image
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
              alt="Tactical Gameplay"
              className="z-10 border-2 border-white/10 rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
            />
          </div>

          {/* Right: The Story */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-white uppercase italic">
              Built for the <span className="text-primary">Community</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>

            <p className="text-zinc-400 text-lg">
              Founded by local entrepreneur <strong>Jonathan Chabot</strong>,
              Ace of War was meticulously planned over two years and built in
              just two months.
            </p>
            <p className="text-zinc-400 text-lg">
              We didn't want plastic toys and boring arenas. We wanted{" "}
              <strong>progression</strong>. At Ace of War, you create a profile,
              level up, unlock new gear, and track your global stats just like
              in your favorite video games.
            </p>

            <div className="pt-4">
              <h3 className="text-white font-bold uppercase mb-2">
                Our Armory Includes:
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-zinc-500 text-sm font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-primary">/</span> Battle Rifles
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">/</span> Sniper Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">/</span> SMGs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">/</span> Utility Grenades
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 4. FOUNDER QUOTE */}
      <div className="bg-zinc-900 border-y border-white/10 py-20 mb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-6xl text-primary font-serif">“</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white italic mb-6">
            It spices up laser tag and gives a new experience for a new
            generation. It's comfort food, but with a kick.
          </h3>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-zinc-800 rounded-full mb-2 border border-white/20"></div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Jonathan Chabot
            </span>
            <span className="text-zinc-600 text-xs">Founder, Ace of War</span>
          </div>
        </div>
      </div>

      {/* 5. CTA */}
      <div className="text-center mb-32">
        <h2 className="text-4xl font-white font-black uppercase mb-8">
          Ready to <span className="text-primary">Deploy?</span>
        </h2>
        <Button
          as={Link}
          to="/book"
          size="lg"
          color="primary"
          variant="shadow"
          className="font-bold text-lg px-12 py-8"
        >
          BOOK YOUR SESSION
        </Button>
      </div>
    </div>
  );
};

export default About;
