export type ArticleProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  contentType: 'design' | 'branding' | 'illustration' | 'motion' | 'software';
};