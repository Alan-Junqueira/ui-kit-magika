import styled from 'styled-components';

export const ArticlesListContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ArticlesListFilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  background: linear-gradient(
    90deg,
    rgba(255, 156, 1, 0.22) 0%,
    rgba(251, 184, 78, 0) 100%
  );
  opacity: 0.7;
`;

export const ArticlesListFilterContent = styled.div`
  padding: 56px 152px;

  max-width: 1600px;
  width: 100%;
  height: 164px;
`;

export const ArticlesListContent = styled.div`
  width: 100%;
  max-width: 1600px;

  @media (max-width: 425px) {
  }

  @media (min-width: 426px) and (max-width: 1199px) {
  }

  @media (min-width: 1200px) {
  }
`;
