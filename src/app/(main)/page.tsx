import Link from 'next/link';
import Image from 'next/image';
import { getRecentPosts } from '@/lib/api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { ContentPost } from '@/types';

function PostCard({ post }: { post: ContentPost }) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        {post.imageUrl && (
          <div className="relative h-48 w-full mb-4 rounded-t-md overflow-hidden">
            <Image 
              src={post.imageUrl} 
              alt={post.title} 
              layout="fill" 
              objectFit="cover" 
              data-ai-hint={post.dataAiHint || 'article image'}
            />
          </div>
        )}
        <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString()} | {post.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{post.excerpt || post.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-primary hover:text-primary/80 px-0">
          <Link href={`/${post.category === 'blog' ? 'blog' : post.category === 'bible-story' ? 'bible-stories' : post.category}/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}


export default function HomePage() {
  const recentPosts = getRecentPosts(3);

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-primary/5 rounded-lg shadow-md">
        <h1 className="font-headline text-5xl font-bold text-primary mb-4">
          Welcome to Pen Evangelist
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Discover inspiring Bible stories, insightful blog posts, downloadable gospel tracks, Sunday School outlines, and event flyers.
        </p>
      </section>

      <section>
        <h2 className="font-headline text-3xl font-semibold mb-6 pb-2 border-b border-border">
          Recent Highlights
        </h2>
        {recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No recent posts to display.</p>
        )}
      </section>

      <section className="py-10 bg-secondary/30 rounded-lg shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-semibold text-secondary-foreground mb-4">Explore Our Content</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
            Navigate through our diverse collection of spiritual resources designed to uplift and educate.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/bible-stories">Bible Stories</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/blog">Blog Posts</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/gospel-tracks">Gospel Tracks </Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/sunday-school">Sunday School</Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/flyers">Flyers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
