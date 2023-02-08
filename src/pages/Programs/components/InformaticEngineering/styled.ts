import styled from 'styled-components';

export const InformaticEngineeringContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InformaticEngineeringContent = styled.div`
  max-width: 1600px;
  width: 100%;

  @media (max-width: 425px) {
    padding: 56px 24px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 72px;
  }

  @media (min-width: 1200px) {
    padding: 72px 152px;
  }
`;
