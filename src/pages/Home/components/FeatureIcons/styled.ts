import styled from 'styled-components';

export const FeatureIconstContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${props => props.theme.colors.bg};
`;

export const FeatureIconsContent = styled.div`
  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 56px;
    padding-block: 56px;
  }

  @media (max-width: 1199px) {
    width: 100%;
    padding: 120px 72px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 56px;
    padding-block: 56px;
  }

  @media (min-width: 1200px) {
    width: 100%;
    padding: 120px 152px;
    display: grid;
    grid-template-columns: 1fr 1fr 300px;
    align-items: center;
    /* justify-content: space-between; */
    padding-block: 56px;
  }

  @media (min-width: 1440px) {
    max-width: 1600px;
  }
`;
