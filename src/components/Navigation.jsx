'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import GooeyNav from "@/components/ui/GooeyNav"; 
import { usePathname } from "next/navigation"; // ⭐ Added

const gooeyItems = [
  { label: "Home", href: "/#hero", id: "hero" },
  { label: "Offering", href: "/#offering", id: "offering" },
  { label: "Case Studies", href: "/case-studies", id: "case-studies" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const pathname = usePathname(); // ⭐ Added

  // ⭐ Detect page route and set the active tab correctly
  useEffect(() => {
    // Case studies page + dynamic pages
    if (pathname.startsWith("/case-studies")) {
      const i = gooeyItems.findIndex(item => item.label === "Case Studies");
      setActiveIndex(i);
      return;
    }

    // Home page uses scroll tracking – no index override
    if (pathname === "/") return;

    // Other direct pages (future use)
    const i = gooeyItems.findIndex(item => item.href === pathname);
    if (i !== -1) setActiveIndex(i);

  }, [pathname]);

  // ⭐ Scroll-based activation only on homepage
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      gooeyItems.forEach((item, index) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // ⭐ Navigate when section exists, else fallback to page navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    // If section isn't found → navigate normally
    if (!element) {
      const item = gooeyItems.find(i => i.id === sectionId);
      if (item) window.location.href = item.href;
      return;
    }

    // If section exists → smooth scroll
    element.scrollIntoView({ behavior: "smooth" });
    const index = gooeyItems.findIndex(item => item.id === sectionId);
    if (index !== -1) setActiveIndex(index);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-20 transition-all duration-300 ${
        isScrolled ? "bg-bg-light backdrop-blur-md shadow-lg" : "bg-bg-light"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <motion.div
          className="text-2xl font-bold flex items-center  text-gray-800 cursor-pointer"
          // whileHover={{ scale: 1.15 }}
          onClick={() => scrollToSection("hero")}
        > 
          <img
            src={"/assets/logo.png"}
            alt="Logo"
            className="h-8 w-8 object-fit"
          />
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            // whileHover={{ scale: 1.05 }}
            className="text-4xl ml-4 text-center  font-black bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent"
          >
            attum
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <GooeyNav
            items={gooeyItems.map((item, index) => ({
              ...item,
              onClick: () => scrollToSection(item.id),
            }))}
            activeIndex={activeIndex}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 2, 1, 3, 2, 1]}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden"
          >
            <div className="flex flex-col items-center space-y-6 py-6">
              {gooeyItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    activeIndex === index ? "text-brand" : "text-gray-700"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
