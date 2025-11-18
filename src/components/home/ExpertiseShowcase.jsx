import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiUnity,
  SiSalesforce,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiSap,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPython,
    SiDatabricks,
  SiCloudflare,
  SiNode
  
} from "react-icons/si";

import { FaBusinessTime, FaTools } from "react-icons/fa";

const expertise = [
      {
    icon: <SiUnity className="w-10 h-10 text-black" />,
    name: "AR/VR & Gaming",
    category: "Unity, Unreal Engine",
    stack: [SiUnity],
  },
  {
    icon: <SiReact className="w-10 h-10 text-sky-400" />,
    name: "Web Development",
    category: "Nodejs, React, Next.js, Tailwind",
    stack: [SiNodedotjs, SiReact, SiNextdotjs, SiTailwindcss],
  },
  {
    icon: <SiSalesforce className="w-10 h-10 text-blue-500" />,
    name: "CRM Solutions",
    category: "Salesforce Consulting",
    stack: [SiSalesforce],
  },
  {
    icon: <SiAmazon className="w-10 h-10 text-yellow-400" />,
    name: "Cloud & DevOps",
    category: "AWS, Azure, Docker, K8s",
    stack: [SiAmazon, SiDocker, SiKubernetes, SiCloudflare],
  },
  {
    icon: <SiSap className="w-10 h-10 text-blue-600" />,
    name: "Enterprise Solutions",
    category: "SAP Implementation",
    stack: [SiSap],
  },
//   {
//     icon: <SiPython className="w-10 h-10 text-green-500" />,
//     name: "Data & AI",
//     category: "Python, Data Engineering, ML",
//     stack: [SiPython, SiMongodb, SiNodedotjs, SiDatabricks],
//   },
  {
    icon: <SiDatabricks className="w-10 h-10 text-red-500" />,
    name: "Data Engineering & Analytics",
    category: "ETL, Warehousing, BI",
    stack: [SiPython, SiMongodb, SiDatabricks],
  },

];


const ExpertiseCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="p-2 rounded-2xl max-w-lg shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group border border-gray-100"
  >
    {/* Icon Container */}
    <div className="flex justify-center items-center mb-6">
      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
        {item.icon}
      </div>
    </div>

    {/* Title and Category */}
    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-brand transition-colors duration-300">
      {item.name}
    </h3>
    <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
      {item.category}
    </p>

    {/* Tech Stack Icons */}
    <div className="flex justify-center gap-4 flex-wrap">
      {item.stack.map((TechIcon, i) => (
        <div
          key={i}
          className="p-2 rounded-lg bg-gray-50 group-hover:bg-white transition-all duration-300 hover:scale-110"
        >
          <TechIcon className="w-5 h-5 text-gray-700 group-hover:text-brand transition-colors duration-300" />
        </div>
      ))}
    </div>

    {/* Hover Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
  </motion.div>
);

export function ExpertiseShowcase() {
  return (
    <div className="rounded-3xl px-4">
     
      
      {/* Responsive Grid - Fixed the column count */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertise.map((item, index) => (
          <ExpertiseCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}