import React from 'react';
import {
  BetterGenerationContainer,
  BetterGenerationContent,
  BetterGenerationLeft,
  BetterGenerationRight
} from './styled';

import betterGenerationImage from '/assets/images/better-generation.png';

interface IBetterGeneration extends React.HTMLAttributes<HTMLDivElement> {}

export const BetterGeneration = ({ ...props }: IBetterGeneration) => {
  return (
    <BetterGenerationContainer {...props}>
      <BetterGenerationContent>
        <BetterGenerationLeft>
          <h3>Creating a better future generation</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            in hac habitasse platea dictumst vestibulum rhoncus est
            pellentesque. Gravida dictum fusce ut placerat.
          </p>
        </BetterGenerationLeft>
        <BetterGenerationRight>
          <img src={betterGenerationImage} alt="" />
        </BetterGenerationRight>
      </BetterGenerationContent>
    </BetterGenerationContainer>
  );
};
