"use client";

import { useEffect, useRef, useState } from "react";
import Masonry from "./react-bits/Masonry";

/**
 * Artwork Library section.
 * The gallery grid itself is the React Bits <Masonry /> component.
 * Replace/extend the `items` array below with your own artwork.
 */
const items = [
  { id: "1", img: "/artwork/art-1.png", url: "", height: 900 },
  { id: "2", img: "/artwork/art-2.png", url: "", height: 700 },
  { id: "3", img: "/artwork/art-3.png", url: "", height: 1000 },
  { id: "4", img: "/artwork/art-4.png", url: "", height: 650 },
  { id: "5", img: "/artwork/art-5.png", url: "", height: 850 },
  { id: "6", img: "/artwork/art-6.png", url: "", height: 780 },
  { id: "7", img: "/artwork/art-2.png", url: "", height: 900 },
  { id: "8", img: "/artwork/art-4.png", url: "", height: 720 },
  { id: "9", img: "/artwork/art-1.png", url: "", height: 620 },
  { id: "10", img: "/artwork/art-5.png", url: "", height: 980 },
  { id: "11", img: "/artwork/art-6.png", url: "", height: 700 },
  { id: "12", img: "/artwork/art-3.png", url: "", height: 840 },
];

// Rough total height of the masonry grid so its absolutely-positioned
// container reserves the right amount of space.
const GALLERY_MIN_HEIGHT = 2200;

export default function ArtworkGallery() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative z-10 w-full bg-black px-4 py-32 md:px-10 md:py-48"
      aria-label="Artwork Library"
    >
      <div className="mx-auto max-w-7xl">
        <header
          className="mb-16 text-center transition-all duration-700 ease-out md:mb-24"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">Collection</p>
          <h2 className="text-balance font-serif text-5xl font-bold tracking-tight text-white md:text-7xl">
            Artwork Library
          </h2>
        </header>

        {/* REACT BITS ARTWORK GALLERY GOES HERE */}
        <div style={{ minHeight: GALLERY_MIN_HEIGHT }}>
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.96}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </section>
  );
}
