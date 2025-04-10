'use client';

import { useState, useEffect } from 'react';
import { Filters } from '@/components/filters';
import { CarCard } from '@/components/car-card';
import { fetchCars } from '@/lib/cars';
import { Car } from '@/types';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({});

  const loadCars = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchCars({ ...filters, page });
      setCars(response.cars);
      setTotalPages(Math.ceil(response.total / 10));
    } catch (err) {
      setError('Failed to load cars. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCars();
  }, [page, filters]);

  const handleFilterChange = (newFilters: any) => {
    setPage(1);
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Filters onFilterChange={handleFilterChange} />
        </div>
        <div className="md:col-span-3">
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">{error}</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
              {cars.length === 0 && (
                <div className="text-center py-8">No cars found matching your criteria.</div>
              )}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  <Button
                    onClick={() => setPage(p => p - 1)}
                    disabled={page === 1}
                  >
                    Previous
                  </Button>
                  <span className="py-2 px-4">
                    Page {page} of {totalPages}
                  </span>
                  <Button
                    onClick={() => setPage(p => p + 1)}
                    disabled={page === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}