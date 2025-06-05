
import { getPostBySlug, getAllPosts } from '@/lib/api';
import { RelatedArticlesSection } from '@/components/ai/related-articles-section';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarDays, UserCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface StoryPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts().filter(p => p.category === 'story');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: StoryPageProps) {
  const story = getPostBySlug(params.slug);
   if (!story || story.category !== 'story') {
    return {
      title: 'Story Not Found',
    };
  }
  return {
    title: `${story.title} | Pen Evangelist Stories`,
    description: story.excerpt,
  };
}

export default function StoryPage({ params }: StoryPageProps) {
  const story = getPostBySlug(params.slug);

  if (!story || story.category !== 'story') {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8">
       {story.imageUrl && (
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src={story.imageUrl}
            alt={story.title}
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint={story.dataAiHint || 'story illustration'}
          />
        </div>
      )}
      <header className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
          {story.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>Published on {new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          {story.author && (
            <div className="flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              <span>By {story.author}</span>
            </div>
          )}
        </div>
      </header>

      {story.content && (
        <div
          className="prose prose-lg max-w-none font-body text-foreground/90 prose-headings:font-headline prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />
      )}

      <Separator className="my-12" />

      <RelatedArticlesSection
        currentArticleTitle={story.title}
        currentArticleContent={story.content || story.excerpt || ''}
        currentCategory="story"
      />
    </article>
  );
}

    