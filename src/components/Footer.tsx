import React from 'react';
import { Beaker, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/olab' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/olabau' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/olabau' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/olabau' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Beaker className="h-8 w-8 text-[#ff6b00]" />
              <span className="ml-2 text-xl font-bold">oLab</span>
            </div>
            <p className="text-gray-400">
              Software development and data focused digital marketing solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Software Development</li>
              <li>Digital Marketing</li>
              <li>Data Analytics</li>
              <li>Business Automation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} oLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}