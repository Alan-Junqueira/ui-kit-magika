import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionInterface } from '../../../../@types/sectionInterface';
import { Button } from '../../../../components/Button';
import {
  RegisterAction,
  RegisterActionDescription,
  RegisterActionTitle,
  RegisterContainer,
  RegisterContent,
  RegisterStep,
  RegisterSteps
} from './styled';

interface IRegister extends SectionInterface {}

export const Register = ({ ...props }: IRegister) => {
  const navigate = useNavigate();

  return (
    <RegisterContainer {...props}>
      <RegisterContent>
        <RegisterSteps>
          <RegisterStep>
            <strong>1</strong> Fill out the Registration Form
          </RegisterStep>
          <RegisterStep>
            <strong>2</strong> Waiting for an interview call
          </RegisterStep>
          <RegisterStep>
            <strong>3</strong> Join the Brida family
          </RegisterStep>
        </RegisterSteps>
        <RegisterAction>
          <RegisterActionTitle>Register now with the button below.</RegisterActionTitle>
          <RegisterActionDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </RegisterActionDescription>
          <Button
            label="Get Started"
            variant="big"
            onClick={() => navigate('/contact')}
          />
        </RegisterAction>
      </RegisterContent>
    </RegisterContainer>
  );
};
