import type { CategoryCollections, SubCategoryCollections } from "@/types/collections";

// Helper function to format date string
const formatDate = (date: Date): string => date.toISOString();

// Initial collections data structure
export const collections: CategoryCollections = {
  title: "All Collections",
  description: "Browse our complete catalog of furniture collections",
  chairs: {
    "director-series": {
      id: "director-series",
      title: "Director Series",
      description: "Executive office chairs offering unparalleled comfort and style",
      metadata: {
        title: "Director Series",
        description: "Executive office chairs offering unparalleled comfort and style",
        seoDescription: "Experience luxury with our Director Series office chairs. Premium executive seating designed for superior comfort and professional excellence.",
        coverImage: {
          url: "/images/collections/executive-series-cover.webp",
          width: 800,
          height: 600
        },
        features: ["Executive Design", "Premium Materials", "Ergonomic Support"],
        images: [
          {
            url: "/images/collections/executive-series-placeholder1.webp",
            width: 800,
            height: 600
          },
          {
            url: "/images/collections/executive-series-placeholder2.webp",
            width: 800,
            height: 600
          }
        ],
        lastModified: new Date("2025-05-09T00:00:00.000Z")
      },
      products: {
        "executive-plus": {
          id: "executive-plus",
          name: "Director Executive Plus",
          description: "Premium executive chair with enhanced comfort features and luxurious materials",
          seoDescription: "Director Executive Plus - Premium executive chair with enhanced comfort features and luxurious finishes.",
          images: [{
            url: "/images/collections/ergonomic-series-cover.webp",
            width: 800,
            height: 600
          }],
          features: [
            "Premium leather upholstery",
            "Advanced ergonomic design",
            "Executive-grade comfort",
            "Enhanced lumbar support",
            "Memory foam cushioning"
          ],
          specifications: {
            "Material": "Premium leather and high-grade aluminum",
            "Weight Capacity": "400 lbs",
            "Warranty": "15 years"
          },
          materials: ["Premium leather", "Aircraft-grade aluminum", "Memory foam"],
          dimensions: {
            width: "30 inches",
            height: "50-54 inches",
            depth: "29 inches",
            weight: "48 lbs"
          },
          lastModified: new Date("2025-05-09T00:00:00.000Z")
        }
      },
      features: [
        "Executive Design",
        "Premium Materials",
        "Ergonomic Support",
        "Memory Foam Cushioning",
        "Enhanced Lumbar Support",
        "Premium Leather"
      ],
      materials: [
        "Premium leather",
        "Aircraft-grade aluminum",
        "Memory foam",
        "High-density padding"
      ],
      priceRange: {
        min: "$999",
        max: "$1,999"
      },
      specifications: {
        commonSpecs: {
          "Warranty": "15 years",
          "Assembly": "White glove delivery and assembly included"
        },
        variableSpecs: [
          "Weight Capacity",
          "Material",
          "Adjustability"
        ]
      },
      lastModified: formatDate(new Date("2025-05-09T00:00:00.000Z"))
    },
    "designer-series": {
      id: "designer-series",
      title: "Designer Series",
      description: "Contemporary office chairs that blend aesthetics with ergonomic excellence",
      metadata: {
        title: "Designer Series",
        description: "Contemporary office chairs that blend aesthetics with ergonomic excellence",
        seoDescription: "Discover our Designer Series office chairs. Modern seating solutions that combine cutting-edge design with optimal comfort for the discerning professional.",
        coverImage: {
          url: "/images/collections/designer-series-cover.webp",
          width: 800,
          height: 600
        },
        features: ["Modern Design", "Ergonomic Excellence", "Premium Quality"],
        images: [
          {
            url: "/images/collections/designer-series-placeholder1.webp",
            width: 800,
            height: 600
          },
          {
            url: "/images/collections/designer-series-placeholder2.webp",
            width: 800,
            height: 600
          }
        ],
        lastModified: new Date("2025-05-09T00:00:00.000Z")
      },
      products: {
        "designer-elite": {
          id: "designer-elite",
          name: "Designer Elite",
          description: "Modern designer chair with premium ergonomic features",
          seoDescription: "Designer Elite - Contemporary office chair combining modern aesthetics with advanced ergonomic features.",
          images: [{
            url: "/images/collections/designer-series-placeholder1.webp",
            width: 800,
            height: 600,
            alt: "Designer Elite Chair"
          }],
          features: [
            "Contemporary design",
            "Adjustable lumbar support",
            "Premium mesh back",
            "Synchronized tilt",
            "4D armrests"
          ],
          specifications: {
            "Material": "Premium mesh and aluminum",
            "Weight Capacity": "350 lbs",
            "Warranty": "10 years"
          },
          materials: ["Premium mesh", "Aircraft-grade aluminum", "High-density foam"],
          dimensions: {
            width: "28 inches",
            height: "48-52 inches",
            depth: "27 inches",
            weight: "42 lbs"
          },
          lastModified: new Date("2025-05-09T00:00:00.000Z")
        },
        "designer-pro": {
          id: "designer-pro",
          name: "Designer Pro",
          description: "Professional-grade designer chair with enhanced features",
          seoDescription: "Designer Pro - Professional seating solution with advanced ergonomic features and sleek design.",
          images: [{
            url: "/images/collections/designer-series-placeholder2.webp",
            width: 800,
            height: 600,
            alt: "Designer Pro Chair"
          }],
          features: [
            "Professional design",
            "Enhanced lumbar system",
            "Premium mesh back",
            "Multi-tilt mechanism",
            "5D armrests"
          ],
          specifications: {
            "Material": "Premium mesh and aluminum",
            "Weight Capacity": "375 lbs",
            "Warranty": "10 years"
          },
          materials: ["Premium mesh", "Aircraft-grade aluminum", "High-density foam"],
          dimensions: {
            width: "29 inches",
            height: "49-53 inches",
            depth: "28 inches",
            weight: "44 lbs"
          },
          lastModified: new Date("2025-05-09T00:00:00.000Z")
        },
        "designer-comfort": {
          id: "designer-comfort",
          name: "Designer Comfort",
          description: "Luxurious designer chair focused on maximum comfort",
          seoDescription: "Designer Comfort - Where luxury meets ergonomics in a beautifully designed package.",
          images: [{
            url: "/images/collections/designer-series-placeholder3.webp",
            width: 800,
            height: 600,
            alt: "Designer Comfort Chair"
          }],
          features: [
            "Comfort-focused design",
            "Ultra-plush padding",
            "Premium fabric",
            "Advanced tilt",
            "Padded armrests"
          ],
          specifications: {
            "Material": "Premium fabric and aluminum",
            "Weight Capacity": "360 lbs",
            "Warranty": "10 years"
          },
          materials: ["Premium fabric", "Aircraft-grade aluminum", "Ultra-plush foam"],
          dimensions: {
            width: "30 inches",
            height: "50-54 inches",
            depth: "29 inches",
            weight: "46 lbs"
          },
          lastModified: new Date("2025-05-09T00:00:00.000Z")
        },
        "designer-exec": {
          id: "designer-exec",
          name: "Designer Executive",
          description: "Executive-style designer chair with premium features",
          seoDescription: "Designer Executive - Premium executive seating with contemporary design elements.",
          images: [{
            url: "/images/collections/designer-series-placeholder4.webp",
            width: 800,
            height: 600,
            alt: "Designer Executive Chair"
          }],
          features: [
            "Executive design",
            "Premium padding",
            "Leather accents",
            "Executive tilt",
            "Chrome armrests"
          ],
          specifications: {
            "Material": "Premium leather and aluminum",
            "Weight Capacity": "380 lbs",
            "Warranty": "10 years"
          },
          materials: ["Premium leather", "Aircraft-grade aluminum", "Memory foam"],
          dimensions: {
            width: "31 inches",
            height: "51-55 inches",
            depth: "30 inches",
            weight: "48 lbs"
          },
          lastModified: new Date("2025-05-09T00:00:00.000Z")
        },
        "designer-mesh": {
          id: "designer-mesh",
          name: "Designer Mesh",
          description: "Breathable mesh designer chair for all-day comfort",
          seoDescription: "Designer Mesh - Modern office chair with breathable mesh design for optimal comfort.",
          images: [{
            url: "/images/collections/designer-series-placeholder5.webp",
            width: 800,
            height: 600,
            alt: "Designer Mesh Chair"
          }],
          features: [
            "Full mesh design",
            "Breathable back",
            "Contoured seat",
            "Fluid tilt",
            "Adjustable arms"
          ],
          specifications: {
            "Material": "Premium mesh and aluminum",
            "Weight Capacity": "340 lbs",
            "Warranty": "10 years"
          },
          materials: ["Premium mesh", "Aircraft-grade aluminum", "Contoured foam"],
          dimensions: {
            width: "28 inches",
            height: "48-52 inches",
            depth: "27 inches",
            weight: "40 lbs"
          },
          lastModified: new Date("2025-05-09T00:00:00.000Z")
        },
        "designer-plus": {
          id: "designer-plus",
          name: "Designer Plus",
          description: "Enhanced designer chair with additional features",
          seoDescription: "Designer Plus - Premium office chair with enhanced features and modern aesthetics.",
          images: [{
            url: "/images/collections/designer-series-placeholder6.webp",
            width: 800,
            height: 600,
            alt: "Designer Plus Chair"
          }],
          features: [
            "Enhanced design",
            "Premium support",
            "Hybrid materials",
            "Advanced mechanism",
            "Premium armrests"
          ],
          specifications: {
            "Material": "Premium hybrid materials",
            "Weight Capacity": "365 lbs",
            "Warranty": "10 years"
          },
          materials: ["Premium hybrid materials", "Aircraft-grade aluminum", "Dual-density foam"],
          dimensions: {
            width: "29 inches",
            height: "49-53 inches",
            depth: "28 inches",
            weight: "43 lbs"
          },
          lastModified: new Date("2025-05-09T00:00:00.000Z")
        }
      },
      features: [
        "Modern Design",
        "Ergonomic Excellence",
        "Premium Quality",
        "Synchronized Tilt",
        "4D Armrests",
        "Adjustable Support"
      ],
      materials: [
        "Premium mesh",
        "Aircraft-grade aluminum",
        "High-density foam",
        "Engineered polymer"
      ],
      priceRange: {
        min: "$799",
        max: "$1,599"
      },
      specifications: {
        commonSpecs: {
          "Warranty": "10 years",
          "Assembly": "White glove delivery and assembly included"
        },
        variableSpecs: [
          "Weight Capacity",
          "Material",
          "Adjustability"
        ]
      },
      lastModified: formatDate(new Date("2025-05-09T00:00:00.000Z"))
    },
    "executive-series": {
      id: "executive-series",
      title: "Executive Series",
      description: "Luxurious office chairs designed for corporate leadership",
      metadata: {
        title: "Executive Series",
        description: "Luxurious office chairs designed for corporate leadership",
        seoDescription: "Elevate your workspace with our Executive Series chairs. Premium seating solutions crafted for corporate leaders who demand excellence.",
        coverImage: {
          url: "/images/collections/executive-series-cover.webp",
          width: 800,
          height: 600
        },
        features: ["Luxury Design", "Premium Comfort", "Executive Features"],
        images: [
          {
            url: "/images/collections/executive-series-placeholder1.webp",
            width: 800,
            height: 600
          },
          {
            url: "/images/collections/executive-series-placeholder2.webp",
            width: 800,
            height: 600
          }
        ],
        lastModified: new Date("2025-05-09T00:00:00.000Z")
      },
      products: {
        "executive-premium": {
          id: "executive-premium",
          name: "Executive Premium",
          description: "Luxury executive chair with premium leather and advanced features",
          seoDescription: "Executive Premium - Luxury office chair featuring premium leather and sophisticated comfort features.",
          images: [{
            url: "/images/collections/executive-series-cover.webp",
            width: 800,
            height: 600
          }],
          features: [
            "Full-grain leather",
            "Dynamic recline",
            "Memory foam padding",
            "Integrated headrest",
            "Multi-function armrests"
          ],
          specifications: {
            "Material": "Full-grain leather and polished aluminum",
            "Weight Capacity": "450 lbs",
            "Warranty": "20 years"
          },
          materials: ["Full-grain leather", "Polished aluminum", "Memory foam"],
          dimensions: {
            width: "32 inches",
            height: "52-56 inches",
            depth: "30 inches",
            weight: "52 lbs"
          },
          lastModified: new Date("2025-05-09T00:00:00.000Z")
        }
      },
      features: [
        "Luxury Design",
        "Premium Comfort",
        "Executive Features",
        "Dynamic Recline",
        "Integrated Headrest",
        "Memory Foam"
      ],
      materials: [
        "Full-grain leather",
        "Polished aluminum",
        "Memory foam",
        "Premium padding"
      ],
      priceRange: {
        min: "$1,299",
        max: "$2,499"
      },
      specifications: {
        commonSpecs: {
          "Warranty": "20 years",
          "Assembly": "White glove delivery and assembly included"
        },
        variableSpecs: [
          "Weight Capacity",
          "Material",
          "Adjustability"
        ]
      },
      lastModified: formatDate(new Date("2025-05-09T00:00:00.000Z"))
    },
    "ergonomic-series": {
      id: "ergonomic-series",
      title: "Ergonomic Series",
      description: "Scientifically designed chairs for optimal comfort and health",
      metadata: {
        title: "Ergonomic Series",
        description: "Scientifically designed chairs for optimal comfort and health",
        seoDescription: "Experience ultimate comfort with our Ergonomic Series chairs. Scientifically engineered seating solutions that prioritize your health and productivity.",
        coverImage: {
          url: "/images/collections/ergonomic-series-cover.webp",
          width: 800,
          height: 600
        },
        features: ["Advanced Ergonomics", "Health-Focused", "Adjustable Support"],
        images: [
          {
            url: "/images/collections/ergonomic-series-placeholder1.webp",
            width: 800,
            height: 600
          },
          {
            url: "/images/collections/ergonomic-series-placeholder2.webp",
            width: 800,
            height: 600
          }
        ],
        lastModified: new Date("2025-05-09T00:00:00.000Z")
      },
      products: {
        "ergonomic-pro": {
          id: "ergonomic-pro",
          name: "Ergonomic Pro",
          description: "Advanced ergonomic chair with comprehensive adjustment options",
          seoDescription: "Ergonomic Pro - Advanced office chair with scientifically-designed comfort features and extensive adjustability.",
          images: [{
            url: "/images/collections/ergonomic-series-cover.webp",
            width: 800,
            height: 600
          }],
          features: [
            "Advanced lumbar system",
            "Independent seat tilt",
            "Dynamic back support",
            "Adjustable headrest",
            "Precision controls"
          ],
          specifications: {
            "Material": "Engineered mesh and reinforced polymer",
            "Weight Capacity": "375 lbs",
            "Warranty": "12 years"
          },
          materials: ["Engineered mesh", "Reinforced polymer", "Contoured foam"],
          dimensions: {
            width: "29 inches",
            height: "49-53 inches",
            depth: "28 inches",
            weight: "45 lbs"
          },
          lastModified: new Date("2025-05-09T00:00:00.000Z")
        }
      },
      features: [
        "Advanced Ergonomics",
        "Health-Focused",
        "Adjustable Support",
        "Dynamic Back",
        "Precision Controls",
        "Independent Tilt"
      ],
      materials: [
        "Engineered mesh",
        "Reinforced polymer",
        "Contoured foam",
        "Precision components"
      ],
      priceRange: {
        min: "$899",
        max: "$1,799"
      },
      specifications: {
        commonSpecs: {
          "Warranty": "12 years",
          "Assembly": "White glove delivery and assembly included"
        },
        variableSpecs: [
          "Weight Capacity",
          "Material",
          "Adjustability"
        ]
      },
      lastModified: formatDate(new Date("2025-05-09T00:00:00.000Z"))
    }
  },
  desks: {
    "executive-series": {
      id: "executive-series",
      title: "Executive Collection",
      description: "Premium executive desks with sophisticated design elements.",
      metadata: {
        title: "Executive Collection",
        description: "Premium executive desks with sophisticated design elements.",
        seoDescription: "Discover our Executive Collection desks - where sophistication meets functionality. Premium office desks designed for executive spaces.",
        coverImage: {
          url: "/images/collections/executive-series-cover.webp",
          width: 800,
          height: 600
        },
        features: ["Executive Design", "Premium Materials", "Integrated Storage"],
        images: [
          {
            url: "/images/desks/executive-series/placeholder1.webp",
            width: 800,
            height: 600
          },
          {
            url: "/images/desks/executive-series/placeholder2.webp",
            width: 800,
            height: 600
          }
        ],
        lastModified: new Date("2025-05-11T00:00:00.000Z")
      },
      features: ["Executive Design", "Premium Materials", "Integrated Storage", "Cable Management"],
      materials: ["Premium wood veneer", "High-grade steel"],
      priceRange: { min: "$1499", max: "$2999" },
      specifications: {
        commonSpecs: {
          "Warranty": "10 years",
          "Assembly": "White glove delivery and assembly included"
        },
        variableSpecs: ["Dimensions", "Material"]
      },
      lastModified: formatDate(new Date("2025-05-11T00:00:00.000Z")),
      products: {}
    }
  },
  storage: {
    "executive-series": {
      id: "executive-series",
      title: "Executive Storage Collection",
      description: "Premium storage solutions with executive-grade materials and design.",
      metadata: {
        title: "Executive Storage Collection",
        description: "Premium storage solutions with executive-grade materials and design.",
        seoDescription: "Transform your workspace with our Executive Storage Collection. Premium cabinets and storage solutions that combine functionality with sophistication.",
        coverImage: {
          url: "/images/collections/executive-series-cover.webp",
          width: 800,
          height: 600
        },
        features: ["Executive Design", "Premium Materials", "Organized Storage"],
        images: [
          {
            url: "/images/storage/executive-series/placeholder1.webp",
            width: 800,
            height: 600
          },
          {
            url: "/images/storage/executive-series/placeholder2.webp",
            width: 800,
            height: 600
          }
        ],
        lastModified: new Date("2025-05-11T00:00:00.000Z")
      },
      features: ["Executive Design", "Premium Materials", "Organized Storage", "Security Features"],
      materials: ["Premium wood veneer", "Reinforced steel"],
      priceRange: { min: "$999", max: "$2499" },
      specifications: {
        commonSpecs: {
          "Warranty": "10 years",
          "Assembly": "White glove delivery and assembly included"
        },
        variableSpecs: ["Dimensions", "Material", "Security Level"]
      },
      lastModified: formatDate(new Date("2025-05-11T00:00:00.000Z")),
      products: {}
    }
  }
};
