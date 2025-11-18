"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Info,
  Users,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/blurText";

const slides = [
  {
    id: 1,
    image: "/assets/engineering-illustration.jpg",
    title: "Technology Resourcing. Simplified. Scaled. Specialized.",
    subtitle:
      "We bring together specialized Centers of Excellence to deliver end-to-end technology resourcing across the full digital lifecycle.",
    cta: "Get Started",
    section: "offering",
    variant: "gradient",
    icon: <ArrowRight />,
  },
  {
    id: 2,
    image: "/assets/hero-main.jpg",
    title: "Technology Resourcing. Simplified. Scaled. Specialized.",
    subtitle:
      "We bring together specialized Centers of Excellence to deliver end-to-end technology resourcing across the full digital lifecycle.",
    cta: "Learn More",
    section: "offering",
    variant: "ghost",
    icon: <Users />,
  },
  {
    id: 3,
    image: "/assets/innovation-illustration.jpg",
    title: "Technology Resourcing. Simplified. Scaled. Specialized.",
    subtitle:
      "We bring together specialized Centers of Excellence to deliver end-to-end technology resourcing across the full digital lifecycle.",
    cta: "Explore Services",
    section: "offering",
    variant: "neon",
    icon: <Info />,
  },
  {
    id: 4,
    image: "/assets/security-illustration.jpg",
    title: "Technology Resourcing. Simplified. Scaled. Specialized.",
    subtitle:
      "We bring together specialized Centers of Excellence to deliver end-to-end technology resourcing across the full digital lifecycle.",
    cta: "Contact Us",
    section: "contact",
    variant: "pill",
    icon: <Mail />,
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function HeroCarousel() {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [typedSubtitle, setTypedSubtitle] = useState("");

  const paginate = (dir) => {
    setCurrentSlide(([prev]) => {
      const next = (prev + dir + slides.length) % slides.length;
      return [next, dir];
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Typing subtitle
  useEffect(() => {
    const subtitle = slides[currentSlide].subtitle;
    setTypedSubtitle("");
    let i = 0;
    const interval = setInterval(() => {
      setTypedSubtitle(subtitle.slice(0, i));
      i++;
      if (i > subtitle.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[100vh] overflow-hidden ">
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

      {/* SLIDES */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.35, 0.45, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.75]"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />

          <div className="relative z-[5] container mx-auto px-6 lg:px-18 h-full flex items-center">
            <div className="max-w-5xl ">
              {/* Mini Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center bg-primary/10 border border-primary/20 px-6 py-2 rounded-full mb-10 backdrop-blur-md"
              >
                <ArrowRight className="text-secondary-foreground animate-pulse h-5 w-5" />
                <span className="text-secondary-foreground font-semibold text-sm uppercase tracking-wider">
                  Your ONE-stop technology resourcing partner
                </span>
              </motion.div>

              {/* Heading */}
              <BlurText
                text={slides[currentSlide].title}
                delay={450}
                animateBy="words"
                direction="top"
                className="text-5xl sm:text-5xl lg:text-7xl font-black leading-[1.1] text-secondary mb-8"
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl text-white/95 max-w-3xl mb-10"
              >
                {typedSubtitle}
                {typedSubtitle.length <
                  slides[currentSlide].subtitle.length && (
                  <span className="animate-pulse">|</span>
                )}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 rounded-2xl shadow-xl"
                  onClick={() =>
                    scrollToSection(slides[currentSlide].section)
                  }
                >
                  {slides[currentSlide].cta} <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* NAV ARROWS */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() =>
              setCurrentSlide([i, i > currentSlide ? 1 : -1])
            }
            className={`h-3 w-3 rounded-full transition-all ${
              i === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
