import React from 'react';
import { FlowArrow } from 'phosphor-react';

import {
  StepCard,
  StepsCards,
  StepsContainer,
  StepsContent,
  StepsDescription,
  StepsPolygon
} from './styled';


import womanImage from '/assets/images/home-hero-testimonial2.png';
import menImage from '/assets/images/home-hero-testimonial1.png';
import arrowDown from '/assets/images/steps-down-arrow.svg';
import shapesSteps from '/assets/images/shape-steps.png';
import stepListSpring from '/assets/images/step-list-spring.png';
import { List } from '../List';
import { Banner } from '../Banner';

interface ISteps extends React.HTMLAttributes<HTMLDivElement> {}

export const Steps = ({ ...props }: ISteps) => {
  return (
    <StepsContainer {...props}>
      <StepsContent>
        <StepsCards>
          <StepsPolygon variant="blue" top={10} left={0.2} className="mobile" />
          <StepsPolygon variant="red" top={2} left={70} className="mobile" />
          <StepsPolygon
            variant="yellow"
            top={50}
            left={10}
            className="mobile"
          />
          <StepsPolygon
            variant="blue"
            bottom={30}
            right={5}
            className="mobile"
          />

          <StepsPolygon variant="blue" top={0} left={-60} className="desktop" />
          <StepsPolygon variant="red" top={-60} left={50} className="desktop" />
          <StepsPolygon
            variant="yellow"
            top={40}
            left={0}
            className="desktop"
          />
          <StepsPolygon
            variant="blue"
            bottom={30}
            right={-40}
            className="desktop"
          />

          <StepCard variant="yellow" className="yellow">
            <div className="shape-top">
              <img src={shapesSteps} alt="" />
            </div>

            <img src={womanImage} alt="" />
            <p>
              <strong>Contact the school,</strong> lorem ipsum dolor sit amet.
              Lorem ipsum
            </p>
          </StepCard>
          <StepCard variant="orange">
            <div className="arrow-flow">
              <FlowArrow weight="regular" />
            </div>
            <div className="arrow-down">
              <img src={arrowDown} alt="" />
            </div>
            <p>
              <strong>Fill out enrollment forms, lorem ipsum..</strong>
            </p>
          </StepCard>
          <StepCard variant="red">
            <div className="shape-bottom">
              <img src={shapesSteps} alt="" />
            </div>
            <img src={menImage} alt="" />
            <p>
              <strong>Attend orientation or registration</strong> learn more
              about the school, and get any necessary materials or information.
            </p>
          </StepCard>
        </StepsCards>
        <StepsDescription>
          <h2>Steps that you can follow to register </h2>
          <p>
            Data analytics is important because it can help businesses optimize
            their performances. It can reduce costs & storing large amounts of
            data.
          </p>
          <div className="list">
            <div className="step-list--spring">
              <img src={stepListSpring} alt="" />
            </div>
            <List
              label="Web Development"
              variant="sm-2"
              color="light"
              className="development"
            />
            <List
              label="Brand Strategy"
              variant="sm-2"
              color="light"
              className="brand"
            />
            <List
              label="Art Direction"
              variant="sm-2"
              color="light"
              className="art"
            />
          </div>
        </StepsDescription>
      </StepsContent>
      <Banner variant="secondary" />
    </StepsContainer>
  );
};
