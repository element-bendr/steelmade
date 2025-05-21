import { cache } from 'react'
import { ProductCategory, SeriesMetadata } from '@/types/collections'
import { APIError } from '@/lib/errors'

const DESIGNER_SERIES_DATA: Record<ProductCategory, Record<string, SeriesMetadata>> = {
  chairs: {
    'designer-series': {
      id: 'designer-series',
      title: 'Designer Series Chairs',
      description: 'Premium ergonomic chairs designed for comfort and style',
      seoDescription: 'Discover premium ergonomic designer series chairs, crafted for ultimate comfort and style. Perfect for modern offices.',
      features: ['Ergonomic design', 'Premium materials', 'Adjustable height', 'Lumbar support'],
      specifications: {
        'Material': 'Premium leather and steel',
        'Weight Capacity': '300 lbs',
        'Adjustable': 'Yes',
        'Colors Available': 'Black, Brown, White'
      },
      lastModified: new Date('2024-01-15T10:00:00Z').toISOString(),
      products: {},
      category: 'chairs',
      coverImage: { url: '/images/collections/chairs/designer-series.webp', alt: 'Designer Series Chairs cover', width: 1200, height: 700 },
      images: [{ url: '/images/collections/chairs/designer-series.webp', alt: 'Designer Series Chairs image 1', width: 1200, height: 700 }],
    },
    'executive-series': {
      id: 'executive-series',
      title: 'Executive Series Chairs',
      description: 'Luxurious chairs for executives and boardrooms',
      seoDescription: 'Explore our luxurious executive series chairs, perfect for boardrooms and executive offices. Unmatched comfort and prestige.',
      features: ['Plush cushioning', 'High-back design', 'Premium upholstery', 'Swivel and tilt'],
      specifications: {
        'Upholstery': 'Top-grain leather',
        'Frame': 'Polished aluminum',
        'Adjustments': 'Height, Tilt, Recline',
      },
      lastModified: new Date('2024-01-20T11:00:00Z').toISOString(),
      products: {},
      category: 'chairs',
      coverImage: { url: '/images/collections/chairs/executive-series.webp', alt: 'Executive Series Chairs cover', width: 1200, height: 750 },
      images: [{ url: '/images/collections/chairs/executive-series.webp', alt: 'Executive Series Chairs image 1', width: 1200, height: 750 }],
    }
  },
  desks: {
    'standing-desk-series': {
      id: 'standing-desk-series',
      title: 'Standing Desk Series',
      description: 'Height-adjustable desks for ergonomic workspaces.',
      seoDescription: 'Optimize your workspace with our versatile standing desk series, promoting health and productivity.',
      features: ['Height adjustable', 'Spacious work surface', 'Cable management', 'Sturdy build'],
      specifications: {
        'Material': 'Laminate top, steel frame',
        'Height Range': '28" - 48"',
        'Weight Capacity': '250 lbs',
      },
      lastModified: new Date('2024-02-10T09:00:00Z').toISOString(),
      products: {},
      category: 'desks',
      coverImage: { url: '/images/collections/desks/standing-desk-series.webp', alt: 'Standing Desk Series cover', width: 1200, height: 800 },
      images: [{ url: '/images/collections/desks/standing-desk-series.webp', alt: 'Standing Desk Series image 1', width: 1200, height: 800 }],
    }
  },
  'storage-solutions': {
    'modular-storage-series': {
      id: 'modular-storage-series',
      title: 'Modular Storage Series',
      description: 'Customizable storage solutions for any space.',
      seoDescription: 'Organize your space efficiently with our modular storage series, offering flexible and stylish solutions.',
      features: ['Customizable modules', 'Variety of finishes', 'Durable construction', 'Easy assembly'],
      specifications: {
        'Material': 'Engineered wood, metal accents',
        'Modules': 'Shelves, Cabinets, Drawers',
        'Finishes': 'White, Black, Oak',
      },
      lastModified: new Date('2024-02-15T14:30:00Z').toISOString(),
      products: {},
      category: 'storage-solutions',
      coverImage: { url: '/images/collections/storage-solutions/modular-storage-series.webp', alt: 'Modular Storage Series cover', width: 1000, height: 1000 },
      images: [{ url: '/images/collections/storage-solutions/modular-storage-series.webp', alt: 'Modular Storage Series image 1', width: 1000, height: 1000 }],
    }
  },
  'school-furniture': {
    'classroom-series': {
      id: 'classroom-series',
      title: 'Classroom Series',
      description: 'Durable and comfortable furniture for modern classrooms.',
      seoDescription: 'Equip modern classrooms with our durable and comfortable classroom series furniture, designed for active learning environments.',
      features: ['Ergonomic design for students', 'Heavy-duty materials', 'Stackable options', 'Variety of colors'],
      specifications: {
        'Age Group': 'K-12',
        'Materials': 'High-density polyethylene, steel',
        'Warranty': '10 years',
      },
      lastModified: new Date('2024-02-20T10:00:00Z').toISOString(),
      products: {},
      category: 'school-furniture',
      coverImage: { url: '/images/collections/school-furniture/classroom-series.webp', alt: 'Classroom Series cover', width: 1100, height: 700 },
      images: [{ url: '/images/collections/school-furniture/classroom-series.webp', alt: 'Classroom Series image 1', width: 1100, height: 700 }],
    }
  },
  'hospital-furniture': {
    'patient-room-series': {
      id: 'patient-room-series',
      title: 'Patient Room Series',
      description: 'Specialized furniture for patient comfort and care.',
      seoDescription: 'Enhance patient comfort and care with our specialized hospital furniture series, designed for safety and functionality.',
      features: ['Medical-grade materials', 'Easy to clean', 'Adjustable beds', 'Overbed tables'],
      specifications: {
        'Certifications': 'ISO 13485',
        'Materials': 'Antimicrobial surfaces, stainless steel',
        'Load Capacity': 'Varies by product',
      },
      lastModified: new Date('2024-02-25T16:00:00Z').toISOString(),
      products: {},
      category: 'hospital-furniture',
      coverImage: { url: '/images/collections/hospital-furniture/patient-room-series.webp', alt: 'Patient Room Series cover', width: 1200, height: 750 },
      images: [{ url: '/images/collections/hospital-furniture/patient-room-series.webp', alt: 'Patient Room Series image 1', width: 1200, height: 750 }],
    }
  },
  'racking-systems': {
    'heavy-duty-racking': {
      id: 'heavy-duty-racking',
      title: 'Heavy-Duty Racking Series',
      description: 'Robust racking systems for industrial and warehouse storage.',
      seoDescription: 'Maximize your storage capacity with our heavy-duty racking series, built for industrial and warehouse environments.',
      features: ['High load capacity', 'Adjustable shelf heights', 'Powder-coated finish', 'Multiple configurations'],
      specifications: {
        'Material': 'Industrial-grade steel',
        'Load Capacity per Shelf': 'Up to 5000 lbs',
        'Standard Colors': 'Orange, Blue, Grey',
      },
      lastModified: new Date('2024-03-01T11:00:00Z').toISOString(),
      products: {},
      category: 'racking-systems',
      coverImage: { url: '/images/collections/racking-systems/heavy-duty-racking.webp', alt: 'Heavy-Duty Racking cover', width: 1000, height: 1200 },
      images: [{ url: '/images/collections/racking-systems/heavy-duty-racking.webp', alt: 'Heavy-Duty Racking image 1', width: 1000, height: 1200 }],
    }
  },
  'modular-furniture': {
    'flex-office-system': {
      id: 'flex-office-system',
      title: 'Flex Office System',
      description: 'Adaptable modular furniture for dynamic office layouts.',
      seoDescription: 'Create agile and collaborative workspaces with our Flex Office System, the ultimate modular furniture solution.',
      features: ['Reconfigurable components', 'Integrated power options', 'Acoustic panels', 'Modern aesthetics'],
      specifications: {
        'Components': 'Desks, Partitions, Storage units, Seating',
        'Frame Material': 'Aluminum',
        'Surface Finishes': 'Laminate, Veneer, Glass',
      },
      lastModified: new Date('2024-03-05T09:30:00Z').toISOString(),
      products: {},
      category: 'modular-furniture',
      coverImage: { url: '/images/collections/modular-furniture/flex-office-system.webp', alt: 'Flex Office System cover', width: 1200, height: 800 },
      images: [{ url: '/images/collections/modular-furniture/flex-office-system.webp', alt: 'Flex Office System image 1', width: 1200, height: 800 }],
    }
  }
};

export const getAllSeries = cache(async (category: ProductCategory | 'all'): Promise<Record<string, SeriesMetadata>> => {
  try {
    // Simulate API fetch delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Return all series or filter by category
    if (category === 'all') {
      return Object.entries(DESIGNER_SERIES_DATA).reduce((acc, [cat, series]) => {
        return { ...acc, ...series };
      }, {});
    }
    
    return DESIGNER_SERIES_DATA[category] || {};
  } catch (error) {
    console.error('Error fetching series data:', error);
    throw new APIError('Failed to fetch series data', 500);
  }
});

export const getSeriesById = cache(async (category: ProductCategory, seriesId: string): Promise<SeriesMetadata | null> => {
  try {
    // Simulate API fetch delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const seriesData = DESIGNER_SERIES_DATA[category]?.[seriesId];
    return seriesData || null;
  } catch (error) {
    console.error('Error fetching series by ID:', error);
    throw new APIError('Failed to fetch series data', 500);
  }
});