import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      const sections = ['services', 'consulting', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', text: 'Services' },
    { href: '#consulting', text: 'Consulting' },
    { href: '#about', text: 'About Us' },
    { href: '#contact', text: 'Contact' }
  ];

  const NavLink = ({ href, text }: { href: string; text: string }) => (
    <a
      href={href}
      className={`relative px-3 py-2 transition-colors duration-300 ${
        isScrolled ? 'text-gray-800' : 'text-white'
      } hover:text-[#ff6b00] ${
        activeSection === href.slice(1) ? 'text-[#ff6b00]' : ''
      }`}
    >
      {text}
      {activeSection === href.slice(1) && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6b00] transform origin-left animate-expand" />
      )}
    </a>
  );

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-transparent backdrop-blur-sm bg-black/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <img 
                src="https://web.archive.org/web/20231026041914im_/https://olab.com.au/dist/images/olab-1.svg"
                alt="oLab Logo"
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* Middle: Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navLinks.map(link => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:0428770086"
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isScrolled
                  ? 'bg-[#ff6b00] text-white hover:bg-[#ff8533]'
                  : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:bg-gray-100/10`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-800 hover:text-[#ff6b00] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <a
                href="tel:0428770086"
                className="block px-3 py-2 text-white bg-[#ff6b00] hover:bg-[#ff8533] rounded-lg transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}