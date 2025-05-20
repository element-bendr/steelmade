import type { ProductCategory, SeriesMetadata } from "@/types/collections";
import type { ProductData } from "@/types/products";

export const MOCK_SERIES: Record<ProductCategory, Record<string, SeriesMetadata>> = {
  chairs: {
    'designer-series': {
      id: 'designer-series',
      title: 'Designer Series',
      description: 'Premium ergonomic chairs designed for modern workspaces',
      seoDescription: 'Explore our Designer Series of premium ergonomic chairs, offering comfort and style for modern offices.',
      category: 'chairs',
      imageUrl: '/images/collections/chairs/designer-series-cover.webp',
      coverImage: { url: '/images/collections/chairs/designer-series-cover.webp', alt: 'Designer Series ergonomic chair', width: 800, height: 600 },
      images: [{ url: '/images/collections/chairs/designer-series-detail.webp', alt: 'Designer Series chair detail', width: 800, height: 600 }],
      features: [
        'Ergonomic Design',
        'Premium Materials',
        'Adjustable Components',
        'Modern Aesthetics'
      ],
      specifications: {
        'Material': 'Premium leather and steel',
        'Weight Capacity': '300 lbs',
        'Adjustable Height': 'Yes',
        'Warranty': '5 years'
      },
      lastModified: new Date().toISOString(),
      products: {}
    }
  },
  desks: {
    'standing-desk': {
      id: 'standing-desk',
      title: 'Standing Desk Series',
      description: 'Height-adjustable desks for ergonomic workspaces',
      seoDescription: 'Discover our Standing Desk Series, promoting health and productivity with height-adjustability.',
      category: 'desks',
      imageUrl: '/images/collections/desks/standing-desk-cover.webp',
      coverImage: { url: '/images/collections/desks/standing-desk-cover.webp', alt: 'Standing Desk Series', width: 800, height: 600 },
      images: [{ url: '/images/collections/desks/standing-desk-detail.webp', alt: 'Standing Desk detail', width: 800, height: 600 }],
      features: ['Height Adjustable', 'Spacious Worksurface', 'Quiet Motor'],
      lastModified: new Date().toISOString(),
      products: {}
    }
  },
  "storage-solutions": {
    "metal-storages": {
      id: "metal-storages",
      title: "Metal Storages",
      category: "storage-solutions",
      description: "Durable and versatile metal storage solutions for various needs.",
      seoDescription: "Explore our range of metal storages, offering robust and secure solutions for offices, workshops, and industrial environments.",
      coverImage: { url: '/images/collections/storage-solutions/metal-storages-cover.webp', width: 800, height: 600, alt: "Metal Storage Cabinets" },
      features: ["Heavy-Duty Steel Construction", "Secure Locking Mechanisms", "Adjustable Shelving"],
      images: [
        { url: '/images/collections/storage-solutions/metal-storages/cabinet-group.webp', width: 800, height: 600, alt: "Group of Metal Storage Cabinets" },
        { url: '/images/collections/storage-solutions/metal-storages/locker-single.webp', width: 800, height: 600, alt: "Single Metal Locker" }
      ],
      lastModified: new Date("2025-05-15").toISOString(),
      products: {}
    }
  },
  "school-furniture": {
    'classroom-essentials': {
      id: 'classroom-essentials',
      title: 'Classroom Essentials',
      description: 'Durable furniture for educational environments',
      seoDescription: 'Equip your learning spaces with our Classroom Essentials, built for durability and student engagement.',
      category: 'school-furniture',
      imageUrl: '/images/collections/school-furniture/classroom-essentials-cover.webp',
      coverImage: { url: '/images/collections/school-furniture/classroom-essentials-cover.webp', alt: 'Classroom Essentials furniture', width: 800, height: 600 },
      images: [{ url: '/images/collections/school-furniture/classroom-essentials-detail.webp', alt: 'Classroom Essentials detail', width: 800, height: 600 }],
      features: ['Student-Safe Materials', 'Heavy-Duty Use', 'Ergonomic for Kids'],
      lastModified: new Date().toISOString(),
      products: {}
    },
    'classroom-seating': {
      id: 'classroom-seating',
      title: 'Classroom Seating',
      description: 'Comfortable and durable seating solutions for classrooms.',
      seoDescription: 'Discover our Classroom Seating collection, designed for student comfort and engagement.',
      category: 'school-furniture',
      imageUrl: '/images/collections/school-furniture/classroom-seating-cover.webp',
      coverImage: { url: '/images/collections/school-furniture/classroom-seating-cover.webp', alt: 'Classroom Seating', width: 800, height: 600 },
      images: [{ url: '/images/collections/school-furniture/classroom-seating-detail.webp', alt: 'Classroom Seating detail', width: 800, height: 600 }],
      features: ['Ergonomic Design', 'Durable Materials', 'Stackable Options'],
      lastModified: new Date().toISOString(),
      products: {}
    }
  },
  "hospital-furniture": {
    'patient-care': {
      id: 'patient-care',
      title: 'Patient Care Series',
      description: 'Specialized furniture for healthcare facilities',
      seoDescription: 'Support healing environments with our Patient Care Series, designed for safety and comfort in healthcare.',
      category: 'hospital-furniture',
      imageUrl: '/images/collections/hospital-furniture/patient-care-cover.webp',
      coverImage: { url: '/images/collections/hospital-furniture/patient-care-cover.webp', alt: 'Patient Care Series furniture', width: 800, height: 600 },
      images: [{ url: '/images/collections/hospital-furniture/patient-care-detail.webp', alt: 'Patient Care Series detail', width: 800, height: 600 }],
      features: ['Medical Grade Materials', 'Easy to Clean', 'Patient Comfort'],
      lastModified: new Date().toISOString(),
      products: {}
    },
    'patient-room': {
      id: 'patient-room',
      title: 'Patient Room Solutions',
      description: 'Comprehensive furniture solutions for patient rooms.',
      seoDescription: 'Furnish patient rooms with our durable and functional furniture, designed for comfort and caregiver efficiency.',
      category: 'hospital-furniture',
      imageUrl: '/images/collections/hospital-furniture/patient-room-cover.webp',
      coverImage: { url: '/images/collections/hospital-furniture/patient-room-cover.webp', alt: 'Patient Room Solutions', width: 800, height: 600 },
      images: [{ url: '/images/collections/hospital-furniture/patient-room-detail.webp', alt: 'Patient Room detail', width: 800, height: 600 }],
      features: ['Comfortable Design', 'Easy Accessibility', 'Durable Construction'],
      lastModified: new Date().toISOString(),
      products: {}
    }
  },
  "racking-systems": {
    'heavy-duty-racking': {
      id: 'heavy-duty-racking',
      title: 'Heavy Duty Racking',
      description: 'Robust racking systems for industrial storage.',
      seoDescription: 'Maximize your warehouse efficiency with our Heavy Duty Racking systems, built for strength and durability.',
      category: 'racking-systems',
      imageUrl: '/images/collections/racking-systems/heavy-duty-racking-cover.webp',
      coverImage: { url: '/images/collections/racking-systems/heavy-duty-racking-cover.webp', alt: 'Heavy Duty Racking System', width: 800, height: 600 },
      images: [{ url: '/images/collections/racking-systems/heavy-duty-racking-detail.webp', alt: 'Heavy Duty Racking detail', width: 800, height: 600 }],
      features: ['High Load Capacity', 'Durable Steel Construction', 'Adjustable Shelf Heights', 'Warehouse Optimization'],
      specifications: {
        'Material': 'Industrial Grade Steel',
        'Load Capacity': 'Up to 5000 kg per level',
        'Standard Sizes': 'Various standard sizes available',
        'Customization': 'Available on request'
      },
      lastModified: new Date().toISOString(),
      products: {}
    },
    'pallet-racks': {
      id: 'pallet-racks',
      title: 'Pallet Racks',
      description: 'Versatile pallet racking systems for various storage needs.',
      seoDescription: 'Optimize your warehouse with our versatile and sturdy pallet racking systems.',
      category: 'racking-systems',
      imageUrl: '/images/collections/racking-systems/pallet-racks-cover.webp',
      coverImage: { url: '/images/collections/racking-systems/pallet-racks-cover.webp', alt: 'Pallet Racking System', width: 800, height: 600 },
      images: [{ url: '/images/collections/racking-systems/pallet-racks-detail.webp', alt: 'Pallet Racks detail', width: 800, height: 600 }],
      features: ['High Load Capacity', 'Adjustable Configuration', 'Warehouse Efficiency'],
      lastModified: new Date().toISOString(),
      products: {}
    }
  },
  "modular-furniture": {
    'office-modules': {
      id: 'office-modules',
      title: 'Office Modules',
      description: 'Flexible and customizable office module systems.',
      seoDescription: 'Explore our Office Modules, designed for adaptability and modern office layouts.',
      category: 'modular-furniture',
      imageUrl: '/images/collections/modular-furniture/office-modules-cover.webp',
      coverImage: { url: '/images/collections/modular-furniture/office-modules-cover.webp', alt: 'Office Modules', width: 800, height: 600 },
      images: [{ url: '/images/collections/modular-furniture/office-modules-detail.webp', alt: 'Office Modules detail', width: 800, height: 600 }],
      features: ['Adaptable to various office layouts', 'Wide range of finishes and materials', 'Integrated power and data solutions'],
      specifications: {
        'Frame Material': 'Powder-coated steel',
        'Panel Options': 'Fabric, glass, laminate',
        'Standard Heights': '1200mm, 1500mm, 1800mm'
      },
      lastModified: new Date("2025-05-20").toISOString(),
      products: {}
    },
    'reception-counters': {
      id: 'reception-counters',
      title: 'Reception Counters',
      description: 'Stylish and functional reception counters to welcome your visitors.',
      seoDescription: 'Explore our stylish and functional reception counters, perfect for modern office spaces.',
      category: 'modular-furniture',
      imageUrl: '/images/collections/modular-furniture/reception-counters-cover.webp',
      coverImage: { url: '/images/collections/modular-furniture/reception-counters-cover.webp', alt: 'Reception Counters', width: 800, height: 600 },
      images: [{ url: '/images/collections/modular-furniture/reception-counters-detail.webp', alt: 'Reception Counters detail', width: 800, height: 600 }],
      features: ['Customizable Configurations', 'Scalable Designs', 'Modern Aesthetics'],
      lastModified: new Date("2025-05-20").toISOString(),
      products: {}
    }
  }
};

export const MOCK_PRODUCTS: Record<ProductCategory, Record<string, ProductData[]>> = {
  chairs: {
    'designer-series': [
      {
        id: 'ergonomic-task-chair',
        name: 'Ergonomic Task Chair',
        description: 'Premium task chair with full ergonomic adjustments. Experience unparalleled comfort and support with our flagship ergonomic task chair. Designed for long hours of work, it features a breathable mesh back, adjustable lumbar support, and a synchronized tilt mechanism. Available in multiple colors.',
        //price: 599.99,
        imageUrl: '/images/products/chairs/ergonomic-task-chair/01.webp',
        category: 'chairs',
        seriesId: 'designer-series',
        features: ['Height Adjustable Seat & Arms', 'Adjustable Lumbar Support', '360° Swivel', 'Synchronized Tilt Mechanism', 'Breathable Mesh Back'],
        specifications: {
          'Seat Material': 'High-density foam with fabric cover',
          'Back Material': 'Breathable mesh',
          'Frame Material': 'Polished aluminum',
          'Weight Capacity': '135kg (300 lbs)',
          'Warranty': '5 Years Frame, 2 Years Parts'
        },
        inStock: true,
        images: [
          { url: '/images/products/chairs/ergonomic-task-chair/01.webp', alt: 'Ergonomic Task Chair - Front View', width: 800, height: 600 },
          { url: '/images/products/chairs/ergonomic-task-chair/02.webp', alt: 'Ergonomic Task Chair - Side View', width: 800, height: 600 },
          { url: '/images/products/chairs/ergonomic-task-chair/03.webp', alt: 'Ergonomic Task Chair - Back View', width: 800, height: 600 },
          { url: '/images/products/chairs/ergonomic-task-chair/04.webp', alt: 'Ergonomic Task Chair - Detail of Armrest', width: 800, height: 600 },
          { url: '/images/products/chairs/ergonomic-task-chair/05.webp', alt: 'Ergonomic Task Chair - In Office Setting', width: 800, height: 600 },
        ],
        relatedProducts: ['executive-mesh-chair', 'luxury-leather-chair']
      },
      {
        id: 'executive-mesh-chair',
        name: 'Executive Mesh Chair',
        description: 'Breathable mesh chair with executive features. Combining sophisticated design with ergonomic excellence, this chair is perfect for the modern executive. Features include a high-back design, adjustable headrest, and premium casters.',
        //price: 799.99,
        imageUrl: '/images/products/chairs/executive-mesh-chair/01.webp',
        category: 'chairs',
        seriesId: 'designer-series',
        features: ['High-Back Design', 'Breathable Mesh Back & Seat', 'Adjustable Headrest', 'Advanced Tilt Control', 'Polished Aluminum Base'],
        specifications: {
          'Seat Material': 'Breathable mesh',
          'Back Material': 'Breathable mesh',
          'Frame Material': 'Polished aluminum with chrome accents',
          'Weight Capacity': '150kg (330 lbs)',
          'Warranty': '7 Years Frame, 3 Years Parts'
        },
        inStock: true,
        images: [
          { url: '/images/products/chairs/executive-mesh-chair/01.webp', alt: 'Executive Mesh Chair - Front View', width: 800, height: 600 },
          { url: '/images/products/chairs/executive-mesh-chair/02.webp', alt: 'Executive Mesh Chair - Angled View', width: 800, height: 600 },
          { url: '/images/products/chairs/executive-mesh-chair/03.webp', alt: 'Executive Mesh Chair - Headrest Detail', width: 800, height: 600 },
        ],
        relatedProducts: ['ergonomic-task-chair']
      },
      {
        id: 'luxury-leather-chair',
        name: 'Luxury Leather Chair',
        description: 'Indulge in the ultimate comfort and style with our luxury leather executive chair. Crafted from genuine top-grain leather, this chair offers a plush seating experience with classic aesthetics.',
        //price: 999.99,
        imageUrl: '/images/products/chairs/luxury-leather-chair/01.webp',
        category: 'chairs',
        seriesId: 'designer-series',
        features: ['Genuine Top-Grain Leather', 'Plush Cushioning', 'Classic Tufted Design', 'Heavy-Duty Base', 'Smooth-Rolling Casters'],
        specifications: {
          'Upholstery': 'Genuine Top-Grain Leather',
          'Frame Material': 'Solid Wood and Steel',
          'Weight Capacity': '160kg (350 lbs)',
          'Warranty': '10 Years on Frame, 5 Years on Leather'
        },
        inStock: false,
        images: [
          { url: '/images/products/chairs/luxury-leather-chair/01.webp', alt: 'Luxury Leather Chair - Front View', width: 800, height: 600 },
          { url: '/images/products/chairs/luxury-leather-chair/02.webp', alt: 'Luxury Leather Chair - Detail Stitching', width: 800, height: 600 },
        ],
        relatedProducts: ['executive-mesh-chair']
      },
      {
        id: 'conference-room-chair',
        name: 'Conference Room Chair',
        description: 'Elegant and comfortable chair designed for conference rooms and meeting spaces. Features a sleek profile and supportive cushioning for extended seating periods.',
        //price: 450.00,
        imageUrl: '/images/products/chairs/conference-room-chair/01.webp',
        category: 'chairs',
        seriesId: 'designer-series',
        features: ['Sleek Design', 'Supportive Cushioning', 'Durable Upholstery', 'Fixed Height', 'Ideal for Meeting Rooms'],
        specifications: {
          'Upholstery': 'High-quality fabric blend',
          'Frame Material': 'Chrome-plated steel',
          'Weight Capacity': '120kg (265 lbs)',
          'Warranty': '3 Years'
        },
        inStock: true,
        images: [
          { url: '/images/products/chairs/conference-room-chair/01.webp', alt: 'Conference Room Chair - Front View', width: 800, height: 600 },
          { url: '/images/products/chairs/conference-room-chair/02.webp', alt: 'Conference Room Chair - Side View', width: 800, height: 600 },
          { url: '/images/products/chairs/conference-room-chair/03.webp', alt: 'Conference Room Chair - In Meeting Setting', width: 800, height: 600 },
        ],
        relatedProducts: ['ergonomic-task-chair']
      }
    ]
  },
  desks: {
    'standing-desk': []
  },
  "storage-solutions": {
    "metal-storages": [
      {
        id: "heavy-duty-cabinet",
        name: "Heavy-Duty Storage Cabinet",
        description: "Robust metal cabinet with adjustable shelves, perfect for tools and supplies.",
        imageUrl: '/images/products/storage-solutions/metal-storages/heavy-duty-cabinet.webp',
        images: [{ url: '/images/products/storage-solutions/metal-storages/heavy-duty-cabinet.webp', width: 800, height: 600, alt: "Heavy-Duty Storage Cabinet" }],
        inStock: true,
        category: "storage-solutions",
        seriesId: "metal-storages",
        features: [
          "Reinforced steel doors",
          "Three-point locking system",
          "Powder-coated finish",
          "Four adjustable shelves",
          "Industrial grade"
        ],
        specifications: {
          "Material": "Cold-rolled steel",
          "Shelf Capacity": "200 lbs per shelf",
          "Warranty": "5 years"
        }
      }
    ]
  },
  "school-furniture": {
    'classroom-essentials': [
      {
        id: "student-desk-chair-set",
        name: "Student Desk and Chair Set",
        description: "Durable and ergonomic desk and chair set for students.",
        imageUrl: '/images/products/school-furniture/classroom-essentials/student-desk-chair-set.webp',
        images: [{ url: '/images/products/school-furniture/classroom-essentials/student-desk-chair-set.webp', width: 800, height: 600, alt: "Student Desk and Chair Set" }],
        inStock: true,
        category: "school-furniture",
        seriesId: "classroom-essentials",
        features: ["Adjustable height desk", "Ergonomic chair design", "Durable materials", "Easy to clean"],
        specifications: { "Material": "Laminate top, steel frame", "Recommended Age": "6-12 years", "Warranty": "3 years" }
      }
    ],
    'classroom-seating': [
      {
        id: "student-chair-blue",
        name: "Student Chair - Blue",
        description: "Durable and ergonomic chair for students, designed for comfort and focus in the classroom. Features a vibrant blue color.",
        imageUrl: '/images/products/school-furniture/classroom-seating/student-chair-blue.webp',
        images: [{ url: '/images/products/school-furniture/classroom-seating/student-chair-blue.webp', width: 800, height: 600, alt: "Blue Student Chair" }],
        inStock: true,
        category: "school-furniture",
        seriesId: "classroom-seating",
        features: ["Ergonomic design", "Stackable for easy storage", "Durable polypropylene shell", "Steel frame"],
        specifications: { "Material": "Polypropylene, Steel", "Recommended Age": "8-16 years", "Warranty": "5 years" }
      },
      {
        id: "teacher-stool-adjustable",
        name: "Adjustable Teacher Stool",
        description: "Comfortable and height-adjustable stool for teachers, providing flexibility and support throughout the school day.",
        imageUrl: '/images/products/school-furniture/classroom-seating/teacher-stool-adjustable.webp',
        images: [{ url: '/images/products/school-furniture/classroom-seating/teacher-stool-adjustable.webp', width: 800, height: 600, alt: "Adjustable Teacher Stool" }],
        inStock: true,
        category: "school-furniture",
        seriesId: "classroom-seating",
        features: ["Height adjustable", "Padded seat", "360-degree swivel", "Stable base"],
        specifications: { "Material": "Fabric, Steel, Nylon", "Adjustment Range": "55cm - 80cm", "Warranty": "3 years" }
      },
      {
        id: "ergonomic-student-chair",
        name: "Ergonomic Student Chair",
        description: "Comfortable and adjustable chair designed for students of all ages. Promotes good posture.",
        //price: 89.99,
        imageUrl: "/images/products/school-furniture/classroom-seating/ergonomic-student-chair-01.webp",
        category: "school-furniture",
        seriesId: "classroom-seating",
        features: ["Adjustable height", "Lumbar support", "Durable polypropylene shell", "Stackable design"],
        specifications: {
          "Material": "Polypropylene, steel frame",
          "Recommended Age": "8+ years",
          "Weight Capacity": "100 kg",
          "Warranty": "5 years"
        },
        inStock: true,
        images: [
          { url: "/images/products/school-furniture/classroom-seating/ergonomic-student-chair-01.webp", alt: "Ergonomic Student Chair - Front", width: 800, height: 600 },
          { url: "/images/products/school-furniture/classroom-seating/ergonomic-student-chair-02.webp", alt: "Ergonomic Student Chair - Side", width: 800, height: 600 }
        ],
        relatedProducts: ["student-desk-chair-set", "collaborative-learning-table"]
      },
      {
        id: "stacking-classroom-chair",
        name: "Stacking Classroom Chair",
        description: "Lightweight and durable stacking chair, perfect for flexible classroom layouts and easy storage.",
        //price: 49.99,
        imageUrl: "/images/products/school-furniture/classroom-seating/stacking-chair-01.webp",
        category: "school-furniture",
        seriesId: "classroom-seating",
        features: ["Space-saving stackable design", "Robust construction", "Multiple color options", "Easy to clean"],
        specifications: {
          "Material": "High-impact plastic, steel frame",
          "Stacking Height": "Up to 10 chairs",
          "Warranty": "3 years"
        },
        inStock: true,
        images: [
          { url: "/images/products/school-furniture/classroom-seating/stacking-chair-01.webp", alt: "Stacking Classroom Chair - Blue", width: 800, height: 600 },
          { url: "/images/products/school-furniture/classroom-seating/stacking-chair-02.webp", alt: "Stacking Classroom Chairs - Stacked", width: 800, height: 600 }
        ]
      }
    ]
  },
  "hospital-furniture": {
    'patient-care': [
      {
        id: "hospital-bed-standard",
        name: "Standard Hospital Bed",
        description: "Reliable and adjustable hospital bed for patient comfort and care.",
        imageUrl: '/images/products/hospital-furniture/patient-care/hospital-bed-standard.webp',
        images: [{ url: '/images/products/hospital-furniture/patient-care/hospital-bed-standard.webp', width: 800, height: 600, alt: "Standard Hospital Bed" }],
        inStock: true,
        category: "hospital-furniture",
        seriesId: "patient-care",
        features: ["Electric controls for height and recline", "Side rails for safety", "Medical grade mattress support", "Locking casters"],
        specifications: { "Material": "Steel frame, ABS plastic", "Weight Capacity": "250 kg", "Warranty": "5 years frame, 2 years electronics" }
      }
    ],
    'patient-room': [
      {
        id: "overbed-table-adjustable",
        name: "Overbed Table - Adjustable",
        description: "Versatile and adjustable overbed table for patient convenience in hospitals or home care settings. Easy to clean and maneuver.",
        imageUrl: '/images/products/hospital-furniture/patient-room/overbed-table-adjustable.webp',
        images: [{ url: '/images/products/hospital-furniture/patient-room/overbed-table-adjustable.webp', width: 800, height: 600, alt: "Adjustable Overbed Table" }],
        inStock: true,
        category: "hospital-furniture",
        seriesId: "patient-room",
        features: ["Height adjustable", "Tiltable tabletop", "Locking casters", "Easy to clean surface", "Durable construction"],
        specifications: { "Material": "Laminate top, Steel frame", "Tabletop Size": "80cm x 40cm", "Height Range": "70cm - 105cm", "Warranty": "2 years" }
      },
      {
        id: "bedside-cabinet-lockable",
        name: "Bedside Cabinet - Lockable",
        description: "Secure and functional bedside cabinet for patient belongings. Features a lockable drawer and durable construction for hospital use.",
        imageUrl: '/images/products/hospital-furniture/patient-room/bedside-cabinet-lockable.webp',
        images: [{ url: '/images/products/hospital-furniture/patient-room/bedside-cabinet-lockable.webp', width: 800, height: 600, alt: "Lockable Bedside Cabinet" }],
        inStock: true,
        category: "hospital-furniture",
        seriesId: "patient-room",
        features: ["Lockable drawer", "Spacious top surface", "Easy-to-clean materials", "Smooth-rolling casters (optional)", "Towel rail"],
        specifications: { "Material": "Medical-grade ABS plastic, Steel frame", "Dimensions": "45cm W x 45cm D x 75cm H", "Warranty": "3 years" }
      },
      {
        id: "bedside-cabinet-medical",
        name: "Medical Bedside Cabinet",
        description: "Durable and hygienic bedside cabinet with integrated overbed table option.",
        //price: 299.00,
        imageUrl: "/images/products/hospital-furniture/patient-room/bedside-cabinet-01.webp",
        category: "hospital-furniture",
        seriesId: "patient-room",
        features: ["Easy-to-clean surfaces", "Lockable drawer", "Towel rail", "Optional overbed table attachment"],
        specifications: {
          "Material": "Medical-grade laminate, ABS edging",
          "Dimensions": "45cm W x 45cm D x 80cm H",
          "Warranty": "3 years"
        },
        inStock: true,
        images: [
          { url: "/images/products/hospital-furniture/patient-room/bedside-cabinet-01.webp", alt: "Medical Bedside Cabinet", width: 800, height: 600 },
          { url: "/images/products/hospital-furniture/patient-room/bedside-cabinet-02.webp", alt: "Medical Bedside Cabinet with Overbed Table", width: 800, height: 600 }
        ],
        relatedProducts: ["hospital-bed-standard", "patient-recliner-chair"]
      },
      {
        id: "patient-recliner-chair",
        name: "Patient Recliner Chair",
        description: "Comfortable recliner chair designed for patient recovery and visitor seating.",
        //price: 650.00,
        imageUrl: "/images/products/hospital-furniture/patient-room/recliner-chair-01.webp",
        category: "hospital-furniture",
        seriesId: "patient-room",
        features: ["Multiple recline positions", "Durable, easy-to-clean upholstery", "Sturdy frame", "Side pockets for storage"],
        specifications: {
          "Upholstery": "Antimicrobial vinyl",
          "Frame": "Steel mechanism, hardwood frame",
          "Weight Capacity": "150 kg",
          "Warranty": "5 years frame, 2 years mechanism"
        },
        inStock: false,
        images: [
          { url: "/images/products/hospital-furniture/patient-room/recliner-chair-01.webp", alt: "Patient Recliner Chair - Upright", width: 800, height: 600 },
          { url: "/images/products/hospital-furniture/patient-room/recliner-chair-02.webp", alt: "Patient Recliner Chair - Reclined", width: 800, height: 600 }
        ]
      }
    ]
  },
  "racking-systems": {
    'heavy-duty-racking': [
      {
        id: "pallet-rack-starter-unit",
        name: "Pallet Rack Starter Unit",
        description: "Heavy-duty pallet racking starter unit for warehouse storage.",
        imageUrl: '/images/products/racking-systems/heavy-duty-racking/pallet-rack-starter-unit.webp',
        images: [{ url: '/images/products/racking-systems/heavy-duty-racking/pallet-rack-starter-unit.webp', width: 800, height: 600, alt: "Pallet Rack Starter Unit" }],
        inStock: true,
        category: "racking-systems",
        seriesId: "heavy-duty-racking",
        //price: 299.99,
        features: ["High load capacity beams", "Adjustable shelf levels", "Durable powder-coat finish", "Easy assembly"],
        specifications: { "Material": "Structural steel", "Beam Capacity": "2000 kg per pair", "Upright Height": "4 meters", "Warranty": "10 years" }
      }
    ],
    'pallet-racks': [
      {
        id: "standard-pallet-rack-bay",
        name: "Standard Pallet Rack Bay",
        description: "A complete bay of our standard pallet racking, perfect for general warehouse storage. Includes two upright frames and four beam levels.",
        //price: 499.99,
        imageUrl: "/images/products/racking-systems/pallet-racks/standard-bay-01.webp",
        category: "racking-systems",
        seriesId: "pallet-racks",
        features: ["Versatile for various pallet sizes", "Easy to assemble and adjust", "Powder-coated for durability", "Scalable system"],
        specifications: {
          "Material": "High-strength steel",
          "Load Capacity per Level": "2500 kg",
          "Bay Width": "2700mm",
          "Upright Height": "3000mm",
          "Beam Length": "2500mm",
          "Warranty": "5 years"
        },
        inStock: true,
        images: [
          { url: "/images/products/racking-systems/pallet-racks/standard-bay-01.webp", alt: "Standard Pallet Rack Bay - Front", width: 800, height: 600 },
          { url: "/images/products/racking-systems/pallet-racks/standard-bay-02.webp", alt: "Standard Pallet Rack Bay - Detail", width: 800, height: 600 }
        ],
        relatedProducts: ["heavy-duty-pallet-rack-component", "wire-mesh-decking"]
      },
      {
        id: "heavy-duty-pallet-rack-component",
        name: "Heavy-Duty Pallet Rack Component",
        description: "Individual heavy-duty beam or upright for expanding or customizing your pallet racking system.",
        //price: 75.50,
        imageUrl: "/images/products/racking-systems/pallet-racks/hd-component-01.webp",
        category: "racking-systems",
        seriesId: "pallet-racks",
        features: ["Extra strength for demanding loads", "Compatible with existing systems", "Safety locking pins included"],
        specifications: {
          "Material": "Reinforced structural steel",
          "Component Type": "Beam or Upright (selectable)",
          "Finish": "Industrial orange powder-coat",
          "Warranty": "10 years"
        },
        inStock: true,
        images: [
          { url: "/images/products/racking-systems/pallet-racks/hd-component-01.webp", alt: "Heavy-Duty Pallet Rack Beam", width: 800, height: 600 },
          { url: "/images/products/racking-systems/pallet-racks/hd-component-02.webp", alt: "Heavy-Duty Pallet Rack Upright", width: 800, height: 600 }
        ],
        relatedProducts: ["standard-pallet-rack-bay"]
      },
      {
        id: "wire-mesh-decking",
        name: "Wire Mesh Decking for Pallet Racks",
        description: "Durable wire mesh decking improves safety and versatility of pallet racking. Allows for storage of non-palletized items.",
        //price: 45.00,
        imageUrl: "/images/products/racking-systems/pallet-racks/wire-decking-01.webp",
        category: "racking-systems",
        seriesId: "pallet-racks",
        features: ["Improves airflow and visibility", "Increases sprinkler effectiveness", "Easy drop-in installation", "Supports up to 1000 kg"],
        specifications: {
          "Material": "Welded steel wire",
          "Finish": "Galvanized",
          "Standard Sizes": "Fits most standard pallet rack beams",
          "Warranty": "2 years"
        },
        inStock: false,
        images: [
          { url: "/images/products/racking-systems/pallet-racks/wire-decking-01.webp", alt: "Wire Mesh Decking on Pallet Rack", width: 800, height: 600 }
        ]
      }
    ]
  },
  "modular-furniture": {
    'office-modules': [
      {
        id: "single-person-workstation",
        name: "Single Person Module",
        description: "Compact and efficient single-person office module.",
        imageUrl: "/images/products/modular-furniture/office-modules/single-workstation-01.webp",
        images: [
          { url: "/images/products/modular-furniture/office-modules/single-workstation-01.webp", alt: "Single Person Module - Front", width: 800, height: 600 },
          { url: "/images/products/modular-furniture/office-modules/single-workstation-02.webp", alt: "Single Person Module - With Accessories", width: 800, height: 600 }
        ],
        inStock: true,
        category: "modular-furniture",
        seriesId: "office-modules",
        features: ["Integrated desk surface", "Optional privacy panels", "Cable management system"],
        specifications: {
          "Dimensions (WxDxH)": "120cm x 80cm x 120cm",
          "Desk Material": "High-pressure laminate",
          "Panel Height": "120cm"
        },
        relatedProducts: ["double-person-workstation", "reception-counters"]
      },
      {
        id: "double-person-workstation",
        name: "Double Person Module",
        description: "Collaborative two-person office module.",
        imageUrl: "/images/products/modular-furniture/office-modules/double-workstation-01.webp",
        images: [
          { url: "/images/products/modular-furniture/office-modules/double-workstation-01.webp", alt: "Double Person Module - Angled View", width: 800, height: 600 },
          { url: "/images/products/modular-furniture/office-modules/double-workstation-02.webp", alt: "Double Person Module - Top View", width: 800, height: 600 }
        ],
        inStock: true,
        category: "modular-furniture",
        seriesId: "office-modules",
        features: ["Shared central panel option", "Individual desk areas", "Ample storage solutions"],
        specifications: {
          "Dimensions (WxDxH)": "240cm x 80cm x 120cm",
          "Desk Material": "High-pressure laminate",
          "Panel Options": "Fabric, Frosted Glass"
        },
        relatedProducts: ["single-person-workstation", "reception-counters"]
      }
    ],
    'reception-counters': [
      {
        id: "l-shape-reception-desk",
        name: "L-Shape Reception Desk",
        description: "Modern L-shaped reception desk with ample counter space and storage.",
        imageUrl: "/images/products/modular-furniture/reception-counters/l-shape-desk-01.webp",
        category: "modular-furniture",
        seriesId: "reception-counters",
        features: ["High-pressure laminate finish", "ADA compliant section (optional)", "Lockable drawers", "LED accent lighting"],
        specifications: {
          "Main Desk Dimensions": "180cm W x 75cm D x 110cm H",
          "Return Desk Dimensions": "120cm W x 60cm D x 75cm H",
          "Warranty": "5 years"
        },
        inStock: true,
        images: [
          { url: "/images/products/modular-furniture/reception-counters/l-shape-desk-01.webp", alt: "L-Shape Reception Desk - Front", width: 800, height: 600 },
          { url: "/images/products/modular-furniture/reception-counters/l-shape-desk-02.webp", alt: "L-Shape Reception Desk - Detail", width: 800, height: 600 }
        ]
      }
    ]
  }
};