import styled from 'styled-components';

export const ReadBlogsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ReadBlogsContent = styled.div`
  max-width: 1600px;
  width: 100%;

  @media (max-width: 425px) {
    padding: 56px 24px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 104px 108px;
  }

  @media (min-width: 1200px) {
    padding: 104px 153px;
  }

  > div.main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;

    @media (max-width: 425px) {
      width: 100%;

      margin-bottom: 32px;
      gap: 16px;
    }

    @media (min-width: 426px) {
      max-width: 718px;
      width: 100%;

      gap: 24px;
      margin-bottom: 104px;
    }

    h2 {
      color: ${(props) => props.theme.colors.black};
      text-align: center;

      @media (min-width: 1200px) {
        font-weight: 500;
        font-size: ${(props) => props.theme.sizes['48px']};
        line-height: 60px;
      }
      @media (max-width: 1199px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['36px']};
        line-height: 46px;
      }
      @media (max-width: 425px) {
      }
    }

    p {
      font-weight: 400;
      font-size: ${(props) => props.theme.sizes['16px']};
      line-height: 26px;

      text-align: center;

      color: ${(props) => props.theme.colors.black};

      opacity: 0.7;
      @media (max-width: 425px) {
        opacity: 0.8;
      }
    }
  }

  > div.articles {
    display: flex;

    @media (max-width: 425px) {
      flex-direction: column;
      gap: 32px;
      article.article-3 {
        display: none;
      }
    }

    @media (min-width: 426px) and (max-width: 949px) {
      gap: 32px;
      flex-direction: column;
      article.article-3 {
        display: none;
      }
    }

    @media (min-width: 950px) and (max-width: 1199px) {
      gap: 80px;
      article.article-3 {
        display: none;
      }
    }

    @media (min-width: 1200px) {
      gap: 164px;
    }
  }
`;
