"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import AnimatedText from "@/components/ui/animated-text";
import {
  Code,
  Cloud,
  Database,
  Network,
  TestTube,
  Gauge,
  Shield,
  Brain,
  Bot,
  Blocks,
  Lightbulb,
  Layout,
  Server,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimateCard from "../ui/AnimateCard";
import GradientText from "@/components/ui/GradientText";

const MarketingSection = () => {
  const [activeTab, setActiveTab] = useState("engineering");

  const pillars = [
    {
      id: "engineering",
      title: "Engineering & Core Build",
      description:
        "Building the foundations of modern enterprises — delivering scalable, reliable, and future-ready engineering capabilities.",
      icon: Code,
      direction: "left",
      gradient: "from-orange-500 via-orange-400 to-amber-400",
      offerings: [
        {
          icon: Code,
          title: "Software Development CoE",
          items: [
            "Full-stack engineering (Java, .NET, Python, Node.js)",
            "Microservices and API-first architecture",
            "Mobile and web application development",
            "Agile and DevSecOps-aligned practices",
          ],
        },
        {
          icon: Cloud,
          title: "Cloud Engineering CoE",
          items: [
            "Cloud-native engineering across AWS, Azure, GCP",
            "DevOps, SRE, and infrastructure-as-code expertise",
            "Hybrid and multi-cloud enablement",
            "Containerization and orchestration (Docker, Kubernetes)",
          ],
        },
        {
          icon: Database,
          title: "Data Engineering & Analytics CoE",
          items: [
            "Real-time data streaming, ETL pipelines",
            "Data lakes and warehouses (Snowflake, Databricks, BigQuery)",
            "Business Intelligence (BI) dashboards and reporting",
            "Advanced data governance and quality frameworks",
          ],
        },
        {
          icon: Network,
          title: "Digital Platforms & Integration CoE",
          items: [
            "API development, management, and orchestration",
            "Middleware and microservices integration",
            "Enterprise system integration (ERP, CRM, Core Banking)",
            "Legacy modernization and interoperability solutions",
          ],
        },
      ],
    },
    {
      id: "quality",
      title: "Quality, Security & Trust",
      description:
        "Ensuring that technology works reliably, securely, and at scale with advanced testing and cybersecurity.",
      icon: Shield,
      direction: "bottom",
      gradient: "from-primary-dark via-primary to-orange-400",
      offerings: [
        {
          icon: TestTube,
          title: "Product Testing CoE",
          items: [
            "Functional, regression, and end-to-end testing",
            "Test automation (Selenium, Cypress, Appium)",
            "Continuous testing in CI/CD pipelines",
            "Mobile, web, and cross-platform QA",
          ],
        },
        {
          icon: Gauge,
          title: "Quality Engineering & Performance CoE",
          items: [
            "Load, stress, and scalability testing",
            "Automation frameworks for performance validation",
            "Continuous quality monitoring",
            "DevOps-integrated performance engineering",
          ],
        },
        {
          icon: Shield,
          title: "Cybersecurity & Risk CoE",
          items: [
            "Threat detection and penetration testing",
            "Security Operations Center (SOC) resourcing",
            "Identity & Access Management (IAM) and zero-trust",
            "Regulatory compliance (ISO 27001, NIST, GDPR)",
            "Cloud security, data encryption, and vulnerability management",
          ],
        },
      ],
    },
    {
      id: "innovation",
      title: "Innovation & Experience",
      description:
        "Empowering enterprises to innovate, differentiate, and deliver superior experiences with next-generation technologies.",
      icon: Lightbulb,
      direction: "right",
      gradient: "from-amber-500 via-orange-400 to-primary-light",
      offerings: [
        {
          icon: Brain,
          title: "Artificial Intelligence & Machine Learning CoE",
          items: [
            "Predictive analytics, forecasting, and recommendation engines",
            "Natural Language Processing (NLP) and chatbots",
            "Computer vision and image recognition",
            "Generative AI for automation and content creation",
          ],
        },
        {
          icon: Bot,
          title: "Robotic Process Automation (RPA) CoE",
          items: [
            "End-to-end automation using UiPath, Automation Anywhere, Blue Prism",
            "Cognitive automation with AI + RPA",
            "Business process optimization and orchestration",
          ],
        },
        {
          icon: Blocks,
          title: "Blockchain & Web3 CoE",
          items: [
            "Smart contracts and decentralized apps",
            "Digital identity, tokenization, and DeFi platforms",
            "Blockchain integration for finance, supply chain, and logistics",
          ],
        },
        {
          icon: Lightbulb,
          title: "Emerging Tech & Innovation CoE",
          items: [
            "AR/VR for immersive experiences",
            "IoT and edge computing solutions",
            "Digital twins for simulation and optimization",
          ],
        },
        {
          icon: Layout,
          title: "UI/UX & Design Engineering CoE",
          items: [
            "Human-centered product design",
            "Front-end frameworks (React, Angular, Vue)",
            "Seamless digital customer journeys",
          ],
        },
        {
          icon: Server,
          title: "Enterprise Applications CoE",
          items: [
            "Implementation and support for SAP, Oracle, Dynamics, Salesforce, Temenos",
            "Integration with digital channels and platforms",
            "Application lifecycle management and modernization",
          ],
        },
      ],
    },
  ];

  return (
    <section id="offering" className="pb-12 bg-bg-light ">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <ScrollReveal enableBlur={true} className="text-center mb-12">
          <div className="flex items-center justify-center ">
            <AnimatedText delay={0.2} className="flex">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center md:text-5xl font-bold text-[var(--color-text)] mb-6">
                <span className="text-5xl bg-clip-text text-transparent bg-black">
                  Our{" "}
                </span>

                <GradientText className="text-5xl">Core Services</GradientText>
              </div>
            </AnimatedText>
          </div>

          <AnimatedText delay={0.4}>
            <p className="text-xl  md:pb-0 text-[var(--color-muted)] max-w-3xl mx-auto leading-relaxed">
              End-to-end technology solutions for modern enterprises.
            </p>
          </AnimatedText>
        </ScrollReveal>

        {/* TABS */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full  "
        >
          <TabsList className="grid py-24 md:py-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-4 place-content-center mx-4 sm:mx-6 md:mx-48 bg-transparent">
            {pillars.map((pillar) => (
              <TabsTrigger
                key={pillar.id}
                value={pillar.id}
                className="data-[state=active]:bg-[var(--color-brand)] data-[state=active]:text-white
                 h-20 py-4 px-4 sm:py-6 sm:px-6 text-left rounded-2xl border-2 border-border/50 
                 hover:border-[var(--color-brand)]/30 transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                    <pillar.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="font-bold text-base sm:text-lg leading-tight">
                    {pillar.title}
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* TAB CONTENT */}
          {pillars.map((pillar) => (
            <TabsContent key={pillar.id} value={pillar.id} className="mt-18">
              {activeTab === pillar.id && (
                <ScrollReveal
                enableBlur={true}
                blurStrength={10}
                  direction={pillar.direction}
                  delay={0.2}
                  className="space-y-12"
                >
                  {/* Header Block */}
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-gradient mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Offerings */}
                  <div className="grid lg:px-48  md:grid-cols-2 gap-8">
                    {pillar.offerings.map((offering, idx) => (
                      <AnimateCard
                        key={idx}
                        icon={offering.icon}
                        title={offering.title}
                        description="" // your offering.description is split into items, so leave empty
                        gradient={pillar.gradient}
                        delay={idx * 0.1}
                        imagePosition="top"
                        direction="up"
                        features={offering.items} // this maps the bullet points
                      />
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MarketingSection;
