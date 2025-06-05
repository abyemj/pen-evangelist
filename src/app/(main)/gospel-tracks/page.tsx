import { getPostsByCategory } from '@/lib/api';
import { DownloadCard } from '@/components/content/download-card';
import { Music2 } from 'lucide-react'; // Using Music2 as requested for differentiation

export const metadata = {
  title: 'Gospel Tracks | Pen Evangelist',
  description: 'Download uplifting gospel music tracks and hymns.',
};

export default function GospelTracksPage() {
  const gospelTracks = getPostsByCategory('gospel-track');

  return (
    <div className="space-y-8">
      <header className="pb-6 border-b border-border">
        <h1 className="font-headline text-4xl font-bold text-primary flex items-center gap-3">
          <Music2 className="h-10 w-10" />
          Gospel Tracks
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Download inspiring music to uplift your spirit.
        </p>
      </header>

      {gospelTracks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gospelTracks.map((track) => (
            <DownloadCard key={track.id} item={track} />
          ))}
        </div>
      ) : (
         <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No gospel tracks available at the moment. Please check back soon!</p>
        </div>
      )}
    </div>
  );
}
