import React, { useState } from 'react';

export interface NavigationItem {
  label: string;
  href: string;
  'aria-label'?: string;
}

export interface NavigationProps {
  logo?: React.ReactNode;
  items: NavigationItem[];
  className?: string;
}

/**
 * Responsive Navigation Component
 * Features:
 * - Mobile hamburger menu with overlay
 * - Accessible keyboard navigation
 * - Smooth scroll to sections
 * - Fixed positioning with backdrop blur
 */
export const Navigation: React.FC<NavigationProps> = ({
  logo,
  items,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle smooth scroll to section
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleScroll(href);
    }
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav 
        className={`fixed w-full bg-white/95 backdrop-blur-sm shadow-sm px-8 lg:px-20 py-4 text-black z-50 top-0 left-0 ${className}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo || (
              <svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
                <text 
                  x="10" 
                  y="40" 
                  className="font-poppins text-xl text-brand-primary font-bold" 
                  fill="#dc2626"
                >
                  Blaze
                </text>
              </svg>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
<button
  onClick={() => setIsMobileMenuOpen(true)}
  aria-label="Open navigation menu"
  aria-expanded={isMobileMenuOpen}
className="bg-transparent border-none p-2 cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
>
  <svg
    className="w-8 h-8 text-gray-800"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m0 6H4" />
  </svg>
</button>






          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8" role="menubar">
            {items.map((item, index) => (
              <li key={index} role="none">
                <button
                  onClick={() => handleScroll(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className="hover:text-brand-primary transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-md px-2 py-1"
                  role="menuitem"
                  aria-label={item['aria-label'] || `Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-gray-800/95 z-50 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
              aria-label="Close navigation menu"
            >
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <ul className="text-gray-200 text-center space-y-4 mt-4" role="menu">
            {items.map((item, index) => (
              <li key={index} role="none">
                <button
                  onClick={() => handleScroll(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className="block w-full py-3 hover:bg-brand-primary transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-white"
                  role="menuitem"
                  aria-label={item['aria-label'] || `Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};