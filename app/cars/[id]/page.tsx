'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Car } from '@/types';
import { cars } from '@/lib/cars';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/hooks/useWishlist';
import { Heart, ArrowLeft } from 'lucide-react';

export default function CarDetails() {
  const params = useParams();
  const router = useRouter();
  const [car, setCar] = useState<Car | null>(null);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    const foundCar = cars.find(c => c.id === params.id);
    setCar(foundCar || null);
  }, [params.id]);

  if (!car) {
    return <div className="container mx-auto px-4 py-8">Car not found</div>;
  }

  const inWishlist = isInWishlist(car.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Search
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{car.brand} {car.model}</h1>
              <p className="text-xl text-muted-foreground">₹{car.price.toLocaleString()}</p>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => inWishlist ? removeFromWishlist(car.id) : addToWishlist(car)}
              className={inWishlist ? 'text-red-500' : ''}
            >
              <Heart className="h-5 w-5" fill={inWishlist ? 'currentColor' : 'none'} />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Fuel Type</p>
                <p className="font-medium">{car.fuelType}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Seating Capacity</p>
                <p className="font-medium">{car.seatingCapacity} Seats</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Specifications</h2>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Engine</span>
                  <span className="font-medium">{car.specifications.engine}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Transmission</span>
                  <span className="font-medium">{car.specifications.transmission}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Mileage</span>
                  <span className="font-medium">{car.specifications.mileage}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-muted-foreground">{car.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}