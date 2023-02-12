import styled from 'styled-components';

export const RegisterContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${(props) => props.theme.colors.bg}; ;
`;

export const RegisterContent = styled.div`
  width: 100%;
  max-width: 1600px;

  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 56px 24px;
    gap: 40px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    flex-direction: column;
    padding: 104px 72px;
    gap: 40px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 104px 72px;
    gap: 56px;
  }

  @media (min-width: 1200px) {
    padding: 104px 152px;

    gap: 180px;
  }
`;

export const RegisterSteps = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 450px;

  @media (max-width: 1199px) {
    gap: 32px;
  }

  @media (min-width: 1200px) {
    gap: 72px;
  }
`;

export const RegisterStep = styled.span`
  display: flex;
  align-items: center;

  font-weight: 700;

  color: ${(props) => props.theme.colors.black};

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes['2xl']};
    line-height: 34px;

    gap: 16px;

    strong {
      font-family: 'Epilogue';
      font-weight: 700;
      font-size: 4.2rem;
      line-height: 48px;
    }
  }
  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes.lg};
    line-height: 28px;

    gap: 16px;

    strong {
      font-family: 'Epilogue';

      font-weight: 700;
      font-size: ${(props) => props.theme.sizes['4xl']};
      line-height: 46px;
    }
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.sizes['2xl']};
    line-height: 34px;

    gap: 54px;

    strong {
      font-family: 'Epilogue';
      font-weight: 800;
      font-size: ${(props) => props.theme.sizes['7xl']};
      line-height: 80px;

      letter-spacing: -2px;
    }
  }
`;

export const RegisterAction = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RegisterActionTitle = styled.h2`
  font-weight: 700;

  color: ${(props) => props.theme.colors.black};

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;

    margin-bottom: 16px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;

    margin-bottom: 52px;
  }

  @media (min-width: 1200px) {
    font-size: 6.4rem;
    line-height: 72px;

    margin-bottom: 52px;
  }
`;

export const RegisterActionDescription = styled.p`
  font-weight: 400;
  opacity: 0.7;

  color: ${(props) => props.theme.colors.black};

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    margin-bottom: 40px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    margin-bottom: 64px;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem;
    line-height: 34px;

    margin-bottom: 64px;
  }
`;
