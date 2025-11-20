"use client";

import { motion } from "framer-motion";
import AnimateCard from "../ui/AnimateCard";
import { ArrowRight, Code, Shield, Sparkles, Cloud, Database, Lock, Brain, Layout, Cpu, CheckCircle2, Zap, Award, Globe } from "lucide-react";
import ScrollReveal from "../ui/scroll-reveal";
import GradientText from "@/components/ui/GradientText";

 const pillars = [
  {
    icon: Code,
    title: "Engineering & Core Build",
    description:
      "Building robust foundations and scalable platforms for enterprises into Platform Development, Cloud Engineering, Data Analytics and Integrations.",
    gradient: "from-orange-500 via-orange-400 to-amber-400",
    image: "/assets/engineering-illustration.jpg", // 🔥 added
  },
  {
    icon: Shield,
    title: "Quality, Security & Trust",
    description:
      "Ensuring resilience, performance, and enterprise-grade assurance through Product Testing, Quality Engineering & Product Performance and Cybersecurity.",
    gradient: "from-orange-500 via-orange-400 to-amber-400",
    image: "/assets/security-illustration.jpg", // 🔥 added
  },
  {
    icon: Sparkles,
    title: "Innovation & Experience",
    description:
      "Shaping next-generation customer journeys and future-ready capabilities, by diving into AI, ML, RPA, Blockchain & Web3, and UI/UX Design Engineering.",
    gradient: "from-orange-500 via-orange-400 to-amber-400",
    image: "/assets/innovation-illustration.jpg", // 🔥 added
  },
];
const StrategicPillarsSection = () => {
  return (
    <section id="technology" className="pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          // initial={{ opacity: 0, y: -30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: false, margin: "-100px" }}
          // transition={{ duration: 0.1 }}
          className="text-center my-2 "
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4"
          >
            Three Strategic Pillars
          </motion.span>

          <div className="bg-clip-text pb-2 text-4xl font-extrabold text-transparent bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400">
            <GradientText showBorder={false}>

             Complete Digital Lifecycle
            </GradientText>
            </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Structured expertise across the complete technology spectrum
          </p>
        </motion.div>

        {/* Pillars Grid */}
              <ScrollReveal delay={0.3}  direction="up" className="md:px-10 ">

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <AnimateCard
              key={index}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              gradient={pillar.gradient}
              delay={0.2}
              imagePosition="top"
              direction="top"
              image={pillar.image}
            />
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StrategicPillarsSection;
