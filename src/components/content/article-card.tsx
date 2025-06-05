import Link from 'next/link';
import Image from 'next/image';
import type { ContentPost } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';

interface ArticleCardProps {
  post: ContentPost;
  baseUrl: string;
}

export function ArticleCard({ post, baseUrl }: ArticleCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg">
      {post.imageUrl && (
        <Link href={`${baseUrl}/${post.slug}`} className="block relative w-full h-56 group">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={post.dataAiHint || 'article image'}
          />
        </Link>
      )}
      <CardHeader className="p-6">
        <CardTitle className="font-headline text-2xl leading-tight mb-2">
          <Link href={`${baseUrl}/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          {post.author && (<span>by {post.author}</span>)}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-foreground/80 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="default" size="sm">
          <Link href={`${baseUrl}/${post.slug}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
