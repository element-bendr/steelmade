import { cache } from 'react'
import { ProductCategory, SeriesMetadata } from '@/types/collections'
import { ApiError } from '@/lib/errors'

// Mock data for the designer series
const DESIGNER_SERIES_DATA: Record<ProductCategory, Record<string, SeriesMetadata>> = {
  chairs: {
    'designer-series': {
      title: 'Designer Series Chairs',
      description: 'Premium ergonomic chairs designed for comfort and style',
      imageUrl: '/images/collections/chairs/designer-series.webp',
      features: ['Ergonomic design', 'Premium materials', 'Adjustable height', 'Lumbar support'],
      specifications: {
        'Material': 'Premium leather and steel',
        'Weight Capacity': '300 lbs',
        'Adjustable': 'Yes',
        'Colors Available': 'Black, Brown, White'
      }
    },
    'executive-series': {
      title: 'Executive Series Chairs',
      description: 'Luxurious chairs for executives and boardrooms',
      imageUrl: '/images/collections/chairs/executive-series.webp',
    }
  },
  desks: {
    'standing-desk-series': {
      title: 'Standing Desk Series',
      description: 'Height-adjustable desks for ergonomic workspaces',
      imageUrl: '/images/collections/desks/standing-desk-series.webp',
    }
  },
  storage: {
    'modular-storage-series': {
      title: 'Modular Storage Series',
      description: 'Customizable storage solutions for any space',
      imageUrl: '/images/collections/storage/modular-storage-series.webp',
    }
  },
  school: {
    'classroom-series': {
      title: 'Classroom Series',
      description: 'Durable and comfortable furniture for modern classrooms',
      imageUrl: '/images/collections/school/classroom-series.webp',
    }
  },
  hospital: {
    'patient-room-series': {
      title: 'Patient Room Series',
      description: 'Specialized furniture for patient comfort and care',
      imageUrl: '/images/collections/hospital/patient-room-series.webp',
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
    throw new ApiError('Failed to fetch series data', 500);
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
    throw new ApiError('Failed to fetch series data', 500);
  }
});