import { getPostBySlug, getAllPosts } from '@/lib/api';
import { RelatedArticlesSection } from '@/components/ai/related-articles-section';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarDays, UserCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts().filter(p => p.category === 'blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
   if (!post || post.category !== 'blog') {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | Pen Evangelist Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post || post.category !== 'blog') {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8">
       {post.imageUrl && (
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint={post.dataAiHint || 'blog theme image'}
          />
        </div>
      )}
      <header className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          {post.author && (
            <div className="flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              <span>By {post.author}</span>
            </div>
          )}
        </div>
      </header>

      {post.content && (
        <div
          className="prose prose-lg max-w-none font-body text-foreground/90 prose-headings:font-headline prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      )}

      <Separator className="my-12" />

      <RelatedArticlesSection
        currentArticleTitle={post.title}
        currentArticleContent={post.content || post.excerpt || ''}
        currentCategory="blog"
      />
    </article>
  );
}
