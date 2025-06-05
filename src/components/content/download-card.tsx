import Link from 'next/link';
import Image from 'next/image';
import type { ContentPost } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Music2, CalendarDays } from 'lucide-react';

interface DownloadCardProps {
  item: ContentPost;
}

export function DownloadCard({ item }: DownloadCardProps) {
  const Icon = item.category === 'gospel-track' ? Music2 : FileText;
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg">
      {item.imageUrl && (
         <div className="relative w-full h-48 bg-secondary/50">
            <Image
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit="contain" // Use contain for thumbnails like music sheets or document icons
              className="p-4"
              data-ai-hint={item.dataAiHint || 'document icon'}
            />
        </div>
      )}
      <CardHeader className="p-6">
        <CardTitle className="font-headline text-xl leading-tight mb-1">
          {item.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground flex items-center gap-2">
         <CalendarDays className="h-4 w-4" />
         <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
         {item.fileType && <span className="font-medium text-primary">{item.fileType}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-foreground/80 line-clamp-3">{item.description || item.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {item.downloadUrl ? (
          <Button asChild className="w-full" size="lg">
            <Link href={item.downloadUrl} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download {item.fileType || ''}
            </Link>
          </Button>
        ) : (
          <Button disabled className="w-full" size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download Unavailable
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
