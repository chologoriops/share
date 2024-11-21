import React from 'react';

export default function BusinessValue() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-700 mb-4">Business Value</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through providing our clients with enhanced software solutions, we enabled them to access increased operational innovation. On average, our business customers are achieving 25% operational savings from software consultancy engagements with us.
          </p>
        </div>

        <div className="flex justify-center items-center gap-8">
          <div className="text-center">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-500">5%</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600">Initial Efficiency</p>
          </div>

          <span className="text-2xl font-bold text-[#ff6b00]">TO</span>

          <div className="text-center">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 border-4 border-blue-500 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-500">25%</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600">Improved Efficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
}