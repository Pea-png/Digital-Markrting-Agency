import React from 'react';

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsProps {
  title: string;
  description: string;
  stats: StatItem[];
  image?: string;
  className?: string;
}

/**
 * Stats Section Component
 * Features:
 * - Responsive grid layout for statistics
 * - Accessible statistics presentation
 * - Optional featured image
 * - Typography consistent with design system
 */
export const Stats: React.FC<StatsProps> = ({
  title,
  description,
  stats,
  image,
  className = '',
}) => {
  return (
    <section 
      id="about" 
      className={`lg:px-20 px-8 flex flex-col md:flex-row items-center justify-center lg:pb-18 pb-20 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Content */}
        <div className="text-center">
          <h2 className="text-title text-gray-800 text-center md:text-display font-medium mb-2 md:mb-10 z-10 relative leading-normal">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group"
              role="group"
              aria-labelledby={`stat-${index}-value`}
              aria-describedby={`stat-${index}-label`}
            >
              <p 
                id={`stat-${index}-value`}
                className="text-3xl font-semibold text-brand-primary group-hover:scale-110 transition-transform duration-200"
              >
                {stat.value}
              </p>
              <p 
                id={`stat-${index}-label`}
                className="mt-2 text-xl font-medium text-gray-800"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        {image && (
          <div className="mt-16">
            <img 
              src={image}
              alt="Team collaboration and digital marketing success"
              className="rounded-lg w-full h-auto mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
};