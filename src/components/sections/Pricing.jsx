// src/components/sections/Pricing.jsx
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Chip,
} from "@nextui-org/react";

const Pricing = () => {
  return (
    <div className="py-24 px-4" id="pricing">
      <h2 className="text-4xl font-black text-center text-white mb-16 uppercase italic">
        Deployment <span className="text-primary">Packages</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {/* Basic Tier */}
        <Card className="bg-black border border-white/10 p-4 hover:border-white/30 transition-all">
          <CardHeader className="flex-col items-start pb-0">
            <h4 className="font-bold text-2xl text-white uppercase">
              Individual Play
            </h4>
            <p className="text-zinc-500 text-sm">For quick skirmishes</p>
          </CardHeader>
          <CardBody className="py-8">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-white">$12-20</span>
              <span className="text-zinc-500 ml-2">/ player</span>
            </div>
            <ul className="mt-6 space-y-3 text-zinc-400 text-sm list-disc pl-4">
              <li>Perfect for walk-ins</li>
              <li>Test your skills against other players</li>
              <li>No minimum group required</li>
            </ul>
          </CardBody>
          <CardFooter>
            <Button
              className="w-full bg-zinc-800 text-white font-bold"
              variant="flat"
            >
              BOOK NOW
            </Button>
          </CardFooter>
        </Card>

        {/* PRO Tier (Highlighted) */}
        <Card className="bg-black border-2 border-primary shadow-[0_0_40px_rgba(153,0,0,0.2)] p-6 scale-105 relative z-10">
          <div className="absolute top-0 right-0 p-4">
            <Chip
              color="primary"
              variant="shadow"
              className="uppercase font-bold"
            >
              Best Value
            </Chip>
          </div>
          <CardHeader className="flex-col items-start pb-0">
            <h4 className="font-bold text-3xl text-primary uppercase italic">
              Private Sessions
            </h4>
            <p className="text-zinc-400 text-sm"></p>
          </CardHeader>
          <CardBody className="py-8">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-white">$350</span>
              <span className="text-zinc-500 ml-2">/ group</span>
            </div>
            <ul className="mt-6 space-y-4 text-zinc-300 font-medium list-disc pl-4">
              <li>Up to 20 players</li>
              <li>Play together or compete head-to-head as teams</li>
              <li>Ideal for school trips, team-building, or hangouts</li>
            </ul>
          </CardBody>
          <CardFooter>
            <Button
              className="w-full bg-primary text-white font-bold shadow-lg shadow-primary/40"
              size="lg"
            >
              BOOK NOW
            </Button>
          </CardFooter>
        </Card>

        {/* Group Tier */}
        <Card className="bg-black border border-white/10 p-4 hover:border-white/30 transition-all">
          <CardHeader className="flex-col items-start pb-0">
            <h4 className="font-bold text-2xl text-white uppercase">Squad</h4>
            <p className="text-zinc-500 text-sm">Birthday & Parties</p>
          </CardHeader>
          <CardBody className="py-8">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-white">$450</span>
              <span className="text-zinc-500 ml-2">/ group</span>
            </div>
            <ul className="mt-6 space-y-3 text-zinc-400 text-sm list-disc pl-4">
              <li>Includes multiple games plus reserved party space</li>
              <li>Food & drink options available</li>
              <li>Perfect for birthdays, celebrations, or special events</li>
            </ul>
          </CardBody>
          <CardFooter>
            <Button
              className="w-full bg-zinc-800 text-white font-bold"
              variant="flat"
            >
              INQUIRE
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
