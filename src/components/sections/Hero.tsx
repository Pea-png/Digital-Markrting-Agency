import React from 'react';
import { Button } from '../ui/Button';
export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  images: {
    main: string;
    secondary1: string;
    secondary2: string;
  };
  className?: string;
}

/**
 * Hero Section Component
 * Features:
 * - Responsive grid layout with featured images
 * - Typography following design system hierarchy
 * - Call-to-action button integration
 * - Accessible image alt text and semantic structure
 */
export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  images,
  className = '',
}) => {
  const handleCTAClick = () => {
    const element = document.querySelector(ctaHref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className={`lg:px-20 px-8 flex flex-col md:flex-row items-center justify-center py-20 bg-white ${className}`}
      role="banner"
    >
      {/* Content Section */}
      <div className="md:w-1/2 text-center md:text-left pt-20">
        {/* Main Headline - Using design system typography */}
        <h1 className="text-hero md:text-6xl font-medium text-red-700 mb-2 md:mb-4 z-10 relative leading-tight">
          {title}
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-display md:text-title font-medium text-gray-800 mb-2 md:mb-4 z-10 relative">
          {subtitle}
        </h2>
        
        {/* Description */}
        <p className="mt-8 text-gray-600 font-regular leading-relaxed max-w-lg">
          {description}
        </p>
        
        {/* Call to Action Button */}
        <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 px-6 py-2
         text-white rounded-md">
          <Button
            onClick={handleCTAClick}
            size="lg"
            aria-label={`${ctaText} - Navigate to contact form`}
          >
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="w-full sm:w-3/4 md:w-1/2 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8 md:mt-0">
        {/* Main Featured Image */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2 p-4 py-40 bg-red-100 rounded-lg relative">
          <img 
            src={images.main}
            alt="Main hero image showcasing digital marketing services"
            className="w-full h-full object-cover absolute inset-0 z-0 rounded-lg"
            loading="eager" // Load hero images immediately
          />
          {/* Gradient overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
        </div>

        {/* Secondary Images */}
        <div className="p-4 py-16 bg-red-100 rounded-lg relative">
          <img 
            src={images.secondary1}
            alt="Digital marketing strategy visualization"
            className="w-full h-full object-cover absolute inset-0 z-0 rounded-lg"
            loading="lazy"
          />
        </div>
        
        <div className="p-4 py-16 bg-red-100 rounded-lg relative">
          <img 
            src={images.secondary2}
            alt="Social media marketing analytics"
            className="w-full h-full object-cover absolute inset-0 z-0 rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};