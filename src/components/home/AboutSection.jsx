'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { Award, Users, Globe, Zap } from 'lucide-react';
import ScrollReveal from '../ui/scroll-reveal';

// 🔢 Counter component
const Counter = ({ from = 0, to, duration = 1 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: 'easeOut' });
    return controls.stop;
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
};

const AboutSection = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation First',
      description:
        'We embrace cutting-edge technologies and methodologies to deliver forward-thinking solutions.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Every solution is tailored to our clients unique needs and business objectives.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence Driven',
      description: 'We maintain the highest standards of quality in every project and partnership.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Our solutions create positive change that extends across industries and borders.',
    },
  ];

  const stats = [
    { metric: '500+', label: 'Happy Clients' },
    { metric: '50+', label: 'Countries' },
    { metric: '8+', label: 'Years Experience' },
    { metric: '99.9%', label: 'Client Satisfaction' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className=" overflow-hidden">
            <ScrollReveal  delay={0.3}  direction="up" className="md:px-10 ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400">
              us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Get the Right Technology Solutions For Your Business
          </p>
        </motion.div>

        {/* Story Section */}
        {/* About Summary + Service Overview */}
<div className="mb-12">
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-3xl p-10 shadow-lg"
  >
   

    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto mb-12 text-center">
      We are a dedicated team of technology experts focused on helping
      enterprises build, secure, and innovate. With over a decade of experience
      in software development, cloud, data, and emerging technologies, ATTUM
      delivers resourcing solutions that drive real outcomes and enable
      sustainable growth.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

      {/* Engineering & Core Build */}
      <div>
        <span className="text-2xl font-bold text-gradient  mb-3">
          Engineering & Core Build
        </span>
        <p className="text-gray-600 leading-relaxed">
          Our services empower businesses to modernize and scale their digital
          foundations. From full-stack development and cloud engineering to data
          pipelines and enterprise integrations, ATTUM provides the talent and
          expertise to deliver agile, reliable, and future-ready systems.
        </p>
      </div>

      {/* Quality, Security & Trust */}
      <div>
        <h4 className="text-2xl font-bold text-gradient mb-3">
          Quality, Security & Trust
        </h4>
        <p className="text-gray-600 leading-relaxed">
          We ensure your technology works at scale with confidence. ATTUM
          provides testing, performance engineering, and cybersecurity
          solutions including SOC resourcing, IAM, and zero-trust frameworks —
          ensuring compliance, resilience, and long-term business continuity.
        </p>
      </div>

    </div>
  </motion.div>
</div>


        {/* Mission & Vision */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {['Our Mission', 'Our Vision'].map((title, index) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-md text-center"
            >
              <h3 className="text-2xl font-bold text-gradient mb-4">{title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {title === 'Our Mission'
                  ? 'To empower businesses with innovative technology solutions and strategic insights that drive sustainable growth, operational excellence, and competitive advantage in an ever-evolving digital landscape.'
                  : 'To be the global leader in corporate transformation, setting new standards for innovation, reliability, and client success while creating lasting positive impact across industries and communities worldwide.'}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-14">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default AboutSection;
