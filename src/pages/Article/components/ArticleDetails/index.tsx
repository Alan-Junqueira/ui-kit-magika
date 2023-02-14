import React, { useCallback, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

import { TEMPORARY_ARTICLES } from '../../../../services/database/articles';

import { Article } from '../../../../components/Article';

import {
  ArticleDetailsContainer,
  ArticleDetailsContent,
  ArticleDetailsAside,
  ArticleDetailsAsideLink,
  ArticleDetailsAsideTitle,
  ArticleDetailsAsideLiks,
  ArticleDetailsMainContent
} from './styled';

import bloquoteShape from '/assets/images/bloquote-shape.svg';

import { ArticleProps } from '../../../../@types/article';

interface IArticleDetails extends React.HTMLAttributes<HTMLDivElement> {}

export const ArticleDetails = ({ ...props }: IArticleDetails) => {
  const [articlesToShow, setArticlesToShow] = useState<ArticleProps[]>([]);

  const getArticlesToShow = useCallback(() => {
    let randonIndexes: [number, number, number] = [0, 0, 0];
    let randonNumber = Math.floor(Math.random() * TEMPORARY_ARTICLES.length);

    if (randonNumber > TEMPORARY_ARTICLES.length - 3) {
      randonIndexes[0] = randonNumber;
      randonIndexes[1] = randonNumber - 1;
      randonIndexes[2] = randonNumber - 2;
    } else {
      randonIndexes[0] = randonNumber;
      randonIndexes[1] = randonNumber + 1;
      randonIndexes[2] = randonNumber + 2;
    }

    let articlesArray = [
      TEMPORARY_ARTICLES[randonIndexes[0]],
      TEMPORARY_ARTICLES[randonIndexes[1]],
      TEMPORARY_ARTICLES[randonIndexes[2]]
    ];

    setArticlesToShow(articlesArray);
  }, [TEMPORARY_ARTICLES]);

  useEffect(() => {
    getArticlesToShow();
  }, []);

  return (
    <ArticleDetailsContainer {...props}>
      <ArticleDetailsContent>
        <ArticleDetailsMainContent>
          <Fade left>
            <h5>
              Agency provides a full service range including technical skills,
              design, business understanding.
            </h5>
            <p>
              Outsource your digital marketing efforts, instead of handling
              in-house. They can provide your business with a variety of digital
              solutions to promote your product or service online and help you.
            </p>
            <h4>Promote your product</h4>
            <p>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p>
            <div className="our-qualities">
              <span>Digital Marketing</span>
              <span>Efforts instead</span>
              <span>Handling in-house</span>
            </div>
            <p>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
            <h4>Service online and help</h4>
            <p>
              Put themselves in the merchant's shoes. It is meant to partner on
              the long run, and work as an extension of the merchant's team.
            </p>
            <p>1. Marketing efforts</p>
            <p>2. Instead of handling</p>
            <p>3. n-house</p>
            <p>
              Agency is a business you hire to outsource your digital marketing
              efforts, instead of handling in-house. They can provide your
              business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
            <blockquote cite="">
              <img src={bloquoteShape} alt="" />
              <p>
                Provide your business with a variety of digital solutions to
                promote your product or service online and help you.
              </p>
            </blockquote>
            <p>
              Outsource your digital marketing efforts, instead of handling
              in-house. They can provide your business with a variety of digital
              solutions to promote your product or service online and help you.
            </p>
            <p>
              Outsource your digital marketing efforts, instead of handling
              in-house. They can provide your business with a variety of digital
              solutions to promote your product or service online and help
              you.business with a variety of digital solutions to promote your
              product or service online and help you.Outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.business with a variety of
              digital solutions to promote your product or service online and
              help you.
            </p>
          </Fade>
        </ArticleDetailsMainContent>
        <ArticleDetailsAside>
          <ArticleDetailsAsideTitle>Popular Article</ArticleDetailsAsideTitle>
          <ArticleDetailsAsideLiks>
            {articlesToShow &&
              articlesToShow.map((article, index) => (
                <ArticleDetailsAsideLink
                  to={`/article/${article.id}`}
                  key={index}
                >
                  <Article
                    description={article.description}
                    image={article.image}
                    title={article.title}
                  />
                </ArticleDetailsAsideLink>
              ))}
          </ArticleDetailsAsideLiks>
        </ArticleDetailsAside>
      </ArticleDetailsContent>
    </ArticleDetailsContainer>
  );
};
