'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { brands, fuelTypes, seatingCapacities } from '@/lib/cars';

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

export function Filters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = useState({
    brand: 'all',
    priceRange: [0, 1000000],
    fuelType: 'all',
    seatingCapacity: 'all',
    sort: 'default',
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-4 p-4 bg-card rounded-lg">
      <div className="space-y-2">
        <label className="text-sm font-medium">Brand</label>
        <Select
          value={filters.brand}
          onValueChange={(value) => handleFilterChange('brand', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Brands</SelectItem>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Price Range</label>
        <div className="pt-2">
          <Slider
            defaultValue={[0, 1000000]}
            max={1000000}
            step={1000}
            onValueChange={(value: number[]) => handleFilterChange('priceRange', value)}
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>₹{filters.priceRange[0].toLocaleString()}</span>
            <span>{filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Fuel Type</label>
        <Select
          value={filters.fuelType}
          onValueChange={(value) => handleFilterChange('fuelType', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select fuel type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {fuelTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Seating Capacity</label>
        <Select
          value={filters.seatingCapacity}
          onValueChange={(value) => handleFilterChange('seatingCapacity', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select seating capacity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Capacity</SelectItem>
            {seatingCapacities.map((capacity) => (
              <SelectItem key={capacity} value={capacity.toString()}>
                {capacity} Seats
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Sort By</label>
        <Select
          value={filters.sort}
          onValueChange={(value) => handleFilterChange('sort', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}