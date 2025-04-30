"use client";

import React from 'react';
import { Team } from '../components/team';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="space-y-12"
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        {/* Hero Section */}
        <motion.section {...fadeIn} className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About <span className="bg-gradient-accent text-transparent bg-clip-text">Steelmade</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 1948, <span className="bg-gradient-accent text-transparent bg-clip-text">Steelmade</span> has been a pioneer in the Indian furniture sector, 
            specializing in innovative storage solutions and quality furniture systems.
          </p>
        </motion.section>

        {/* History & Overview Section */}
        <motion.section 
          {...fadeIn} 
          className="bg-gray-50 rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Profile</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Circa 1948, <span className="bg-gradient-accent text-transparent bg-clip-text">Steelmade</span> made its mark in the Indian furniture sector. 
              We have established a long-standing history in providing comprehensive 
              storage solutions, addressing the growing need for space conservation 
              across various sectors.
            </p>
          </div>
        </motion.section>

        {/* Products & Solutions Section */}
        <motion.section 
          {...fadeIn} 
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Our Solutions</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">•</span> Compactors
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Industrial Racking Systems
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Locker Systems
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Library Racking Systems
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Retail Racking Systems
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Optimiser Systems
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Cupboards
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Modular Desk Based Systems
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Quality & Design</h2>
            <p className="text-gray-600">
              All of <span className="bg-gradient-accent text-transparent bg-clip-text">Steelmade&apos;s</span> products are created with an aesthetic keeping in mind 
              the forever evolving &apos;design thinking&apos; aspect of the Indian corporate/industrial 
              sectors. Only the finest quality product components are used to create our 
              storage systems, seating systems and modular desk based systems.
            </p>
            <p className="text-gray-600">
              Innovation and improvisation are key elements to our creation process with 
              our qualified team of workers ever ready for a healthy challenge. 
              Customisation thereof becomes a key factor as per individual client needs.
            </p>
          </div>
        </motion.section>

        {/* After Sales Service Section */}
        <motion.section 
          {...fadeIn} 
          className="bg-blue-50 rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">After Sales Service</h2>
          <p className="text-gray-600">
            We intently stress on our after sales services as we believe that our role 
            does not end at providing you with an excellent product. The after sales 
            services are adjusted towards a very nominal cost for the said client.
          </p>
        </motion.section>

        {/* Quote Section */}
        <motion.section 
          {...fadeIn} 
          className="text-center py-12"
        >
          <blockquote className="text-2xl italic text-gray-700">
            &ldquo;On matters of style, swim with the current, on matters of principle, stand like a rock.&rdquo;
          </blockquote>
            <p className="mt-4 text-gray-600">&ndash; Thomas Jefferson</p>
        </motion.section>

        {/* Team Section */}
        <motion.section {...fadeIn}>
          <Team />
        </motion.section>
      </motion.div>
    </div>
  );
}
