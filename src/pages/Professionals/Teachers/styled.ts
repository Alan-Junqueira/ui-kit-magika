import styled from 'styled-components';

export const TeachersContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TeachersContent = styled.div`
  width: 100%;
  max-width: 1600px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 426px) {
    gap: 32px;
    padding: 56px 24px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    gap: 56px;
    padding: 56px 72px;
  }

  @media (min-width: 1200px) {
    gap: 20px;
    padding: 104px 152px;
  }
`;
