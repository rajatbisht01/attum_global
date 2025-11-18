import React, { useState } from 'react'
import ScrollReveal from './scroll-reveal'
import { motion } from 'framer-motion'
import {  CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'

const AnimateCard = ({
  index,
  direction = 'up',
  icon: Icon,
  title,
  description,
  longDescription, // optional - detailed description from PDF
  features, // optional - features array from PDF
  bulletPoints, // optional - legacy support
  image, // optional
  imagePosition = 'top', // "top" (default) or "background"
  showExpandable = false, // optional - show expand/collapse functionality
  onButtonClick = () => {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const isBackground = image && imagePosition === 'background'
   const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  // Use features if available, otherwise fall back to bulletPoints
  const displayPoints = features || bulletPoints || []
  const hasExpandableContent = longDescription || displayPoints.length > 0

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.06 }}
        className={`relative p-2 shadow-md rounded-2xl  group hover:shadow-2xl transition-all ${
          isBackground ? 'text-white overflow-hidden' : 'bg-white p-5'
        }`}
        style={
          isBackground
            ? {
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {}
        }
      >
        {/* Gradient overlay for background mode */}
        {isBackground && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent group-hover:from-black/60 group-hover:via-black/30 transition-all" />
        )}

        {/* Content wrapper */}
        <div className={`relative ${isBackground ? 'p-6' : 'p-0.6'}`}>
          {/* Top image (if imagePosition = top) */}
          {image && imagePosition === 'top' && (
            <div className="mb-2">
              <img
                src={image}
                alt={title}
                className="w-full h-32 object-cover rounded-xl"
              />
            </div>
          )}

          {/* Header */}
          <div className="flex items-start space-x-4 mb-1">
            <div className="p-4 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 rounded-2xl text-white group-hover:scale-110 transition-transform">
              <Icon className="w-6 h-6" />
            </div>
            <div className={isBackground ? 'max-w-lg' : ''}>
              <h3
                className={`text-2xl font-bold mb-1 ${
                  isBackground ? 'text-white' : 'text-[var(--color-text)]'
                }`}
              >
                {title}
              </h3>
              <p
                className={`leading-relaxed my-1 text-md ${
                  isBackground ? 'text-gray-200' : 'text-[var(--color-muted)]'
                }`}
              >
                {description}
              </p>
            </div>
          </div>

          {/* Long Description (expandable if showExpandable is true) */}
          {longDescription && (
            <div className="mb-2">
              {showExpandable ? (
                <>
                  <div className={`transition-all duration-300 ${isExpanded ? 'max-h-none' : 'max-h-0 overflow-hidden'}`}>
                    <p className={`leading-relaxed text-sm ${
                      isBackground ? 'text-gray-300' : 'text-[var(--color-muted)]'
                    }`}>
                      {longDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`mt-2 flex items-center text-sm font-medium ${
                      isBackground ? 'text-[var(--color-brand)]' : 'text-[var(--color-brand)]'
                    } hover:opacity-80 transition-opacity`}
                  >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </button>
                </>
              ) : (
                <p className={`leading-relaxed text-sm mb-4 ${
                  isBackground ? 'text-gray-300' : 'text-[var(--color-muted)]'
                }`}>
                  {longDescription}
                </p>
              )}
            </div>
          )}

          {/* Features/Benefits Points */}
          {  displayPoints.length > 0 && (
            <div className="space-y-2 ml-4">
              {displayPoints.map((point, i) => (
                <ScrollReveal key={i} enableBlur={true}   direction="up" delay={0.02 + i * 0.1}>
                  <div
                    className={`flex items-start ${
                      isBackground ? 'text-white' : 'text-[var(--color-text)]'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--color-brand)] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-sm leading-relaxed">{point}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Expandable Content Toggle (if no longDescription but has features and showExpandable) */}
          {!longDescription && hasExpandableContent && showExpandable && (
            <div className="mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center text-sm font-medium ${
                  isBackground ? 'text-[var(--color-brand)]' : 'text-[var(--color-brand)]'
                } hover:opacity-80 transition-opacity`}
              >
                {isExpanded ? 'Hide Details' : 'View Details'}
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1" />
                )}
              </button>
            </div>
          )}

          {/* Hover CTA */}
          {/* <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={()=>scrollToSection('contact')}
              className={`font-semibold flex items-center text-sm ${
                isBackground
                  ? 'text-[var(--color-brand)] hover:text-indigo-400'
                  : 'text-[var(--color-brand)] hover:text-indigo-600'
              }`}
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div> */}
        </div>
      </motion.div>
    </>
  )
}

export default AnimateCard