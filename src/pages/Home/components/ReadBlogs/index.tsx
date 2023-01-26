import React from 'react';
import { Article } from '../../../../components/Article';
import { ReadBlogsContainer, ReadBlogsContent } from './styled';

import articleImage1 from '/assets/images/article-1.png';
import articleImage2 from '/assets/images/article-2.png';
import articleImage3 from '/assets/images/article-3.png';

interface IReadBlogs extends React.HTMLAttributes<HTMLDivElement> {}

export const ReadBlogs = ({ ...props }: IReadBlogs) => {
  return (
    <ReadBlogsContainer {...props}>
      <ReadBlogsContent>
        <div className="main">
          <h2>Read our blogs to learn more about cyber security</h2>
          <p>
            Our CyberNews Investigation team uses white hacking techniques to
            find and safely cybersecurity threats & vulnerabilities.
          </p>
        </div>
        <div className="articles">
          <Article
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            title="Tips on choosing a university"
            image={articleImage1}
            color="dark"
            className="article-1"
          />
          <Article
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            title="Tips on choosing a university"
            image={articleImage2}
            color="dark"
            className="article-2"
          />
          <Article
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            title="Tips on choosing a university"
            image={articleImage3}
            color="dark"
            className="article-3"
          />
        </div>
      </ReadBlogsContent>
    </ReadBlogsContainer>
  );
};
