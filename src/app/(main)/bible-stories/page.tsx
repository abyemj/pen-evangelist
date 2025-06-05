import { getPostsByCategory } from '@/lib/api';
import { ArticleCard } from '@/components/content/article-card';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Bible Stories | Pen Evangelist',
  description: 'Read inspiring and timeless stories from the Bible.',
};

export default function BibleStoriesPage() {
  const bibleStories = getPostsByCategory('bible-story');

  return (
    <div className="space-y-8">
      <header className="pb-6 border-b border-border">
        <h1 className="font-headline text-4xl font-bold text-primary flex items-center gap-3">
          <BookOpen className="h-10 w-10" />
          Bible Stories
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Discover timeless narratives of faith, hope, and divine wisdom.
        </p>
      </header>

      {bibleStories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bibleStories.map((story) => (
            <ArticleCard key={story.id} post={story} baseUrl="/bible-stories" />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No Bible stories available at the moment. Please check back soon!</p>
        </div>
      )}
    </div>
  );
}
