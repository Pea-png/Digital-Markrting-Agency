import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Carousel } from './components/sections/Carousel';
import { Services } from './components/sections/Services';
import { Clients } from './components/sections/Clients';
import { FAQ } from './components/sections/FAQ';
import { Footer, SocialIcons } from './components/layout/Footer';
import { ContactForm } from './components/sections/ContactForm';
import type { ContactFormData } from './components/sections/ContactForm';

import "./styles/global.css";
// Sample data following the design system
const navigationItems = [
  { label: 'About Us', href: '#about', 'aria-label': 'Learn more about our company' },
  { label: 'Case Studies', href: '#case', 'aria-label': 'View our successful projects' },
  { label: 'Services', href: '#service', 'aria-label': 'Explore our services' },
  { label: 'FAQs', href: '#faqs', 'aria-label': 'Frequently asked questions' },
  { label: 'Contact', href: '#contactForm', 'aria-label': 'Get in touch with us' },
];

const heroData = {
  title: "Boost Your Social Media Presence",
  subtitle: "with Expert Local Specialists",
  description: "Blaze helps businesses grow online with expert digital marketing services. From SEO to social media, we create strategies that get results.",
  ctaText: "Get Started",
  ctaHref: "#contactForm",
  images: {
    main: "https://i.pinimg.com/originals/b9/70/13/b97013ba9ee72833c6d892799ba97821.gif",
    secondary1: "https://i.pinimg.com/564x/f4/0b/6c/f40b6c5d9094c405d98c1feb2aa3fb8d.jpg",
    secondary2: "https://i.pinimg.com/564x/82/d9/47/82d9476b60b30ed844030c7147195432.jpg",
  },
};

const statsData = {
  title: "Your digital marketing goals are our priority",
  description: "Discover how our extensive global network empowers startups and fuels innovation. We connect visionary founders with the resources they need to thrive.",
  stats: [
    { value: "5M+", label: "Customers" },
    { value: "70", label: "Team members" },
    { value: "240+", label: "Partners" },
    { value: "100+", label: "Awards won" },
  ],
  image: "https://i.pinimg.com/originals/1b/91/84/1b9184d0ccc0d9652e6e7ad0aa02b1d8.gif",
};

const carouselData = {
  title: "Case Studies",
  subtitle: "Since 2013, we've worked with some of Australia's most dynamic brands to transform their digital marketing.",
  items: [
    {
      id: "1",
      image: "https://i.pinimg.com/564x/7b/14/0a/7b140a0254e3c9e55c6bc26d3184d9fe.jpg",
      title: "OLMA",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    },
    {
      id: "2",
      image: "https://i.pinimg.com/564x/00/45/9d/00459d5235a9e8b73963c28c33d31ce9.jpg",
      title: "KOLN",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    },
    {
      id: "3",
      image: "https://i.pinimg.com/564x/d3/82/a6/d382a669b8e4a71f3e220b2204573108.jpg",
      title: "Ybleaders",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    },
    {
      id: "4",
      image: "https://i.pinimg.com/564x/2b/26/0c/2b260c38f56be0dfcfee20af6c6585dc.jpg",
      title: "INT",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    },
    {
      id: "5",
      image: "https://i.pinimg.com/564x/ad/18/20/ad1820f0295d270d6dcfaf8061e02d11.jpg",
      title: "Picnic Plan",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    },
    {
      id: "6",
      image: "https://i.pinimg.com/564x/1e/3c/2f/1e3c2f04798d10c89e894982140ded18.jpg",
      title: "Chic Chic",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    },
  ],
};

const ServiceIcons = {
  SEO: (
    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="7"></circle>
      <path d="m21 21-6-6"></path>
    </svg>
  ),
  Advertising: (
    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <circle cx="12" cy="12" r="4"></circle>
    </svg>
  ),
  EmailMarketing: (
    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4h20v16H2V4z"></path>
      <path d="M2 4l10 7L22 4"></path>
      <path d="M2 20l10-7 10 7"></path>
    </svg>
  ),
};

const servicesData = {
  title: "Our Services",
  services: [
    {
      id: "1",
      title: "SEO Optimization",
      description: "Enhance your search engine rankings with our tailored SEO strategies.",
      icon: ServiceIcons.SEO,
    },
    {
      id: "2",
      title: "Advertising",
      description: "Maximize your ROI with our data-driven PPC advertising campaigns.",
      icon: ServiceIcons.Advertising,
    },
    {
      id: "3",
      title: "Email Marketing",
      description: "Engage and retain your customers with personalized email marketing.",
      icon: ServiceIcons.EmailMarketing,
    },
  ],
};

const clientsData = {
  title: "Our Clients",
  clients: [
    { id: "1", name: "Client 1", logo: "https://i.pinimg.com/564x/0d/dc/5d/0ddc5daf87171905680d582a663d2179.jpg" },
    { id: "2", name: "Client 2", logo: "https://i.pinimg.com/564x/4d/74/4c/4d744c32123f84b1740861d2df5b734d.jpg" },
    { id: "3", name: "Client 3", logo: "https://i.pinimg.com/564x/05/e9/15/05e91598419f3c005aab09ed4ffbfa5a.jpg" },
    { id: "4", name: "Client 4", logo: "https://i.pinimg.com/564x/26/4d/3e/264d3ee2dd8d7722ebddc0e2208133a6.jpg" },
    { id: "5", name: "Client 5", logo: "https://i.pinimg.com/564x/ee/55/9b/ee559bcf82929c2e6cbb88f983550a0a.jpg" },
    { id: "6", name: "Client 6", logo: "https://i.pinimg.com/564x/62/88/91/6288912a4224feac364a4f77fedbe8a7.jpg" },
  ],
};

const faqData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      id: "1",
      question: "How can you get started with our agency?",
      answer: "To get started, contact us through our website's contact form, email, or phone. We'll schedule an initial consultation to discuss your needs and how we can help you achieve your goals.",
    },
    {
      id: "2",
      question: "How do we measure success?",
      answer: "We utilize analytics tools, key performance indicators (KPIs), and regular reporting to track metrics such as website traffic, conversion rates, engagement levels, and return on investment (ROI).",
    },
    {
      id: "3",
      question: "What is our pricing structure?",
      answer: "Our pricing varies depending on the specific services and project scope. We offer both project-based and retainer-based pricing models, with detailed quotes provided during the initial consultation.",
    },
    {
      id: "4",
      question: "What sets our agency apart?",
      answer: "Our personalized approach, attention to detail, and commitment to delivering high-quality results distinguish us from others.",
    },
    {
      id: "5",
      question: "What services does your agency provide?",
      answer: "We offer a comprehensive range of services including digital marketing, web development, UX/UI design, content creation, SEO, social media management, and branding.",
    },
    {
      id: "6",
      question: "Which industries do we serve?",
      answer: "We have extensive experience across various industries such as technology, healthcare, finance, retail, and non-profits.",
    },
  ],
};

const contactFormData = {
  title: "Contact Us",
  subtitle: "Our team is here to assist you and ensure you have all the support you need to succeed.",
};

const footerData = {
  socialLinks: [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: SocialIcons.Instagram,
      'aria-label': "Follow us on Instagram",
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: SocialIcons.YouTube,
      'aria-label': "Subscribe to our YouTube channel",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: SocialIcons.LinkedIn,
      'aria-label': "Connect with us on LinkedIn",
    },
  ],
  copyrightText: "© 2024 Digital Marketing Agency. All rights reserved.",
};

// --- Fix Area: Handle contact form submission with correct typing and return void promise ---
function App() {
  const handleContactSubmit = async (formData: ContactFormData): Promise<void> => {
    // Simulate API call delay
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navigation items={navigationItems} />
      <Hero {...heroData} />
      <Stats {...statsData} />
      <Carousel {...carouselData} autoPlay={true} />
      <Services {...servicesData} />
      <Clients {...clientsData} />
      <FAQ {...faqData} />
      <ContactForm {...contactFormData} onSubmit={handleContactSubmit} />
      <Footer {...footerData} />
    </div>
  );
}

export default App;