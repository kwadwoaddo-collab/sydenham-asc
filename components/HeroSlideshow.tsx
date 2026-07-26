"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/photos/brand-banner.jpg", alt: "Sydenham After School Club shopfront signage on Sydenham Road" },
  { src: "/photos/slideshow/slide-tutor-child.jpg", alt: "Tutor helping a child with their work" },
  { src: "/photos/slideshow/slide-classroom-writing.jpg", alt: "Child writing during a tuition session" },
  { src: "/photos/slideshow/slide-homework-laptop.jpg", alt: "Child completing homework" },
  { src: "/photos/slideshow/slide-group-study.jpg", alt: "Students studying together" }
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slideshow">
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === active ? "active" : ""}`}>
          <img src={slide.src} alt={slide.alt} />
        </div>
      ))}
      <div className="slide-dots" role="tablist" aria-label="Photo slideshow">
        {slides.map((_, i) => (
          <button key={i} className={i === active ? "active" : ""} aria-label={`Slide ${i + 1}`} onClick={() => setActive(i)}></button>
        ))}
      </div>
    </div>
  );
}
