import styled from 'styled-components';

type ArticleContainerProps = {
  image: string;
};

export const ArticleContainer = styled.article<ArticleContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 298px;
  }

  > img {
    width: 100%;
    height: auto;
  }

  > section {
    color: ${(props) => props.theme.colors['white-1']};

    display: flex;
    flex-direction: column;

    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      font-weight: 700;

      color: ${(props) => props.theme.colors.black};
      font-size: 3.2rem;
      line-height: 42px;
      text-align: justify;

      margin-bottom: 8px;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      font-weight: 400;
      font-size: ${(props) => props.theme.sizes.base};
      line-height: 26px;

      text-align: justify;

      color: ${(props) => props.theme.colors['grey-1']};
    }
  }
`;
