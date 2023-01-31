import React from 'react';
import { HeroCardContainer } from './styled';

interface IFounder extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description?: string;
  variant: 'blue' | 'orange' | 'red';
}

export const HeroCard = ({
  image,
  title,
  description,
  variant,
  ...props
}: IFounder) => {
  return (
    <HeroCardContainer image={image} variant={variant} {...props}>
      <div className="content">
        <img src={image} alt="" />
        <div className="description">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </HeroCardContainer>
  );
};
