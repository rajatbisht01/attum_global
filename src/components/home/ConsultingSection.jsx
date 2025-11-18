"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import AnimatedText from "@/components/ui/animated-text";
import { Code, UploadCloud,TrendingUp, Code2, Cog, Users2, ShieldCheck } from "lucide-react";
import AnimateCard from "../ui/AnimateCard";
import SpotlightCard from "../ui/spotlightCard";

const ConsultingSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

 const services = [ 
  {
    id: 1,
    icon: Code,
    title: "Technology Migration",
    description:
      "Seamlessly migrate and upgrade systems while minimizing downtime and disruption",
    benefits: [
      "Smooth system upgrades with zero data loss",
      "Reduced operational disruption during transition",
      "Enhanced scalability and modernization"
    ],
  },
  {
    id: 2,
    icon: UploadCloud,
    title: "Managed IT services",
    description:
      "Ensure optimal IT with managed services, from infrastructure to cybersecurity.",
    benefits: [
      "Comprehensive infrastructure and network management",
      "Continuous system monitoring and quick issue response",
      "Optimized performance with preventive maintenance",
    ],
  },
  {
    id: 3,
    icon: Cog,
    title: "Maintenance and Operations",
    description:
      "Optimize IT performance with proactive monitoring and maintenance.",
    benefits: [
      "Predictive maintenance to prevent downtime",
      "Routine performance audits and optimization",
      "Quick incident handling and recovery processes",
    ],
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Ensure software reliability with comprehensive testing and QA",
    benefits: [
      "End-to-end functional and performance testing",
      "Early defect detection and reduced rework",
      "Improved software stability and reliability",
    ],
  },
  {
    id: 5,
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Create custom software solutions tailored to meet business requirements",
    benefits: [
      "Tailored applications aligned with business goals",
      "Agile development for faster delivery",
      "Scalable architecture for long-term growth",
    ],
  },
  {
    id: 6,
    icon: Users2,
    title: "Talent Management services",
    description: `Sourcing and deploying IT resources in Middle east – Onsite
Engaging IT talent from offshore – India`,
    benefits: [
      `Workforce Management - Manage your workforce across all staffing models: 
                                domestic, global, contingent, permanent, and SOW.`,
      `Value Proposition : Talent quality, Hiring speed, process control 
                           and Talent retention.`,
    ],
  },
];


  const approach = [
    {
      step: "01",
      title: "Quality",
      description: "Uncompromising standards in every solution",
    },
    {
      step: "02",
      title: "Customization",
      description: "Tailored approaches for unique challenges",
    },
    {
      step: "03",
      title: "Impact",
      description: "Measurable results that matter",
    },
  ];

  return (
    <section id="consulting" className="pb-12 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        <div className="rounded-3xl px-8 md:px-12  pb-4">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gradient mb-4">
               We Help You to Scale Your Technology
              </h3>
              <AnimatedText variant="fadeup" delay={0.4}> 
              <p className="text-lg text-[var(--color-muted)] max-w-6xl mx-auto">
Our team brings over a decade of expertise in technology resourcing to help enterprises build, secure, and innovate. From engineering foundations to advanced innovation, ATTUM combines deep technical skills with practical execution to deliver measurable results. With our support, you can modernize your core systems, ensure resilience and security, and embrace cutting-edge technologies for sustainable growth.              </p>
           </AnimatedText>
            </div>
          </AnimatedText>

          <div className="grid grid-cols-2 mb-12 md:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <ScrollReveal
                key={step.title}
                direction="up"
                delay={0.2 + index * 0.2}
              >
                <motion.div className="relative text-center group">
                  <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </motion.div>

                  <h4 className="text-xl font-semibold text-[var(--color-text)] mb-3">
                    {step.title}
                  </h4>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {step.description}
                  </p>

                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[var(--color-brand)]/30 to-transparent transform -translate-y-1/2"></div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <SpotlightCard>
            <div
              onClick={() => scrollToSection("contact")}
              className="hover:shadow-2xl text-center bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 rounded-3xl p-12 text-white cursor-pointer"
            >
              <h3 className="text-3xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how ATTUM can help you build, secure, and innovate with confidence. Partner with us for world-class technology solutions.
              </p>
              <button className="bg-white text-[var(--color-brand)] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all">
                Contact Us
              </button>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConsultingSection;
