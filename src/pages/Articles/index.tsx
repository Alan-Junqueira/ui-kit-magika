import Fade from 'react-reveal/Fade';
import { Banner } from '../../components/Banner';
import { ArticleList } from './components/ArticlesList';
import { ArticleHero } from './components/Hero';
import { ArticlesContainer } from './styled';

export const Articles = () => {
  return (
    <ArticlesContainer>
      <ArticleHero id="articles-page--hero" />
      <Fade left>
        <ArticleList id="articles-page--article-lists" />
      </Fade>
      <Banner variant="secondary" />
    </ArticlesContainer>
  );
};
