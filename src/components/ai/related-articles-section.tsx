
'use client';

import { useEffect, useState } from 'react';
import { suggestRelatedArticles, type SuggestRelatedArticlesInput } from '@/ai/flows/suggest-related-articles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ListTree, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface RelatedArticlesSectionProps {
  currentArticleTitle: string;
  currentArticleContent: string;
  currentCategory: 'bible-story' | 'blog' | 'story';
}

export function RelatedArticlesSection({
  currentArticleTitle,
  currentArticleContent,
  currentCategory,
}: RelatedArticlesSectionProps) {
  const [relatedArticles, setRelatedArticles] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRelatedArticles() {
      if (!currentArticleTitle || !currentArticleContent) {
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        setError(null);
        const input: SuggestRelatedArticlesInput = {
          articleTitle: currentArticleTitle,
          articleContent: currentArticleContent.substring(0, 30000), // Truncate for safety with model context limits
        };
        const result = await suggestRelatedArticles(input);
        setRelatedArticles(result.relatedArticles);
      } catch (err) {
        console.error('Error fetching related articles:', err);
        setError('Failed to load related articles. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchRelatedArticles();
  }, [currentArticleTitle, currentArticleContent]);

  let baseLinkPath: string;
  switch (currentCategory) {
    case 'bible-story':
      baseLinkPath = '/bible-stories';
      break;
    case 'blog':
      baseLinkPath = '/blog';
      break;
    case 'story':
      baseLinkPath = '/stories';
      break;
    default:
      baseLinkPath = '/blog'; // Fallback, should not happen with TS
  }


  if (isLoading) {
    return (
      <Card className="mt-12 shadow-md">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <ListTree className="h-6 w-6 text-primary" />
            Related Content
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-full rounded-md" />
          ))}
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="mt-12 border-destructive bg-destructive/10">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2 text-destructive">
             <AlertTriangle className="h-6 w-6" />
            Error
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!relatedArticles || relatedArticles.length === 0) {
    return null; // Or a message like "No related articles found."
  }

  return (
    <Card className="mt-12 shadow-lg bg-background rounded-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2 text-primary">
          <ListTree className="h-6 w-6" />
          You Might Also Like
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {relatedArticles.map((title, index) => (
            <li key={index} className="text-foreground/90 hover:text-primary transition-colors">
              {/* Note: Linking these would require a search or slugification logic not implemented here */}
              {/* For now, just display titles. A real implementation might link to a search for the title. */}
              <Button variant="link" asChild className="p-0 h-auto text-base text-left">
                 {/* This is a placeholder link. In a real app, you'd slugify title or search */}
                <Link href={`${baseLinkPath}?search=${encodeURIComponent(title)}`}> 
                  {title}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

    