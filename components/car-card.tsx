'use client';

import { Car } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(car.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-video">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{car.brand} {car.model}</h3>
              <p className="text-sm text-muted-foreground">{car.fuelType}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => inWishlist ? removeFromWishlist(car.id) : addToWishlist(car)}
              className={inWishlist ? 'text-red-500' : ''}
            >
              <Heart className="h-5 w-5" fill={inWishlist ? 'currentColor' : 'none'} />
            </Button>
          </div>
          <div className="mt-2">
            <p className="text-xl font-bold">₹{car.price.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Seats: {car.seatingCapacity}</p>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">View Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] p-0">
              <DialogHeader className="p-6 pb-0">
                <DialogTitle>{car.brand} {car.model}</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[calc(90vh-80px)] px-6 pb-6">
                <div className="grid gap-6">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold">₹{car.price.toLocaleString()}</p>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => inWishlist ? removeFromWishlist(car.id) : addToWishlist(car)}
                        className={inWishlist ? 'text-red-500' : ''}
                      >
                        <Heart className="h-5 w-5" fill={inWishlist ? 'currentColor' : 'none'} />
                      </Button>
                    </div>
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
                      <h4 className="text-lg font-semibold">Specifications</h4>
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
                      <h4 className="text-lg font-semibold">Description</h4>
                      <p className="text-muted-foreground">{car.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </motion.div>
  );
}