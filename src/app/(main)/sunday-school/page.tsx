import { getPostsByCategory } from '@/lib/api';
import { DownloadCard } from '@/components/content/download-card';
import { ClipboardList } from 'lucide-react';

export const metadata = {
  title: 'Sunday School Outlines | Pen Evangelist',
  description: 'Download printable outlines and materials for Sunday School lessons.',
};

export default function SundaySchoolPage() {
  const outlines = getPostsByCategory('sunday-school');

  return (
    <div className="space-y-8">
      <header className="pb-6 border-b border-border">
        <h1 className="font-headline text-4xl font-bold text-primary flex items-center gap-3">
          <ClipboardList className="h-10 w-10" />
          Sunday School Outlines
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Resources and lesson plans for engaging Sunday School teaching.
        </p>
      </header>

      {outlines.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {outlines.map((outline) => (
            <DownloadCard key={outline.id} item={outline} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No Sunday School outlines available at the moment. Please check back soon!</p>
        </div>
      )}
    </div>
  );
}
