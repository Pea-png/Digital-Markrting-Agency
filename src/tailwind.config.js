/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Brand Colors - Design System
      colors: {
        brand: {
          primary: '#dc2626', // red-600
          secondary: '#ef4444', // red-500
          light: '#fef2f2', // red-50
          accent: '#fee2e2', // red-100
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      // Typography System
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1' }], // 56px
        'display': ['3rem', { lineHeight: '1.2' }], // 48px
        'title': ['2.25rem', { lineHeight: '1.3' }], // 36px
        'subtitle': ['1.5rem', { lineHeight: '1.4' }], // 24px
        'body': ['1rem', { lineHeight: '1.5' }], // 16px
        'caption': ['0.875rem', { lineHeight: '1.4' }], // 14px
      },
      // Spacing System
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      },
      // Component-specific utilities
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      // Container max-widths
      maxWidth: {
        '8xl': '88rem', // 1408px
      },
    },
  },
  plugins: [],
}