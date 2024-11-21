import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users2, Lightbulb } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative digital solutions that drive growth and success in the modern marketplace.'
    },
    {
      icon: Users2,
      title: 'Our Values',
      description: 'We believe in transparency, innovation, and delivering exceptional value to our clients through collaborative partnerships.'
    },
    {
      icon: Award,
      title: 'Our Expertise',
      description: 'With years of experience in software development and digital marketing, we bring deep industry knowledge to every project.'
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      description: 'We combine creative thinking with data-driven strategies to deliver solutions that exceed expectations and drive real results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-700 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to transforming businesses through technology and strategic marketing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Our team collaboration"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <feature.icon className="h-8 w-8 text-[#ff6b00]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}