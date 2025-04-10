import { Car } from '@/types';

// Mock car data
export const cars: Car[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Camry',
    price: 350000,
    fuelType: 'Petrol',
    seatingCapacity: 4,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2000',
    description: 'The Toyota Camry is a sophisticated and reliable sedan perfect for families.',
    specifications: {
      engine: '2.5L 4-Cylinder',
      transmission: 'Automatic',
      mileage: '28/39 mpg',
    },
  },
  {
    id: '2',
    brand: 'Honda',
    model: 'CR-V',
    price: 420000,
    fuelType: 'Hybrid',
    seatingCapacity: 6,
    image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?q=80&w=2000',
    description: 'A versatile SUV that combines comfort with efficiency.',
    specifications: {
      engine: '2.0L Hybrid',
      transmission: 'CVT',
      mileage: '40/35 mpg',
    },
  },
  {
    id: '3',
    brand: 'Tesla',
    model: 'Model 3',
    price: 450000,
    fuelType: 'Electric',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000',
    description: 'A revolutionary electric sedan with cutting-edge technology and impressive range.',
    specifications: {
      engine: 'Dual Motor Electric',
      transmission: 'Single-Speed',
      mileage: '358 miles range',
    },
  },
  {
    id: '4',
    brand: 'BMW',
    model: 'X5',
    price: 650000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000',
    description: 'Luxury SUV with powerful performance and premium features.',
    specifications: {
      engine: '3.0L Twin-Turbo',
      transmission: 'Automatic',
      mileage: '22/25 mpg',
    },
  },
  {
    id: '5',
    brand: 'Mercedes',
    model: 'C-Class',
    price: 480000,
    fuelType: 'Petrol',
    seatingCapacity: 2,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000',
    description: 'Elegant sedan with sophisticated design and advanced technology.',
    specifications: {
      engine: '2.0L Turbo',
      transmission: 'Automatic',
      mileage: '25/35 mpg',
    },
  },
  {
    id: '6',
    brand: 'Audi',
    model: 'Q5',
    price: 550000,
    fuelType: 'Diesel',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2000',
    description: 'Premium SUV with quattro all-wheel drive and luxurious interior.',
    specifications: {
      engine: '2.0L TDI',
      transmission: 'Automatic',
      mileage: '27/34 mpg',
    },
  },
  {
    id: '7',
    brand: 'Toyota',
    model: 'RAV4',
    price: 380000,
    fuelType: 'Hybrid',
    seatingCapacity: 4,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2000',
    description: 'Popular compact SUV with excellent fuel efficiency and reliability.',
    specifications: {
      engine: '2.5L Hybrid',
      transmission: 'CVT',
      mileage: '41/38 mpg',
    },
  },
  {
    id: '8',
    brand: 'Honda',
    model: 'Civic',
    price: 280000,
    fuelType: 'Petrol',
    seatingCapacity: 8,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=2000',
    description: 'Reliable compact car with great fuel economy and modern features.',
    specifications: {
      engine: '2.0L 4-Cylinder',
      transmission: 'CVT',
      mileage: '30/38 mpg',
    },
  },
  {
    id: '9',
    brand: 'Tesla',
    model: 'Model Y',
    price: 550000,
    fuelType: 'Electric',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000',
    description: 'Electric crossover SUV with impressive range and advanced autopilot.',
    specifications: {
      engine: 'Dual Motor Electric',
      transmission: 'Single-Speed',
      mileage: '330 miles range',
    },
  },
  {
    id: '10',
    brand: 'BMW',
    model: '3 Series',
    price: 420000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000',
    description: 'Sporty sedan with excellent handling and premium features.',
    specifications: {
      engine: '2.0L Turbo',
      transmission: 'Automatic',
      mileage: '25/32 mpg',
    },
  },
  {
    id: '11',
    brand: 'Mercedes',
    model: 'GLC',
    price: 580000,
    fuelType: 'Diesel',
    seatingCapacity: 2,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000',
    description: 'Luxurious SUV with powerful performance and sophisticated design.',
    specifications: {
      engine: '2.1L Diesel',
      transmission: 'Automatic',
      mileage: '24/31 mpg',
    },
  },
  {
    id: '12',
    brand: 'Audi',
    model: 'A4',
    price: 450000,
    fuelType: 'Petrol',
    seatingCapacity: 4,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2000',
    description: 'Premium sedan with quattro all-wheel drive and advanced technology.',
    specifications: {
      engine: '2.0L Turbo',
      transmission: 'Automatic',
      mileage: '24/31 mpg',
    },
  },
  {
    id: '13',
    brand: 'Maruti Suzuki',
    model: 'Swift',
    price: 850000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2000',
    description: 'Compact hatchback with excellent fuel efficiency and maneuverability.',
    specifications: {
      engine: '1.2L K-Series',
      transmission: 'Manual',
      mileage: '22/28 kmpl',
    },
  },
  {
    id: '14',
    brand: 'Maruti Suzuki',
    model: 'Vitara',
    price: 1250000,
    fuelType: 'Hybrid',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=2000',
    description: 'Premium SUV with hybrid technology and spacious interior.',
    specifications: {
      engine: '1.5L Hybrid',
      transmission: 'Automatic',
      mileage: '27/28 kmpl',
    },
  },
  {
    id: '15',
    brand: 'Hyundai',
    model: 'i20',
    price: 950000,
    fuelType: 'Petrol',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2000',
    description: 'Stylish hatchback with modern features and comfortable ride.',
    specifications: {
      engine: '1.2L Kappa',
      transmission: 'Manual',
      mileage: '20/26 kmpl',
    },
  },
  {
    id: '16',
    brand: 'Hyundai',
    model: 'Creta',
    price: 1350000,
    fuelType: 'Diesel',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?q=80&w=2000',
    description: 'Popular SUV with powerful performance and premium features.',
    specifications: {
      engine: '1.5L CRDi',
      transmission: 'Automatic',
      mileage: '17/21 kmpl',
    },
  },
];

export const brands = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Tesla', 'Maruti Suzuki', 'Hyundai'];
export const fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
export const seatingCapacities = [2, 4, 5, 7, 8];

export async function fetchCars(params: any): Promise<{ cars: Car[]; total: number }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  let filteredCars = [...cars];

  if (params.brand && params.brand !== 'all') {
    filteredCars = filteredCars.filter(car => car.brand === params.brand);
  }

  if (params.priceRange) {
    const [minPrice, maxPrice] = params.priceRange;
    filteredCars = filteredCars.filter(car => car.price >= minPrice && car.price <= maxPrice);
  }

  if (params.fuelType && params.fuelType !== 'all') {
    filteredCars = filteredCars.filter(car => car.fuelType === params.fuelType);
  }

  if (params.seatingCapacity && params.seatingCapacity !== 'all') {
    filteredCars = filteredCars.filter(car => 
      car.seatingCapacity === parseInt(params.seatingCapacity, 10)
    );
  }

  if (params.sort === 'price-asc') {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (params.sort === 'price-desc') {
    filteredCars.sort((a, b) => b.price - a.price);
  }

  const page = params.page || 1;
  const perPage = 10;
  const start = (page - 1) * perPage;
  const paginatedCars = filteredCars.slice(start, start + perPage);

  return {
    cars: paginatedCars,
    total: filteredCars.length,
  };
}