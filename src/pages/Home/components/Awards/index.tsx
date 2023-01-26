import React from 'react';
import { AwardsFrame } from './components/AwardsFrame';
import { AwardsContainer, AwardsContent } from './styled';

interface IAwards extends React.HTMLAttributes<HTMLDivElement> {}

export const Awards = ({ ...props }: IAwards) => {
  return (
    <AwardsContainer {...props}>
      <AwardsContent>
        <h2>Awards</h2>
        <AwardsFrame date={new Date().toString()} name="SOFA" variant="first" />
        <AwardsFrame date={new Date().toString()} name="SOFA" variant="second" />
        <AwardsFrame date={new Date().toString()} name="SOFA" variant="first" />
      </AwardsContent>
    </AwardsContainer>
  );
};
