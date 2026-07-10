"use client";

import StaggeredMenu from "@/components/react-bits/StaggeredMenu";
import Hero from "@/components/Hero";
import ArtworkGallery from "@/components/ArtworkGallery";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home", link: "#top" },
  { label: "Gallery", ariaLabel: "View the artwork library", link: "#gallery" },
  { label: "About", ariaLabel: "Learn about Hayems Library", link: "#about" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

const socialItems = [
  { label: "Instagram", link: "https://instagram.com" },
  { label: "Twitter", link: "https://twitter.com" },
  { label: "Behance", link: "https://behance.net" },
];

export default function Page() {
  return (
    <main id="top" className="relative min-h-screen w-full bg-black text-white">
      {/* REACT BITS SIDEBAR COMPONENT GOES HERE
          StaggeredMenu provides the fixed glass navigation header
          (logo on the left, hamburger on the right) AND the slide-in menu panel. */}
      <StaggeredMenu
        isFixed
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        logoUrl="/logo.svg"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen
        colors={["#1e1e22", "#35353c"]}
        accentColor="#000000"
      />

      <Hero />
      <ArtworkGallery />
    </main>
  );
}
