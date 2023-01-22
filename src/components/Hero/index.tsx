import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { HeroContainer } from './styled';

interface IHero extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Hero = ({ children, ...props }: IHero) => {
  return <HeroContainer {...props}>{children}</HeroContainer>;
};
