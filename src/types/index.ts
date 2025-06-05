export interface ContentPost {
  id: string;
  slug: string;
  title: string;
  category: 'bible-story' | 'blog' | 'gospel-track' | 'sunday-school' | 'flyer';
  date: string; // ISO string for sorting/display
  excerpt?: string; // For article lists
  content?: string; // Full content for articles/blogs
  author?: string;
  imageUrl?: string; // For flyers, article headers, track/outline thumbnails
  downloadUrl?: string; // For downloadable content
  fileType?: string; // e.g., PDF, DOCX for downloadables
  eventDate?: string; // For flyers
  location?: string; // For flyers
  dataAiHint?: string; // For placeholder image search keywords
}
