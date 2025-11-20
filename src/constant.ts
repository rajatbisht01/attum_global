import cloudMigration from ".././public/assets/case-studies/cloud-migration-finance.jpg";
import aiRetail from ".././public/assets/case-studies/ai-retail-customer.jpg";
import healthcareAnalytics from ".././public/assets/case-studies/healthcare-analytics.jpeg";
import cybersecurityBanking from ".././public/assets/case-studies/cybersecurity-banking.jpg";
import digitalManufacturing from ".././public/assets/case-studies/digital-manufacturing.jpg";
import qaEcommerce from ".././public/assets/case-studies/qa-ecommerce.jpeg";

export const caseStudies = [
  {
    id: "cloud-migration-financial",
    title: "Enterprise Cloud Migration & Modernization",
    client: "Leading Middle East Financial Institution",
    industry: "Financial Services",
    pillar: "Engineering & Core Build",
    description:
      "Complete migration of legacy banking infrastructure to AWS cloud with zero downtime and enhanced security compliance.",
    challenge:
      "A major financial institution needed to migrate 150+ legacy applications from on-premises data centers to the cloud while maintaining 24/7 operations, ensuring PCI-DSS compliance, and improving system performance.",
    solution:
      "ATTUM's Cloud Engineering CoE designed and executed a phased migration strategy using AWS services. We implemented infrastructure-as-code with Terraform, containerized applications using Docker and Kubernetes, and established CI/CD pipelines for continuous deployment. Our DevOps team ensured zero-downtime migration through blue-green deployment strategies.",
    results: [
      { metric: "Infrastructure Cost Reduction", value: "42%" },
      { metric: "System Uptime Improvement", value: "99.99%" },
      { metric: "Deployment Speed Increase", value: "8x faster" },
      { metric: "Security Incidents Reduction", value: "67%" },
    ],
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "Python", "Node.js"],
    image: cloudMigration,
    duration: "18 months",
    teamSize: "25 engineers",
    testimonial: {
      quote:
        "ATTUM's expertise in cloud migration was exceptional. They delivered a complex transformation with zero business disruption and exceeded our performance expectations.",
      author: "CTO",
      position: "Major Financial Institution",
    },
  },

  {
    id: "ai-retail-customer",
    title: "AI-Powered Customer Experience Platform",
    client: "Global Retail Chain",
    industry: "Retail & E-commerce",
    pillar: "Innovation & Experience",
    description:
      "Implementation of an intelligent customer service platform using NLP and machine learning to enhance customer engagement across multiple channels.",
    challenge:
      "A global retail chain struggled with high customer service costs, inconsistent responses across channels, and inability to provide 24/7 support in multiple languages. Customer satisfaction scores were declining.",
    solution:
      "ATTUM's AI/ML CoE developed a comprehensive conversational AI platform powered by advanced NLP models. We integrated chatbots across web, mobile, and messaging platforms, implemented sentiment analysis for escalation, and created a unified knowledge base. The system handles routine inquiries automatically while routing complex issues to human agents.",
    results: [
      { metric: "Customer Inquiries Automated", value: "73%" },
      { metric: "Response Time Reduction", value: "85%" },
      { metric: "Customer Satisfaction Score", value: "+34 points" },
      { metric: "Annual Cost Savings", value: "$2.4M" },
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "GPT-4",
      "Azure AI",
      "React",
      "Node.js",
      "MongoDB",
    ],
    image: aiRetail,
    duration: "12 months",
    teamSize: "18 engineers",
    testimonial: {
      quote:
        "The AI solution ATTUM built transformed our customer service operations. We now provide instant, accurate support 24/7 across 12 languages.",
      author: "Head of Digital Innovation",
      position: "Global Retail Corporation",
    },
  },

  {
    id: "healthcare-analytics",
    title: "Real-Time Healthcare Analytics Platform",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    pillar: "Engineering & Core Build",
    description:
      "Development of a comprehensive data analytics platform to unify patient data across hospitals and enable real-time clinical decision support.",
    challenge:
      "A healthcare network with 15 hospitals struggled with siloed patient data, delayed reporting, and inability to identify trends for preventive care. Manual reporting processes took weeks to complete.",
    solution:
      "ATTUM's Data Engineering & Analytics CoE built a unified data platform using Azure Synapse Analytics and Databricks. We implemented real-time ETL pipelines, created a secure data lake with HIPAA compliance, and developed interactive Power BI dashboards for clinical insights. Machine learning models predict patient readmission risks.",
    results: [
      { metric: "Data Processing Speed", value: "50x faster" },
      { metric: "Reporting Time Reduction", value: "From weeks to minutes" },
      { metric: "Patient Readmission Prediction", value: "89% accuracy" },
      { metric: "Care Quality Improvement", value: "27%" },
    ],
    technologies: [
      "Azure Synapse",
      "Databricks",
      "Python",
      "Apache Spark",
      "Power BI",
      "Snowflake",
    ],
    image: healthcareAnalytics,
    duration: "16 months",
    teamSize: "22 engineers",
    testimonial: {
      quote:
        "ATTUM's analytics platform has revolutionized how we deliver patient care. Real-time insights help our clinicians make better decisions faster.",
      author: "Chief Medical Information Officer",
      position: "Healthcare Network",
    },
  },

  {
    id: "cybersecurity-banking",
    title: "Zero-Trust Security Architecture Implementation",
    client: "International Banking Group",
    industry: "Banking & Finance",
    pillar: "Quality, Security & Trust",
    description:
      "Complete cybersecurity transformation implementing zero-trust architecture, SOC operations, and advanced threat detection across global operations.",
    challenge:
      "An international bank faced increasing cyber threats, regulatory compliance challenges, and needed to secure remote workforce access across 40 countries while meeting strict financial regulations.",
    solution:
      "ATTUM's Cybersecurity & Risk CoE designed and implemented a comprehensive zero-trust security framework. We established a 24/7 Security Operations Center, deployed advanced threat detection using AI/ML, implemented identity and access management with multi-factor authentication, and conducted penetration testing. All systems achieved ISO 27001 and PCI-DSS compliance.",
    results: [
      { metric: "Threat Detection Speed", value: "92% faster" },
      { metric: "Security Incidents Prevention", value: "78%" },
      { metric: "Compliance Audit Score", value: "100%" },
      { metric: "Mean Time to Respond", value: "15 minutes" },
    ],
    technologies: ["Azure Sentinel", "CrowdStrike", "Okta", "Splunk", "Terraform", "Python"],
    image: cybersecurityBanking,
    duration: "20 months",
    teamSize: "30 engineers",
    testimonial: {
      quote:
        "ATTUM built a world-class security infrastructure that protects our assets while enabling business agility. Their SOC team is exceptional.",
      author: "Chief Information Security Officer",
      position: "International Bank",
    },
  },

  {
    id: "digital-manufacturing",
    title: "Smart Factory Digital Integration",
    client: "Automotive Manufacturing Corporation",
    industry: "Manufacturing",
    pillar: "Engineering & Core Build",
    description:
      "End-to-end digital transformation connecting legacy manufacturing systems with modern IoT platforms and enterprise applications.",
    challenge:
      "A major automotive manufacturer had 8 factories with disparate legacy systems, no real-time production visibility, frequent equipment failures, and manual quality control processes causing delays and quality issues.",
    solution:
      "ATTUM's Digital Platforms & Integration CoE implemented a comprehensive IoT and integration solution. We connected 5,000+ manufacturing devices, integrated ERP (SAP) with MES systems, deployed predictive maintenance using edge computing, and created real-time production dashboards. API-first architecture enabled seamless data flow across the value chain.",
    results: [
      { metric: "Production Visibility", value: "Real-time across 8 factories" },
      { metric: "Equipment Downtime Reduction", value: "64%" },
      { metric: "Quality Defects Reduction", value: "41%" },
      { metric: "Overall Equipment Effectiveness", value: "+23%" },
    ],
    technologies: ["Azure IoT Hub", "SAP", "Node.js", "Python", "Kafka", "React", "Docker"],
    image: digitalManufacturing,
    duration: "24 months",
    teamSize: "28 engineers",
    testimonial: {
      quote:
        "ATTUM transformed our manufacturing operations. We now have complete visibility and control, enabling us to compete in the digital age.",
      author: "VP of Operations",
      position: "Automotive Manufacturer",
    },
  },

  {
    id: "qa-ecommerce",
    title: "Quality Engineering for Marketplace Platform",
    client: "Leading E-commerce Marketplace",
    industry: "E-commerce & Technology",
    pillar: "Quality, Security & Trust",
    description:
      "Comprehensive quality engineering program including test automation, performance testing, and continuous quality monitoring for high-traffic platform.",
    challenge:
      "An e-commerce platform with 10M+ daily users faced frequent production bugs, slow release cycles, performance issues during peak periods, and inconsistent quality across mobile and web experiences.",
    solution:
      "ATTUM's Quality Engineering CoE implemented end-to-end test automation using Selenium and Cypress, established performance testing protocols with JMeter, integrated continuous testing in CI/CD pipelines, and deployed synthetic monitoring. We created automated test suites covering 95% of critical user journeys and implemented chaos engineering for resilience testing.",
    results: [
      { metric: "Test Automation Coverage", value: "95%" },
      { metric: "Production Bugs Reduction", value: "81%" },
      { metric: "Release Cycle Time", value: "5x faster" },
      { metric: "Peak Load Handling", value: "+300%" },
    ],
    technologies: ["Selenium", "Cypress", "JMeter", "Jenkins", "Python", "Appium", "Grafana"],
    image: qaEcommerce,
    duration: "14 months",
    teamSize: "20 engineers",
    testimonial: {
      quote:
        "ATTUM's quality engineering expertise helped us achieve unprecedented reliability and speed. Our customers now enjoy a flawless shopping experience.",
      author: "VP of Engineering",
      position: "E-commerce Marketplace",
    },
  },
];
