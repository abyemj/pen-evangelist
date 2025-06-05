import { getPostsByCategory } from '@/lib/api';
import { ArticleCard } from '@/components/content/article-card';
import { Newspaper } from 'lucide-react';

export const metadata = {
  title: 'Blog | Pen Evangelist',
  description: 'Read insightful articles and reflections on faith and life.',
};

export default function BlogPage() {
  const blogPosts = getPostsByCategory('blog');

  return (
    <div className="space-y-8">
      <header className="pb-6 border-b border-border">
        <h1 className="font-headline text-4xl font-bold text-primary flex items-center gap-3">
          <Newspaper className="h-10 w-10" />
          Our Blog
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Insights, reflections, and discussions on living a faith-filled life.
        </p>
      </header>

      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <ArticleCard key={post.id} post={post} baseUrl="/blog" />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No blog posts available at the moment. Please check back soon!</p>
        </div>
      )}
    </div>
  );
}
