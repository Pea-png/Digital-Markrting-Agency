import React from 'react';

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}

export interface ClientsProps {
  title: string;
  clients: ClientLogo[];
  className?: string;
}

/**
 * Clients Section Component
 * Features:
 * - Responsive grid layout for client logos
 * - Hover effects with subtle animations
 * - Accessible client logo presentation
 * - Dark theme styling
 */
export const Clients: React.FC<ClientsProps> = ({
  title,
  clients,
  className = '',
}) => {
  return (
    <section 
      id="clients" 
      className={`lg:px-20 px-8 flex flex-col md:flex-row items-center justify-center py-20 bg-black ${className}`}
    >
      <div className="container text-left">
         {/* Title */}
       <h2 className="section-title">
  {title}
</h2>
        
        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-24 mb-8">
{clients.map(client => (
            <div 
              key={client.id}
              className="flex items-center justify-center"
              role="img"
              aria-label={`${client.name} logo`}
            >
              <img 
                src={client.logo}
                alt={`${client.name} company logo`}
                className="w-32 h-32 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};