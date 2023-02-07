import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ArticleListContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${props => props.theme.colors.bg};

  @media (max-width: 425px) {
    padding-bottom: 56px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding-bottom: 56px;
  }

  @media (min-width: 1200px) {
    padding-bottom: 107px;
  }

  div.button {
    max-width: 1600px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 425px) {
      padding: 0 24px;
      justify-content: start;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      padding: 0 108px;
    }

    @media (min-width: 1200px) {
      padding: 0 148.5px;
    }
  }
`;

export const ArticleListFilterContainer = styled.div`
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

export const ArticleListFilterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 52px;

  max-width: 1600px;
  width: 100%;
  height: 164px;

  overflow-x: auto;

  @media (max-width: 425px) {
    gap: 32px;
  }
`;

export const ArticleFilterListButton = styled.button`
  display: flex;
  align-items: center;

  font-size: ${(props) => props.theme.sizes['2xl']};
  font-weight: 500;
  line-height: 34px;

  color: ${(props) => props.theme.colors['grey-1']};

  white-space: nowrap;
  background: transparent;

  transition: all ease 0.3s;

  @media (max-width: 425px) {
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 22px;
  }

  img {
    display: none;
  }

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }

  &.active {
    font-weight: 500;
    line-height: 34px;

    background: radial-gradient(
      127.68% 423.02% at 31.82% -13.39%,
      ${(props) => props.theme.colors['brand-3']} 12.5%,
      ${(props) => props.theme.colors['brand-2']} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    img {
      display: block;
      margin-left: 56px;

      @media (max-width: 425px) {
        margin-left: 32px;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
      }

      @media (min-width: 1200px) {
      }
    }
  }
`;

export const ArticleListContent = styled.div`
  width: 100%;
  max-width: 1600px;

  display: grid;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    padding: 56px 24px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    grid-template-columns: 1fr;

    padding: 56px 108px;
  }

  @media (min-width: 769px) and (max-width: 914px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;

    padding: 56px 108px;
  }

  @media (min-width: 915px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 130px;

    padding: 56px 108px;
  }

  @media (min-width: 1025px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 164px;

    padding: 56px 108px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 164px;

    padding: 104px 148.5px;
  }

  a {
    display: none;

    @media (max-width: 425px) {
      &:nth-child(-n + 4) {
        display: flex;
      }
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      &:nth-child(-n + 6) {
        display: flex;
      }
    }

    @media (min-width: 1200px) {
      &:nth-child(-n + 9) {
        display: flex;
      }
    }
  }
`;

export const ArticleListIten = styled(Link)`
`;