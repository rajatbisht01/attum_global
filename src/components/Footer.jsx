'use client';
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
const Footer = () => {
    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-secondary/30 border-t border-border">
        <motion.div
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay:0.2 }}
    viewport={{ once: false, amount: 0.2 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              ATTUM
            </h3>
            <p className="text-muted-foreground text-sm">
Techno-Functional Expertise. Simplified. Scaled. Specialized.            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link onClick={() => scrollToSection("hero")} href="#hero" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => scrollToSection("about")} href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link onClick={() => scrollToSection("offering")} href="#offering" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Offerings
                </Link>
              </li>
              <li>
                <Link onClick={() => scrollToSection("contact")} href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Engineering & Core Build</li>
              <li>Quality, Security & Trust</li>
              <li>Innovation & Experience</li>
              <li>Cloud Engineering</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Dubai (UAE), Noida (India), Bangalore (India), Belgium</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@attum.one" className="hover:text-primary transition-colors">
                  contact@attum.one
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+971524882602" className="hover:text-primary transition-colors">
                  +971-524882602
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ATTUM. All rights reserved.
          </p>
        </div>
      </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
