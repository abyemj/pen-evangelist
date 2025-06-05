
import { getPostsByCategory } from '@/lib/api';
import { ArticleCard } from '@/components/content/article-card';
import { BookText } from 'lucide-react';

export const metadata = {
  title: 'Stories | Pen Evangelist',
  description: 'Engaging fiction and life experiences captured creatively.',
};

export default function StoriesPage() {
  const stories = getPostsByCategory('story');

  return (
    <div className="space-y-8">
      <header className="pb-6 border-b border-border">
        <h1 className="font-headline text-4xl font-bold text-primary flex items-center gap-3">
          <BookText className="h-10 w-10" />
          Stories
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Dive into a world of fiction and real-life experiences, creatively narrated to inspire and provoke thought.
        </p>
      </header>

      {stories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <ArticleCard key={story.id} post={story} baseUrl="/stories" />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No stories available at the moment. Please check back soon!</p>
        </div>
      )}
    </div>
  );
}

    