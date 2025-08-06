import React from 'react';
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServicesProps {
  title: string;
  services: ServiceItem[];
  className?: string;
}

/**
 * Services Section Component
 * Features:
 * - Responsive card layout
 * - Icon, title, description for each service
 * - Customizable via props
 */
export const Services: React.FC<ServicesProps> =({
  title,
  services,
  className = '',
}) => {
  return (
    <section
      id="services"
      className={`bg-white py-20 px-8 lg:px-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="section-title">{title}</h2>

        {/* Services Grid */}
        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[var(--brand-primary)] text-3xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
