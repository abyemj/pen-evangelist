import Image from 'next/image';
import type { ContentPost } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CalendarDays, MapPin, Info } from 'lucide-react';

interface FlyerCardProps {
  flyer: ContentPost;
}

export function FlyerCard({ flyer }: FlyerCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <div className="relative w-full aspect-[3/4] bg-muted"> {/* Common flyer aspect ratio */}
        {flyer.imageUrl && (
          <Image
            src={flyer.imageUrl}
            alt={flyer.title}
            layout="fill"
            objectFit="cover" // or "contain" depending on flyer design
            data-ai-hint={flyer.dataAiHint || 'event poster'}
          />
        )}
      </div>
      <CardHeader className="p-6">
        <CardTitle className="font-headline text-2xl leading-tight">{flyer.title}</CardTitle>
        {flyer.description && (
          <CardDescription className="text-foreground/80 mt-2 flex items-start gap-2">
            <Info className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span>{flyer.description}</span>
          </CardDescription>
        )}
      </CardHeader>
      {(flyer.eventDate || flyer.location) && (
        <CardContent className="p-6 pt-0">
          <div className="space-y-3">
            {flyer.eventDate && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-5 w-5 text-primary" />
                <span>{new Date(flyer.eventDate).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</span>
              </div>
            )}
            {flyer.location && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{flyer.location}</span>
              </div>
            )}
          </div>
        </CardContent>
      )}
       <CardFooter className="p-6 pt-0 text-xs text-muted-foreground">
        Posted on: {new Date(flyer.date).toLocaleDateString()}
      </CardFooter>
    </Card>
  );
}
