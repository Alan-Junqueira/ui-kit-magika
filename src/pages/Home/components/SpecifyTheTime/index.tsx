import React from 'react';
import { Button } from '../../../../components/Button';
import { List } from '../../../../components/List';
import { Polygon } from '../../../../components/Polygon';
import { SpecifyTheTimeContainer, SpecifyTheTimeContent } from './styled';

import menImage from '/assets/images/men-specify-time.png';

interface ISpecifyTheTime extends React.HTMLAttributes<HTMLDivElement> {}

export const SpecifyTheTime = ({ ...props }: ISpecifyTheTime) => {
  return (
    <SpecifyTheTimeContainer {...props}>
      <SpecifyTheTimeContent>
        <div className="description">
          <h2>Specify the time and day of private class</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Button label="Get Started" variant="big" />
        </div>
        <div className="menImage">
          <img src={menImage} alt="" />
          <Polygon variant="blue" left={15} top={25} />
          <Polygon variant="orange" right={0} bottom={8} />
          <Polygon variant="yellow" left={0} />
          <Polygon variant="red" top={14} right={16} />
        </div>
      </SpecifyTheTimeContent>
    </SpecifyTheTimeContainer>
  );
};
