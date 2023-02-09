import styled from 'styled-components';

export const ElectricalEngineeringContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.bg};
`;

export const ElectricalEngineeringContent = styled.div`
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
