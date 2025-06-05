import { mockPosts } from '@/data/mock';
import type { ContentPost } from '@/types';

export function getAllPosts(): ContentPost[] {
  return mockPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByCategory(category: ContentPost['category']): ContentPost[] {
  return getAllPosts().filter(post => post.category === category);
}

export function getPostBySlug(slug: string): ContentPost | undefined {
  return getAllPosts().find(post => post.slug === slug);
}

export function getRecentPosts(limit: number = 3): ContentPost[] {
  return getAllPosts().slice(0, limit);
}
