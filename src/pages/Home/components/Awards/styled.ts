import styled from 'styled-components';

export const AwardsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AwardsContent = styled.div`
  max-width: 1600px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 1200px) {
    padding: 104px 152px;
  }
  @media (max-width: 1199px) {
    padding: 56px 72px;
  }
  @media (max-width: 425px) {
    padding: 56px 24px;
  }

  h2 {
    text-align: center;

    font-weight: 700;
    font-size: ${props => props.theme.sizes['36px']};
    line-height: 46px;

    margin-bottom: 32px;

    color: ${(props) => props.theme.colors.black};
  }
`;
