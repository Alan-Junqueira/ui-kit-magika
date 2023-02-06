export type ArticleProps = {
  id: number;
  createdAt: Date;
  owner: string;
  image: string;
  title: string;
  description: string;
  contentType: 'design' | 'branding' | 'illustration' | 'motion' | 'software';
};