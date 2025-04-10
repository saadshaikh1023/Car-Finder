export interface Car {
  id: string;
  brand: string;
  model: string;
  price: number;
  fuelType: string;
  seatingCapacity: number;
  image: string;
  description: string;
  specifications: {
    engine: string;
    transmission: string;
    mileage: string;
  };
}

export interface FilterParams {
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  fuelType?: string;
  seatingCapacity?: number;
  page: number;
}