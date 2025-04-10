# CarFinder

A modern web application for browsing and filtering cars with detailed specifications.

## Features

- Browse a collection of cars from various brands
- Filter cars by brand, price range, fuel type, and seating capacity
- Sort cars by price (low to high or high to low)
- Responsive design for desktop and mobile devices
- Detailed car specifications and images

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **State Management**: React Hooks

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/carfinder.git
   cd carfinder
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
carfinder/
├── app/                  # Next.js app directory
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   └── cars/             # Car details pages
│       └── [id]/         # Dynamic route for car details
│           ├── page.tsx  # Client component for car details
│           └── layout.tsx # Server component for static generation
├── components/           # React components
│   ├── car-card.tsx      # Car card component
│   ├── car-grid.tsx      # Grid of car cards
│   └── filters.tsx       # Filtering controls
├── lib/                  # Utility functions and data
│   └── cars.ts           # Car data and filtering logic
├── types/                # TypeScript type definitions
│   └── index.ts          # Type definitions
└── public/               # Static assets
```

## Static Site Generation

This project uses Next.js static site generation with `output: 'export'` in the Next.js configuration. This means:

1. The entire site is pre-rendered at build time
2. No server-side rendering is needed at runtime
3. The site can be deployed to any static hosting service

For dynamic routes like `/cars/[id]`, we need to specify which paths to pre-render at build time using the `generateStaticParams()` function in the layout file:

```typescript
// app/cars/[id]/layout.tsx
import { cars } from '@/lib/cars';

export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export default function CarLayout({ children }) {
  return <>{children}</>;
}
```

This approach separates the static generation logic (in the layout) from the client-side rendering logic (in the page component).

## Customization

### Adding More Cars

To add more cars to the collection, edit the `cars` array in `lib/cars.ts`. Each car should follow this structure:

```typescript
{
  id: 'unique-id',
  brand: 'Brand Name',
  model: 'Model Name',
  price: 1000000, // Price in your currency
  fuelType: 'Petrol', // One of: 'Petrol', 'Diesel', 'Hybrid', 'Electric'
  seatingCapacity: 5,
  image: 'https://example.com/image.jpg',
  description: 'Car description',
  specifications: {
    engine: 'Engine details',
    transmission: 'Transmission type',
    mileage: 'Fuel efficiency',
  },
}
```

### Modifying Filters

The available filter options are defined in `lib/cars.ts`:

- `brands`: Available car brands
- `fuelTypes`: Available fuel types
- `seatingCapacities`: Available seating capacities

## Deployment

This project can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy your application

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Car images from [Unsplash](https://unsplash.com)
- UI components from [Shadcn UI](https://ui.shadcn.com) 