'use server';

/**
 * @fileOverview AI flow to suggest related articles based on the content of the current article.
 *
 * - suggestRelatedArticles - A function that suggests related articles.
 * - SuggestRelatedArticlesInput - The input type for the suggestRelatedArticles function.
 * - SuggestRelatedArticlesOutput - The return type for the suggestRelatedArticles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelatedArticlesInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The content of the current article to find related articles for.'),
  articleTitle: z.string().describe('The title of the current article.'),
});
export type SuggestRelatedArticlesInput = z.infer<typeof SuggestRelatedArticlesInputSchema>;

const SuggestRelatedArticlesOutputSchema = z.object({
  relatedArticles: z
    .array(z.string())
    .describe('An array of titles of related articles.'),
});
export type SuggestRelatedArticlesOutput = z.infer<typeof SuggestRelatedArticlesOutputSchema>;

export async function suggestRelatedArticles(
  input: SuggestRelatedArticlesInput
): Promise<SuggestRelatedArticlesOutput> {
  return suggestRelatedArticlesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelatedArticlesPrompt',
  input: {schema: SuggestRelatedArticlesInputSchema},
  output: {schema: SuggestRelatedArticlesOutputSchema},
  prompt: `You are an expert at suggesting related articles based on the content of the current article.

  Given the content and title of the current article, suggest 3 related articles.
  Return the titles of the suggested articles in an array.

  Current Article Title: {{{articleTitle}}}
  Current Article Content: {{{articleContent}}}
  `,
});

const suggestRelatedArticlesFlow = ai.defineFlow(
  {
    name: 'suggestRelatedArticlesFlow',
    inputSchema: SuggestRelatedArticlesInputSchema,
    outputSchema: SuggestRelatedArticlesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
