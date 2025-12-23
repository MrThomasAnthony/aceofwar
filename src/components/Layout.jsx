import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import LocationSection from "./LocationSection"; // Make sure path is correct

const Layout = ({ children }) => {
  // 1. State to control the menu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // 2. Define menu items in one place for both Mobile and Desktop
  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" }, // Assuming you have an About page
    { label: "PRICING", path: "/pricing" }, // Changed from /party-packages to match previous context
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-black/80 backdrop-blur-md border-b border-white/10"
        maxWidth="xl"
        shouldHideOnScroll
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          {/* Your Logo SVG */}
          <svg
            height="36"
            viewBox="0 0 32 32"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#990000" strokeWidth="4" fill="none">
              <circle cx="16" cy="16" r="14" />
              <path d="M16 0v32M0 16h32" />
            </g>
            <g stroke="white" strokeWidth="2" fill="none">
              <circle cx="16" cy="16" r="5" />
              <path d="M16 9v14M9 16h14" />
            </g>
          </svg>
          <p className="font-bold text-inherit tracking-widest text-primary text-xl ml-2">
            ACE OF WAR
          </p>
        </NavbarBrand>

        {/* DESKTOP MENU (Mapped from array) */}
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.label}>
              <Link
                as={RouterLink}
                to={item.path}
                color="foreground"
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* BOOK NOW BUTTON */}
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={RouterLink} // Use RouterLink for internal navigation
              to="/book" // Use 'to' instead of 'href'
              color="primary"
              variant="shadow"
              className="font-bold"
            >
              BOOK NOW
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* MOBILE MENU */}
        <NavbarMenu className="bg-black/90 pt-10">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                as={RouterLink}
                to={item.path}
                className="w-full text-2xl font-bold py-2 text-default"
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* MAIN CONTENT */}
      <main className="flex-grow container mx-auto px-6 py-10 max-w-7xl">
        {children}
      </main>

      {/* MAP SECTION */}
      <LocationSection />

      {/* FOOTER */}
      <footer className="w-full py-6 text-center text-zinc-500 border-t border-white/10 text-sm bg-zinc-950">
        <p>© 2025 Ace of War Laser Tag. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
