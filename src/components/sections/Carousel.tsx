import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';  // Make sure this path is correct
export interface CarouselItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface CarouselProps {
  title: string;
  subtitle: string;
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  title,
  subtitle,
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Update items per view based on window width
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play slides
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex, itemsPerView]);

  const maxIndex = Math.max(0, items.length - itemsPerView);
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePrev();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    }
  };

  const translateX = -currentIndex * (100 / itemsPerView);

  // Update CSS variable --translate-x on the carousel track div
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.setProperty('--translate-x', `${translateX}%`);
    }
  }, [translateX]);

  return (
    <section 
      id="case" 
      className={`lg:px-20 px-8 py-20 bg-black ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`${title} carousel`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-title font-medium text-left md:text-left text-gray-300">
            {title}
          </h2>
          <p className="text-left md:text-left text-gray-300 mt-4">
            {subtitle}
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="overflow-hidden relative rounded-lg"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Apply ref here to update CSS variable */}
            <div 
              className="flex carousel-track"
              ref={carouselRef}
            >
              {items.map((item, index) => (
                <div 
                  key={item.id}
                  className={`flex-shrink-0 px-3 ${
                    itemsPerView === 1 ? 'w-full' : 'w-1/3'
                  }`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${items.length}: ${item.title}`}
                >
                  <div className="p-6 bg-black rounded-lg shadow-lg border-gray-800 border-2 hover:border-gray-600 transition-all duration-300 group">
                    <div className="overflow-hidden rounded-t-lg">
                      <img 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        src={item.image}
                        alt={`${item.title} case study`}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-gray-300 text-xl font-semibold mt-4">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-200"
            aria-label="Previous slide"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-200"
            aria-label="Next slide"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                  index === currentIndex 
                    ? 'bg-brand-primary' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
