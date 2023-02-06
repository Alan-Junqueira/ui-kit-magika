import { ArticleProps } from "../../@types/article";

import article1 from '/assets/images/article-1.png';
import article2 from '/assets/images/article-2.png';
import article3 from '/assets/images/article-3.png';
import article4 from '/assets/images/article-4.png';
import article5 from '/assets/images/article-5.png';
import article6 from '/assets/images/article-6.png';
import article7 from '/assets/images/article-7.png';
import article8 from '/assets/images/article-8.png';
import article9 from '/assets/images/article-9.png';

const TEMPORARY_TITLE = 'Tips on choosing a university';
const TEMPORARY_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,';

export const TEMPORARY_ARTICLES: ArticleProps[] = [
  {
    id: 1,
    createdAt: new Date(),
    owner: 'Alan Junqueira',
    image: article1,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'branding'
  },
  {
    id: 2,
    createdAt: new Date(),
    owner: 'Alan Junqueira',
    image: article2,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'design'
  },
  {
    id: 3,
    createdAt: new Date(),
    owner: 'Alan Junqueira',
    image: article3,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'illustration'
  },
  {
    id: 4,
    createdAt: new Date(),
    owner: 'Alan Junqueira',
    image: article4,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'motion'
  },
  {
    id: 5,
    createdAt: new Date(),
    owner: 'Alan Junqueira',
    image: article5,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'software'
  },
  {
    id: 6,
    createdAt: new Date(),
    owner: 'Alan Junqueira',
    image: article6,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'branding'
  },
  {
    id: 7,
    createdAt: new Date(),
    owner: 'Alan Junqueira',
    image: article7,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'design'
  },
  {
    id: 8,
    createdAt: new Date(),
    owner: 'Alan Junqueira',
    image: article8,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'illustration'
  },
  {
    id: 9,
    createdAt: new Date(),
    owner: 'Alan Junqueira',
    image: article9,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'motion'
  }
];