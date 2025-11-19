"use client";

import { motion } from "framer-motion";
import LogoLoop from "@/components/ui/logoLoop";
import ScrollReveal from "../ui/scroll-reveal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const PartnersSection = () => {
  const partners = [
    {
      name: "Briz Solutions",
      logo: "https://brizsolutionimages.s3.us-west-2.amazonaws.com/logos.png",
      href: "https://solutionbriz.com/ ",
    },
     {
      name: "AILTS",
      // logo: "https://brizsolutionimages.s3.us-west-2.amazonaws.com/logos.png",
      href: "https://ailts.ae/ ",
    },
  ];

  const stats = [
    {
      title: "Strategic Partnerships",
      description: "Long-term collaborations built on trust and mutual growth",
      icon: "🤝",
    },
    {
      title: "Global Reach",
      description: "Combined network spanning across 50+ countries worldwide",
      icon: "🌍",
    },
    {
      title: "Innovation Focus",
      description: "Cutting-edge solutions developed through joint research",
      icon: "💡",
    },
  ];

  // Convert partners into LogoLoop format
  const logoItems = partners.map((partner) => ({
    node: (
      <img
        src={partner.logo}
        alt={partner.name}
        className="h-full w-auto object-contain"
      />
    ),
    title: partner.name,
    href: partner.href,
  }));

  return (
    <section id="partner" className=" w-full overflow-hidden">
      <div className="mx-auto px-4 sm:px-0">
        {/* Section Header */}
        <ScrollReveal enableBlur={true} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We partner with innovative companies to deliver exceptional results
            and drive digital transformation.
          </p> */}
        </ScrollReveal>

        {/* Partner Logo Loop */}
        <div className="flex justify-center gap-8 lg:gap-12  mt-8">
  {partners.map((partner, idx) => (
    <a
      key={idx}
      href={partner.href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-white rounded-2xl shadow-lg p-6 min-w-[160px] transition-transform hover:scale-105"
    >
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-10 w-auto object-contain"
        />
      ) : (
        <span className="text-xl font-bold text-gray-700">
          {partner.name}
        </span>
      )}
    </a>
  ))}
</div>


        {/* Partnership Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => {
            let animationProps = {
              animate: { y: [0, -8, 0] },
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            };

            if (item.icon === "🌍") {
              animationProps = {
                animate: { rotate: [0, 360] },
                transition: { duration: 5, repeat: Infinity, ease: "linear" },
              };
            }

            if (item.icon === "💡") {
              animationProps = {
                animate: { scale: [1, 1.2, 1] }, // scales up to 1.2 then back to 1
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              };
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <motion.div className="text-4xl mb-4" {...animationProps}>
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gradient mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
