import { cars } from '@/lib/cars';

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export default function CarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 