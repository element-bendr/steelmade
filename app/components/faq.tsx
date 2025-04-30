"use client";
import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer high-quality steel manufacturing solutions including custom fabrication, processing, and design consultancy."
  },
  {
    id: 2,
    question: "How can I request a quote?",
    answer: "You can request a quote through our Contact page by filling out the provided form."
  },
  {
    id: 3,
    question: "Do you offer after-sales support?",
    answer: "Yes, we provide comprehensive after-sales support to ensure your complete satisfaction."
  }
];

export function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="border rounded p-4">
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full text-left focus:outline-none"
            >
              <h3 className="text-xl font-semibold">{item.question}</h3>
            </button>
            {activeFAQ === item.id && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
