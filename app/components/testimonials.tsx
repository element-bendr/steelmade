import React from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    feedback: "SteelMade provided exceptional service and high-quality steel solutions. Highly recommended!",
    imageUrl: "/images/john.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "The craftsmanship and dedication of the team at SteelMade are unmatched.",
    imageUrl: "/images/jane.jpg"
  },
  {
    id: 3,
    name: "Alex Johnson",
    feedback: "Outstanding expertise and customer service, SteelMade is my go-to partner for steel projects.",
    imageUrl: "/images/alex.jpg"
  }
];

export function Testimonials() {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border p-4 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-2">
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <span className="font-semibold">{testimonial.name}</span>
            </div>
            <p className="text-gray-700">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
