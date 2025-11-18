'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/blurText";
import RotatingText from "../ui/RotatingText";

const slides = [
  {
    id: 1,
    image: "/assets/innovation-illustration.jpg",
    title: "Technology Resourcing. Simplified. Scaled. Specialized.",
    subtitle:
      "We bring together specialized Centers of Excellence to deliver end-to-end technology resourcing across the full digital lifecycle.",
    cta: "Get Started",
    section: "offering",
  },
];

export default function HeroCarousel() {
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const heroRef = useRef(null);
  const controls = useAnimation(); // controls for Framer Motion animations

  // Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 } // trigger when 30% of hero is visible
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [controls]);

  // Typing effect for subtitle
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
    <section ref={heroRef} id="hero" className="relative h-[100vh] overflow-hidden">
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

      {/* Slide Content */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.90]" style={{ backgroundImage: `url(${slides[0].image})` }} />

      <div className="relative z-[5] container mx-auto px-6 lg:px-18 h-full flex items-center">
        <div className="max-w-5xl">
          {/* Mini Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={controls}
            variants={{ visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}
            className="inline-flex items-center bg-primary/10 border border-primary/20 px-6 py-2 rounded-full mb-10 backdrop-blur-md"
          >
            <span className="text-secondary-foreground font-semibold text-sm uppercase tracking-wider">
              Your ONE-stop technology resourcing partner
            </span>
          </motion.div>

          {/* Heading */}
          <BlurText
            text={slides[0].title}
            delay={450}
            animateBy="words"
            direction="top"
            className="text-5xl sm:text-5xl lg:text-7xl font-black leading-[1.1] text-secondary mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } } }}
            className="text-2xl text-white/95 max-w-3xl mb-10"
          >
            {typedSubtitle}
            {typedSubtitle.length < slides[0].subtitle.length && <span className="animate-pulse">|</span>}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } } }}
          >
            <Button
              size="lg"
              className="text-lg px-10 py-7 rounded-2xl text-white shadow-xl"
              onClick={() => scrollToSection("offering")}
            >
              <RotatingText
                texts={["Get started  ", "Know More "]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-transparent text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
