'use client';

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/blurText";
import RotatingText from "../ui/RotatingText";

const slides = [
  {
    id: 1,
    image: "/assets/innovation-illustration.jpg",
    title: "Techno-Functional Expertise. Simplified. Scaled. Specialized.",
    subtitle:
      "Through our specialized Centers of Excellence, we deliver comprehensive techno-functional capabilities spanning the complete digital lifecycle.",
    cta: "Get Started",
    section: "offering",
  },
];

export default function HeroCarousel() {
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const heroRef = useRef(null);
  const controls = useAnimation();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [controls]);

  // Typing effect
  useEffect(() => {
    const subtitle = slides[0].subtitle;
    setTypedSubtitle("");
    let i = 0;

    const interval = setInterval(() => {
      setTypedSubtitle(subtitle.slice(0, i));
      i++;
      if (i > subtitle.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[84vh] h-auto overflow-hidden flex items-center"
    >
      {/* Floating Orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-80 right-20 w-[450px] h-[450px] bg-primary/25 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-40 w-[450px] h-[450px] bg-primary-light/80 rounded-full blur-3xl"
      />

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.90]">
  <img
    src={slides[0].image}
    alt="Hero Background"
    className="w-full h-full object-cover object-center"
  />
</div>

      {/* Content */}
      <div className="relative z-[5] container mx-auto px-6 lg:px-18 py-20 flex flex-col justify-center">
        <div className="max-w-4xl flex flex-col gap-4 md:gap-1 xl:gap-4">

          {/* Mini Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6 },
              },
            }}
            className="inline-flex max-w-fit items-center bg-white border mt-8 border-primary/20 px-6 py-1 rounded-full mb-6 backdrop-blur-md"
          >
            <span className="text-secondary-foreground font-semibold text-xs uppercase tracking-wider">
              Your ONE-stop technology resourcing partner
            </span>
          </motion.div>

          {/* Heading */}
          <BlurText
            text={slides[0].title}
            delay={450}
            animateBy="words"
            direction="top"
            className="text-xl md:text-5xl mt-8 font-black leading-[1.1] text-secondary"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 },
              },
            }}
            className="text-md lg:text-2xl text-white/95 max-w-4xl mb-10 leading-relaxed"
          >
            {typedSubtitle}
            {typedSubtitle.length < slides[0].subtitle.length && (
              <span className="animate-pulse">|</span>
            )}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.5 },
              },
            }}
          >
            <Button
              size="lg"
              className="text-lg bg-white !hover:text-primary border-brand border-2 px-4 lg:px-10 lg:py-7 rounded-2xl shadow-xl"
              onClick={() => scrollToSection("offering")}
            >
              <RotatingText
                texts={["Get started", "Know More"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-transparent text-black hover:text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3500}
              />
            </Button>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
