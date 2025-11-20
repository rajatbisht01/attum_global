"use client";

import HeroSection from "@/components/home/HeroSection";
import ContactSection from "@/components/home/ContactSection";
import AboutSection from "@/components/home/AboutSection";
import TechnologySection from "@/components/home/TechnologySection";
import MarketingSection from "@/components/home/MarketingSection";
import ConsultingSection from "@/components/home/ConsultingSection";
import PartnersSection from "@/components/home/PartnerSection";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { MoveDown, CheckCircle2} from "lucide-react";

export default function Home() {
  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="flex flex-col gap-5">
      {/* Hero Section */}

        <HeroSection />

<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="flex  justify-center"
  onClick={()=>scrollToSection('technology')}
>
  <MoveDown className="w-8 h-8 color-brand" />
</motion.div>


        <TechnologySection />
     

      <ScrollReveal  delay={0.2} className="md:px-10 ">
         <section className="pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Decade of Excellence
              </span>
              <h2 className="text-5xl sm:text-6xl font-black mb-8 leading-tight">
                Trusted Technology{" "}
                <span className="text-gradient">Resourcing Partner</span>
              </h2>
              <div className="space-y-6 mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over a decade of proven expertise, ATTUM has empowered enterprises across industries to build, scale, and innovate with confidence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our Technology Resourcing services are rooted in specialized Centers of Excellence (CoEs) that bring the right talent, skills, and capabilities to every stage of the digital lifecycle.
                </p>
              </div>
              
              <div className="space-y-4">
                {["Driving software development", "Ensuring quality and security", "Pioneering innovation", "Enabling business outcomes"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    // viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold group-hover:text-primary transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold mt-8 text-foreground"
              >
                At ATTUM, we don't just provide resources —{" "}
                <span className="text-gradient">we enable outcomes.</span>
              </motion.p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden glass-effect premium-shadow-lg p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="space-y-8">
                    {[
                      { num: "01", title: "10+ Years", desc: "Industry Experience", color: "from-orange-500 via-orange-400 to-amber-400" },
                      { num: "02", title: "Global", desc: "Presence & Reach", color: "from-orange-500 via-orange-400 to-amber-400" },
                      { num: "03", title: "Expert", desc: "Specialized Teams", color: "from-orange-500 via-orange-400 to-amber-400" },
                      { num: "04", title: "Proven", desc: "Track Record", color: "from-orange-500 via-orange-400 to-amber-400" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        // initial={{ opacity: 0, y: 20 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // // viewport={{ once: true }}
                        // transition={{ delay:  0.15, duration: 0.5 }}
                        // whileHover={{ x: 10 }}
                        className="flex items-center gap-6 bg-background/80 backdrop-blur-sm p-6 rounded-2xl border-white bg-white border-border/50 hover:border-primary/30 transition-all duration-300 premium-shadow group"
                      >
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                          {item.num}
                        </div>
                        <div>
                          <div className="text-2xl font-black mb-1 group-hover:text-gradient transition-all">{item.title}</div>
                          <div className="text-muted-foreground font-medium">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal  delay={0.1} className="" direction="up">
        <MarketingSection />
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="md:px-10 ">
        <ConsultingSection />
      </ScrollReveal>

      <ScrollReveal  delay={0.1} className="mb-12" direction="bottom">
        <PartnersSection />
      </ScrollReveal>

      <ScrollReveal enableBlur={true} delay={0.1} className="md:px-10 ">
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal enableBlur={true} delay={0.4}>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}
