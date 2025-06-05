import { getPostsByCategory } from '@/lib/api';
import { FlyerCard } from '@/components/content/flyer-card';
import { Megaphone } from 'lucide-react';

export const metadata = {
  title: 'Event Flyers | Pen Evangelist',
  description: 'View and share flyers for upcoming evangelical events and activities.',
};

export default function FlyersPage() {
  const flyers = getPostsByCategory('flyer');

  return (
    <div className="space-y-8">
      <header className="pb-6 border-b border-border">
        <h1 className="font-headline text-4xl font-bold text-primary flex items-center gap-3">
          <Megaphone className="h-10 w-10" />
          Event Flyers
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Stay informed about upcoming events and outreach programs.
        </p>
      </header>

      {flyers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {flyers.map((flyer) => (
            <FlyerCard key={flyer.id} flyer={flyer} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No flyers available at the moment. Please check back soon!</p>
        </div>
      )}
    </div>
  );
}
