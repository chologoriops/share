import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormState({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-700 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Let's discuss how we can help your business grow</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent transition-colors"
                    required
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent transition-colors"
                    required
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-[#ff6b00] focus:border-transparent transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ff6b00] text-white py-4 px-6 rounded-lg hover:bg-[#ff8533] transition-colors transform hover:scale-105 duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8 flex flex-col justify-center">
              <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <Phone className="w-8 h-8 text-[#ff6b00] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600 text-lg">0428 770 086</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <Mail className="w-8 h-8 text-[#ff6b00] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600 text-lg">contact@olab.com.au</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <MapPin className="w-8 h-8 text-[#ff6b00] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 text-lg">Sydney, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}