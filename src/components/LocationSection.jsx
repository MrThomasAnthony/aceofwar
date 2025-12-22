import React from "react";
import { Button, Link } from "@nextui-org/react";

const LocationSection = () => {
  return (
    <section className="w-full relative z-10 border-t border-white/10 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto    ">
        {/* LEFT: The Map (Tactical View) */}
        <div className="relative w-full h-full min-h-[300px] border-r border-white/10 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
          {/* Using a standard Google Maps Embed with your business address.
              The 'invert' filter makes the map look dark/tactical by default.
            */}
          <iframe
            title="Base Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Ace%20of%20War%2010112%20102%20ave%20Grande%20Prairie&t=&z=15&ie=UTF8&iwloc=B&output=embed"
          ></iframe>

          {/* Overlay Grid Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute top-4 right-4 bg-black/80 border border-primary/50 p-2 text-xs text-primary font-mono tracking-widest">
            SECTOR: GRANDE PRAIRIE // T8V 0Z9
          </div>
        </div>

        {/* RIGHT: The Info Panel */}
        <div className="flex flex-col justify-center p-10 bg-zinc-950 relative overflow-hidden">
          {/* Decorative Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

          <h3 className="text-3xl font-black uppercase italic text-white mb-2">
            Base <span className="text-primary">Coordinates</span>
          </h3>
          <div className="w-20 h-1 bg-primary mb-6"></div>

          <div className="space-y-6 text-zinc-400">
            <div>
              <p className="text-xs font-bold text-zinc-500 mb-1 uppercase tracking-widest">
                Address
              </p>
              <p className="text-xl text-white font-bold">10112 102 Ave</p>
              <p>Grande Prairie, AB, Canada</p>
            </div>

            <div>
              <p className="text-xs font-bold text-zinc-500 mb-1 uppercase tracking-widest">
                Hours
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between w-40">
                  <span>Mon:</span>{" "}
                  <span className="text-zinc-600">CLOSED</span>
                </li>
                <li className="flex justify-between w-40">
                  <span>Tue - Thu:</span>{" "}
                  <span className="text-white">4PM - 9PM</span>
                </li>
                <li className="flex justify-between w-40">
                  <span>Fri:</span>{" "}
                  <span className="text-white">4PM - 11PM</span>
                </li>
                <li className="flex justify-between w-40">
                  <span>Sat:</span>{" "}
                  <span className="text-white">11AM - 11PM</span>
                </li>
                <li className="flex justify-between w-40">
                  <span>Sun:</span>{" "}
                  <span className="text-white">11AM - 9PM</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Button
                as={Link}
                href="https://www.google.com/maps/dir//Ace+of+war+10112+102+Ave+Grande+Prairie,+AB+T8V+0Z9"
                target="_blank"
                color="primary"
                variant="flat"
                className="font-bold w-full md:w-auto"
                radius="none"
              >
                GET DIRECTIONS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
