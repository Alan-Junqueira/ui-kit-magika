import React from 'react';
import { Button } from '../../../../components/Button';
import {
  OurWayPolygon,
  OurWayTeachingContainer,
  OurWayTeachingContent,
  OurWayTeachingLeft,
  OurWayTeachingRight
} from './styled';

import womanImage from '/assets/images/about-way-teaching-woman.png';
import menImage from '/assets/images/about-way-teaching-men.png';
import goldenShape from '/assets/images/golden-shape.svg';

interface IOurWayTeaching extends React.HTMLAttributes<HTMLDivElement> {}

export const OurWayTeaching = ({ ...props }: IOurWayTeaching) => {
  return (
    <OurWayTeachingContainer {...props}>
      <OurWayTeachingContent>
        <OurWayTeachingLeft>
          <h3>Our way of teaching</h3>
          <p>
            Make it easier for all students to do learning through digital media
            with existing media making it easier for students to learn anywhere
            and anytime.
          </p>
          <Button label="Read More" variant="big" />
        </OurWayTeachingLeft>
        <OurWayTeachingRight>
          <OurWayPolygon variant="blue" left={0} top={10} />
          <OurWayPolygon variant="red" right={30} top={0} />
          <div className="woman">
            <OurWayPolygon variant="yellow" right={20} bottom={-100} />
            <img src={womanImage} alt="" />
            <span>Enjoy & Playful</span>
          </div>
          <div className="men">
            <div className="shape">
              <img src={goldenShape} alt="" />
            </div>
            <h4>We have great teachers</h4>
            <div className='menImage'>
              <img src={menImage} alt="" />
              <span>Enjoy & Playful</span>
            </div>
          </div>
        </OurWayTeachingRight>
      </OurWayTeachingContent>
    </OurWayTeachingContainer>
  );
};
