import styled from 'styled-components';

type ArticleContainerProps = {
  image: string;
};

export const ArticleContainer = styled.article<ArticleContainerProps>`
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 72px;

  padding-right: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 36% 1fr;
    align-items: center;
    padding-right: 0;
  }

  @media (max-width: 525px) {
    display: flex;
    flex-direction: column;

    gap: 24px;
  }

  > div {
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    width: 100%;
    max-height: 412px;
    height: 100%;

    @media (max-width: 1024px) {
      max-height: 298px;
    }

    @media (max-width: 525px) {
      height: 298px;
    }
  }

  > img {
    /* max-width: 563px; */
    width: 100%;
    /* height: auto; */

    @media (max-width: 1024px) {
      /* max-width: 323px; */
    }

    @media (max-width: 425px) {
      /* max-width: 100%; */
    }
  }

  > section {
    color: ${(props) => props.theme.colors['white-1']};

    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      font-weight: 700;
      font-size: ${(props) => props.theme.sizes['64px']};
      line-height: 72px;
      text-align: justify;

      margin-bottom: 16px;

      @media (max-width: 1024px) {
        font-size: ${(props) => props.theme.sizes['32px']};
        line-height: 42px;

        margin-bottom: 8px;
      }

      @media (max-width: 525px) {
        color: ${(props) => props.theme.colors.black};
      }
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      font-weight: 400;
      font-size: ${(props) => props.theme.sizes['24px']};
      line-height: 40px;

      margin-bottom: 32px;

      @media (max-width: 1024px) {
        font-size: ${(props) => props.theme.sizes['16px']};
        line-height: 26px;

        margin-bottom: 24px;

        color: ${(props) => props.theme.colors['gray-500']};
      }

      @media (max-width: 525px) {
        color: ${(props) => props.theme.colors['grey-1']};
        margin-bottom: 0;
      }
    }

    button {
      display: none;
    }
  }
`;
