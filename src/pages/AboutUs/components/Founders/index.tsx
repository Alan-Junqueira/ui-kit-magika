import React from 'react';
import { Slider } from '../Slider';
import { FoundersContainer, FoundersContent } from './styled';

interface IFounders extends React.HTMLAttributes<HTMLDivElement> {}

import foundderJuan from '/assets/images/foundder-juan.png';
import foundderJacinto from '/assets/images/foundder-jacinto.png';
import foundderGregory from '/assets/images/foundder-gregory.png';

type SlideIten = {
  image: string;
  title: string;
  description?: string;
  variant: 'blue' | 'orange' | 'red';
};

export const Founders = ({ ...props }: IFounders) => {
  const founder: SlideIten[] = [
    {
      image: foundderJuan,
      title: 'Juan Encalada',
      description: "The foundation's president",
      variant: 'red'
    },
    {
      image: foundderJacinto,
      title: 'jacinto Diego',
      description: 'Principal of the brida school',
      variant: 'blue'
    },
    {
      image: foundderGregory,
      title: 'Gregory Hayes',
      description: 'Deputy headmaster brida',
      variant: 'orange'
    }
  ];

  return (
    <FoundersContainer {...props}>
      <FoundersContent>
        <h3>Founder of brida university</h3>
        <p>Here are the figures who have founded brida university</p>
        <Slider slideIten={founder} />
      </FoundersContent>
    </FoundersContainer>
  );
};
