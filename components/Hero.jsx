"use client";

import { useEffect, useRef, useState } from "react";
import Ferrofluid from "./react-bits/Ferrofluid";

/**
 * Full-screen hero landing section.
 * - Ferrofluid (React Bits) is the animated background.
 * - The "Hayems Library" title fades/floats in on load.
 * - The whole hero gently fades upward as the user scrolls.
 */
export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fade + drift the hero content upward on scroll (premium parallax feel).
  const fade = Math.max(0, 1 - scrollY / 500);
  const lift = Math.min(scrollY * 0.4, 200);

  return (
    <section
      ref={heroRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      aria-label="Hayems Library hero"
    >
      {/* REACT BITS BACKGROUND COMPONENT GOES HERE */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Ferrofluid
          colors={["#ffffff", "#d8d8d8", "#9a9a9a"]}
          speed={0.4}
          scale={1.5}
          glow={2}
          flowDirection="down"
          mouseInteraction
        />
      </div>

      {/* Subtle vignette so text stays readable over the background */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* Hero content */}
      <div
        className="relative z-10 flex flex-col items-center px-6 text-center will-change-transform"
        style={{
          opacity: (loaded ? 1 : 0) * fade,
          transform: `translateY(${(loaded ? 0 : 24) - lift}px)`,
          transition: "opacity 900ms ease, transform 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <h1 className="hero-title text-balance font-serif font-bold leading-[0.95] tracking-tight text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          Hayems Library
        </h1>
        <p className="mt-6 max-w-md text-pretty text-sm font-light leading-relaxed tracking-wide text-white/60 md:text-base">
          A curated collection of digital art.
        </p>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{ opacity: fade * 0.7, transition: "opacity 300ms ease" }}
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </span>
      </div>
    </section>
  );
}
