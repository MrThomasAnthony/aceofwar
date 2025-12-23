import React from "react";
import { Button, Link } from "@nextui-org/react";

const LocationSection = () => {
  return (
    <section className="w-full relative z-10 border-t border-white/10 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
        {/* LEFT: The Map (Tactical View) */}
        <div className="relative w-full h-full min-h-[400px] border-r border-white/10 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
          <iframe
            title="Base Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            // Ensure this src is correct for your Google Maps Embed
            src="https://maps.google.com/maps?q=10112+102+Ave,+Grande+Prairie,+AB&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>

          {/* Overlay Grid Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute top-4 right-4 bg-black/80 border border-primary/50 p-2 text-xs text-primary font-mono tracking-widest z-10">
            SECTOR: GRANDE PRAIRIE // T8V 0Z9
          </div>
        </div>

        {/* RIGHT: The Info Panel */}
        <div className="flex flex-col justify-center p-8 md:p-12 bg-zinc-950 relative overflow-hidden">
          {/* Decorative Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[75px] rounded-full pointer-events-none"></div>

          <h3 className="text-3xl font-black uppercase italic text-white mb-2">
            Base <span className="text-primary">Coordinates</span>
          </h3>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <div className="space-y-8 text-zinc-400">
            {/* ROW 1: Address & Contact */}
            <div className="grid grid-cols-1  gap-6">
              <div>
                <p className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest flex items-center gap-2">
                  Location
                </p>
                <p className="text-white font-bold text-lg leading-tight">
                  10112 102 Ave
                </p>
                <p className="text-zinc-400">Grande Prairie, AB</p>
              </div>

              <Button
                as={Link}
                href="https://maps.google.com/maps?q=10112+102+Ave,+Grande+Prairie,+AB"
                target="_blank"
                color="primary"
                variant="flat"
                className="font-bold w-[250px] sm:w-[250px]"
                radius="none"
              >
                GET DIRECTIONS
              </Button>

              <div>
                <p className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest flex items-center gap-2">
                  Comms
                </p>
                <p className="text-white font-bold text-lg hover:text-primary transition-colors cursor-pointer">
                  (780) 533-2470
                </p>
                <p className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                  aceofwarltd@gmail.com
                </p>
              </div>
            </div>

            {/* ROW 2: Hours */}
            <div>
              <p className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">
                Operating Hours
              </p>
              <ul className="space-y-1 text-sm border-l-2 border-zinc-800 pl-4">
                <li className="flex justify-between w-full max-w-[200px]">
                  <span>Mon:</span>{" "}
                  <span className="text-zinc-600 font-bold">CLOSED</span>
                </li>
                <li className="flex justify-between w-full max-w-[200px]">
                  <span>Tue - Thu:</span>{" "}
                  <span className="text-white">4PM - 9PM</span>
                </li>
                <li className="flex justify-between w-full max-w-[200px]">
                  <span>Fri:</span>{" "}
                  <span className="text-white">4PM - 11PM</span>
                </li>
                <li className="flex justify-between w-full max-w-[200px]">
                  <span>Sat:</span>{" "}
                  <span className="text-white">11AM - 11PM</span>
                </li>
                <li className="flex justify-between w-full max-w-[200px]">
                  <span>Sun:</span>{" "}
                  <span className="text-white">11AM - 9PM</span>
                </li>
              </ul>
            </div>

            {/* ROW 3: Social Media & Button */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 pt-4 border-t border-white/5">
              {/* Social Icons */}
              <div className="flex gap-4">
                {/* Facebook Icon */}
                <Link
                  href="https://www.facebook.com/p/Ace-Of-War-100087511102173/"
                  className="text-zinc-400 hover:text-[#1877F2] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {/* Instagram Icon */}
                <Link
                  href="https://www.instagram.com/aow.official/"
                  className="text-zinc-400 hover:text-[#E4405F] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.93c.635-.246 1.362-.415 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
