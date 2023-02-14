import React from 'react';
import { SectionInterface } from '../../../@types/sectionInterface';
import { LearnIten } from '../../../components/LearnIten';
import {
  ThingsToLearnContainer,
  ThingsToLearnContent,
  ThingsToLearnDescription,
  ThingsToLearnItens,
  ThingsToLearnTexts,
  ThingsToLearnTitle
} from './styled';

interface IThingsToLearn extends SectionInterface {}

export const ThingsToLearn = ({ ...props }: IThingsToLearn) => {
  return (
    <ThingsToLearnContainer {...props}>
      <ThingsToLearnContent>
        <ThingsToLearnTexts className="texts">
          <ThingsToLearnTitle>Things you’ll learn</ThingsToLearnTitle>
          <ThingsToLearnDescription>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </ThingsToLearnDescription>
        </ThingsToLearnTexts>

        <ThingsToLearnItens>
          <div>
            <LearnIten bgColor="yellow" label="How to find a perfect niche" />
            <LearnIten bgColor="red" label="Learn mobile programming" />
            <LearnIten bgColor="orange" label="How to find a perfect niche" />
          </div>
          <div>
            <LearnIten bgColor="blue" label="Building brand awareness" />
            <LearnIten bgColor="yellow" label="Growth hacks for Github" />
          </div>
          <div>
            <LearnIten bgColor="orange" label="Learn website development" />
            <LearnIten bgColor="red" label="Learn to build a portfolio" />
            <LearnIten bgColor="blue" label="How to find a perfect niche" />
          </div>
        </ThingsToLearnItens>
      </ThingsToLearnContent>
    </ThingsToLearnContainer>
  );
};
