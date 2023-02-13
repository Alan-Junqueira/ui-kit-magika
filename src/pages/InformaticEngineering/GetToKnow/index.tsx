import React from 'react';
import { SectionInterface } from '../../../@types/sectionInterface';
import { List } from '../../../components/List';
import {
  GetToKnowContainer,
  GetToKnowContent,
  GetToKnowDescription,
  GetToKnowImageContainer,
  GetToKnowListsContainer,
  GetToKnowTextsContainer,
  GetToKnowTitle
} from './styled';

import womanImage from '/assets/images/programs-informatic-engineering-get-know.png';

interface IGetToKnow extends SectionInterface {}

export const GetToKnow = ({ ...props }: IGetToKnow) => {
  return (
    <GetToKnowContainer {...props}>
      <GetToKnowContent>
        <GetToKnowTextsContainer className="texts">
          <GetToKnowTitle>
            Get to know the Informatic Enginering major{' '}
          </GetToKnowTitle>
          <GetToKnowDescription>
            Make it easier for all students to do learning through digital media
            with existing media making it easier for students to learn anywhere
            and anytime.
          </GetToKnowDescription>

          <GetToKnowListsContainer className="lists">
            <List label="World Class" color="dark" variant="lg" />
            <List label="Easy Learning" color="dark" variant="lg" />
            <List label="Flexibel" color="dark" variant="lg" />
            <List label="Affordable" color="dark" variant="lg" />
          </GetToKnowListsContainer>
        </GetToKnowTextsContainer>

        <GetToKnowImageContainer className="image">
          <img src={womanImage} alt="" />
        </GetToKnowImageContainer>
      </GetToKnowContent>
    </GetToKnowContainer>
  );
};
