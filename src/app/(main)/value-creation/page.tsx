
import { HeartHandshake } from 'lucide-react';

export const metadata = {
  title: 'Value Creation & Rehabilitation | Pen Evangelist',
  description: 'Teachings on value systems and value gaps, focusing on teens and young adults.',
};

export default function ValueCreationPage() {
  return (
    <div className="space-y-8">
      <header className="pb-6 border-b border-border">
        <h1 className="font-headline text-4xl font-bold text-primary flex items-center gap-3">
          <HeartHandshake className="h-10 w-10" />
          Value Creation & Rehabilitation
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Exploring value systems and addressing value gaps, with a special focus on guiding teens and young adults towards a principled life.
        </p>
      </header>

      <div className="text-center py-12">
        <p className="text-xl text-muted-foreground">Content for Value Creation & Rehabilitation is coming soon. Please check back later!</p>
      </div>
    </div>
  );
}

    