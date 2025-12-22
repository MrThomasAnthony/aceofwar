// src/components/sections/GameModes.jsx
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const GameModes = () => {
  const modes = [
    {
      title: "FREE FOR ALL",
      desc: "Everyone for themselves. The player with the most points at the end wins.",
      // Unsplash: Tactical Squad in Camo (Matches "Squad Warfare")
      img: "https://images.unsplash.com/photo-1696863681602-0e5a31742418?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "KING OF THE HILL",
      desc: "Hold the hill until you reach 700 points. Power-ups are hidden around the arena.",
      // Unsplash: Man in Skeleton Mask with Gun (Perfect for "Infection" Mode)
      img: "https://images.unsplash.com/photo-1689218669566-f49c58550134?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "TEAM DEATHMATCH",
      desc: "Teams compete for the most points. Unlimited respawns keep the action going.",
      // Unsplash: Night Laser Tag Action (Fits "Infiltrate" vibe)
      img: "https://images.unsplash.com/photo-1563050860-61266c23075c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "POINT RUSH",
      desc: "Start with 100 points, race to 200. +5 for a kill, –5 for a death.",
      // Unsplash: Tactical Squad in Camo (Matches "Squad Warfare")
      img: "https://images.unsplash.com/photo-1696863681602-0e5a31742418?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "CAPTURE THE FLAG",
      desc: "Steal the enemy’s flag and return it to your base. First team to 5 captures wins.",
      // Unsplash: Man in Skeleton Mask with Gun (Perfect for "Infection" Mode)
      img: "https://images.unsplash.com/photo-1689218669566-f49c58550134?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "ELIMINATION",
      desc: "Each player has 5 lives. Last one standing wins.",
      // Unsplash: Night Laser Tag Action (Fits "Infiltrate" vibe)
      img: "https://images.unsplash.com/photo-1563050860-61266c23075c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-black text-center text-white mb-12 uppercase italic">
        Select Your <span className="text-primary">Mission</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {modes.map((mode, index) => (
          <Card
            key={index}
            isFooterBlurred
            className="w-full h-[300px] col-span-1 bg-black/40 border-none"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-primary/80 uppercase font-bold tracking-widest">
                Mode 0{index + 1}
              </p>
              <h4 className="text-white font-black text-2xl uppercase italic">
                {mode.title}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt={mode.title}
              className="z-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src={mode.img}
            />
            <CardFooter className="absolute bg-black/60 bottom-0 border-t-1 border-zinc-100/10 z-10 justify-between">
              <div>
                <p className="text-tiny text-white/80">{mode.desc}</p>
              </div>
              <Button
                className="text-tiny font-bold bg-primary/20 text-primary"
                radius="full"
                size="sm"
              >
                PLAY
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GameModes;
