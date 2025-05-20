import { Series } from "@/components/portfolio/types";

export const portfolioSeries: Series[] = [
  { 
    id: 1, 
    title: "Director Series", 
    description: "Premium chairs designed for executive offices with superior ergonomics and style.", 
    imageUrl: "/images/director-series.jpg",
    products: [
      { 
        id: 101, 
        title: "Director Elite", 
        description: "Our flagship executive chair with premium leather upholstery.", 
        imageUrl: "/images/director-elite.jpg" 
      },
      { 
        id: 102, 
        title: "Director Pro", 
        description: "Professional-grade chair with advanced lumbar support.", 
        imageUrl: "/images/director-pro.jpg" 
      }
    ]
  },
  { 
    id: 2, 
    title: "Designer Desk Collection", 
    description: "Modern desk solutions that combine aesthetics with functionality.", 
    imageUrl: "/images/designer-desk.jpg",
    products: [
      { 
        id: 201, 
        title: "Horizon Desk", 
        description: "Minimalist design with ample workspace and integrated cable management.", 
        imageUrl: "/images/horizon-desk.jpg" 
      },
      { 
        id: 202, 
        title: "Apex Workstation", 
        description: "Adjustable height desk with smart connectivity options.", 
        imageUrl: "/images/apex-workstation.jpg" 
      }
    ]
  },
  { 
    id: 3, 
    title: "Storage Solutions", 
    description: "Versatile storage options for efficient office organization.", 
    imageUrl: "/images/storage.jpg",
    products: [
      { 
        id: 301, 
        title: "ModCabinet", 
        description: "Modular filing cabinet system with customizable compartments.", 
        imageUrl: "/images/modcabinet.jpg" 
      },
      { 
        id: 302, 
        title: "WallStore", 
        description: "Wall-mounted storage solution to maximize floor space.", 
        imageUrl: "/images/wallstore.jpg" 
      }
    ]
  }
];
