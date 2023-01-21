import styled from 'styled-components';

export const ArticleContainer = styled.article`
  display: flex;
  /* align-items: center; */
  gap: 72px;



  padding-right: 30px;

  @media(max-width: 1024px) {

  }

  @media(max-width: 425px) {

  }

  > img {
    max-width: 563px;
    width: 100%;
    max-height: 412px;
    height: 100%;
  }

  > section {
    color: ${(props) => props.theme.colors['white-1']};


    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      font-weight: 700;
      font-size: ${(props) => props.theme.sizes['64px']};
      line-height: 72px;

      margin-bottom: 16px;
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
    }
  }
`;
