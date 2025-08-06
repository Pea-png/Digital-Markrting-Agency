import React from 'react';

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  'aria-label': string;
}

export interface FooterProps {
  logo?: React.ReactNode;
  socialLinks: SocialLink[];
  copyrightText: string;
  className?: string;
}

/**
 * Footer Component
 * Features:
 * - Centered logo and social media links
 * - Accessible social media navigation
 * - Responsive design
 * - Hover effects on social icons
 */
export const Footer: React.FC<FooterProps> = ({
  logo,
  socialLinks,
  copyrightText,
  className = '',
}) => {
  return (
    <footer className={`p-8 bg-white text-brand-primary py-20 ${className}`}>
      <div className="container mx-auto text-center">
        {/* Container for centering the logo and social media icons */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-6">
            {logo || (
              <svg 
                className="text-center" 
                width="200" 
                height="60" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <text 
                  x="50%" 
                  y="50%" 
                  textAnchor="middle" 
                  dominantBaseline="middle" 
                  className="font-poppins text-xl text-brand-primary font-bold" 
                  fill="#dc2626"
                >
                  Blaze
                </text>
              </svg>
            )}
          </div>

          {/* Social Media Links */}
          <nav 
            className="flex justify-center space-x-6 mb-6"
            aria-label="Social media links"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-md p-1"
                aria-label={link['aria-label']}
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
};

// Pre-defined social media icons for convenience
export const SocialIcons = {
  Instagram: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.055 1.805.247 2.225.414.51.198.877.433 1.264.82.387.387.622.754.82 1.264.167.42.359 1.019.414 2.225.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.206-.247 1.805-.414 2.225-.198.51-.433.877-.82 1.264-.387.387-.754.622-1.264.82-.42.167-1.019.359-2.225.414-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.055-1.805-.247-2.225-.414a3.444 3.444 0 01-1.264-.82 3.444 3.444 0 01-.82-1.264c-.167-.42-.359-1.019-.414-2.225-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-1.206.247-1.805.414-2.225.198-.51.433-.877.82-1.264.387-.387.754-.622 1.264-.82.42-.167 1.019-.359 2.225-.414 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.797 0 8.338.015 7.052.073 5.773.13 4.936.315 4.168.602c-.81.314-1.512.734-2.224 1.446C1.287 2.859.867 3.562.553 4.372.266 5.14.081 5.978.024 7.257.015 8.543 0 9.003 0 12s.015 3.457.073 4.743c.057 1.279.242 2.117.529 2.885.314.81.734 1.512 1.446 2.224.712.712 1.415 1.132 2.224 1.446.768.287 1.606.472 2.885.529 1.286.058 1.746.073 4.743.073s3.457-.015 4.743-.073c1.279-.057 2.117-.242 2.885-.529.81-.314 1.512-.734 2.224-1.446.712-.712 1.132-1.415 1.446-2.224.287-.768.472-1.606.529-2.885.058-1.286.073-1.746.073-4.743s-.015-3.457-.073-4.743c-.057-1.279-.242-2.117-.529-2.885-.314-.81-.734-1.512-1.446-2.224-.712-.712-1.415-1.132-2.224-1.446-.768-.287-1.606-.472-2.885-.529C15.457.015 14.997 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  ),
  YouTube: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.615 3.183c-1.082-.402-3.975-.466-7.615-.466s-6.534.064-7.615.466C2.653 3.585 2 4.684 2 6.093v11.814c0 1.409.653 2.508 2.385 2.91 1.081.402 3.975.466 7.615.466s6.534-.064 7.615-.466C21.347 20.415 22 19.316 22 17.907V6.093c0-1.409-.653-2.508-2.385-2.91zM9.75 15.02V9.066l5.76 2.978-5.76 2.976z" />
    </svg>
  ),
  LinkedIn: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.23 0H1.77C.792 0 0 .793 0 1.77v20.46C0 23.207.792 24 1.77 24h20.46c.978 0 1.77-.793 1.77-1.77V1.77C24 .793 23.207 0 22.23 0zm-15.66 20.452H3.266V9.005h3.306v11.447zM4.919 7.543a1.916 1.916 0 11.001-3.832 1.916 1.916 0 01-.001 3.832zm15.337 12.909h-3.302v-5.755c0-1.373-.03-3.143-1.915-3.143-1.92 0-2.212 1.5-2.212 3.046v5.852h-3.3V9.005h3.167v1.563h.044c.442-.837 1.518-1.719 3.126-1.719 3.34 0 3.957 2.198 3.957 5.058v6.546z" />
    </svg>
  ),
};