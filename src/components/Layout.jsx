import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import LocationSection from "./LocationSection";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. NAVIGATION */}
      <Navbar
        className="bg-black/80 backdrop-blur-md border-b border-white/10"
        maxWidth="xl"
      >
        <NavbarBrand>
          <svg
            height="36"
            viewBox="0 0 32 32"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#990000" stroke-width="4" fill="none">
              <circle cx="16" cy="16" r="14" />
              <path d="M16 0v32M0 16h32" />
            </g>
            <g stroke="white" stroke-width="2" fill="none">
              <circle cx="16" cy="16" r="5" />
              <path d="M16 9v14M9 16h14" />
            </g>
          </svg>
          <p className="font-bold text-inherit tracking-widest text-primary text-xl">
            ACE OF WAR
          </p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="hover:text-primary transition-colors"
            >
              HOME
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="hover:text-primary transition-colors"
            >
              ARENA
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="hover:text-primary transition-colors"
            >
              PRICING
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="shadow"
              className="font-bold"
            >
              BOOK NOW
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* 2. MAIN CONTENT (Pages go here) */}
      <main className="flex-grow container mx-auto px-6 py-10 max-w-7xl">
        {children}
      </main>

      {/* Map  */}

      <LocationSection />

      {/* 3. FOOTER */}
      <footer className="w-full py-6 text-center text-zinc-500 border-t border-white/10 text-sm">
        <p>© 2025 Ace of War Laser Tag. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
