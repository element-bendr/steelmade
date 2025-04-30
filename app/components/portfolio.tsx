import React from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Project Alpha", description: "A cutting-edge solution showcasing our innovation in steel fabrication.", imageUrl: "/images/alpha.jpg" },
  { id: 2, title: "Project Beta", description: "A comprehensive case study of our custom steel processing project.", imageUrl: "/images/beta.jpg" },
  { id: 3, title: "Project Gamma", description: "A detailed look at our design and manufacturing excellence.", imageUrl: "/images/gamma.jpg" }
];

export function Portfolio() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Our Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {portfolioItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
