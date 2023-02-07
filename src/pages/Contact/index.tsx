import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ContactContainer,
  ContactContent,
  ContactDescription,
  ContactForm,
  ContactFormRole,
  ContactFormRoleButton,
  ContactFormRoleTitle,
  ContactMain,
  ContactNavigateToHome,
  ContactPolygon,
  ContactTitle
} from './styled';
import { Button } from '../../components/Button';

import womanImage from '/assets/images/contact-woman.png';
import { Link } from 'react-router-dom';

const formInfoSchema = z.object({
  fullName: z.string().min(5, { message: 'Digite seu nome completo' }),
  phoneNumber: z.string().regex(/^[0-9]+$/),
  phoneNumberValidation: z.string().regex(/^[0-9]+$/),
  role: z.enum([
    'software-enginering',
    'teacher',
    'admin-staff',
    'visual-design'
  ])
});

type ApplyFormInputs = z.infer<typeof formInfoSchema>;

interface IContact extends React.HTMLAttributes<HTMLDivElement> {}

export const Contact = ({ ...props }: IContact) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<ApplyFormInputs>({
    resolver: zodResolver(formInfoSchema),
    defaultValues: {
      role: 'software-enginering'
    }
  });

  const handleRegistration = async (data: ApplyFormInputs) => {
    await new Promise((resolver) => setTimeout(resolver, 2000));
    if (data.phoneNumber === data.phoneNumberValidation) {
      console.log(data);
    } else {
      alert('Números de telefone diferentes');
    }
  };

  return (
    <ContactContainer {...props}>
      <ContactContent>
        <ContactNavigateToHome to={'/'}>Back to HomePage</ContactNavigateToHome>
        <ContactMain>
          <div className="image">
            <ContactPolygon variant="red" bottom={20} left={10} />
            <ContactPolygon variant="blue" bottom={15} right={10} />
            <ContactPolygon variant="blue" top={10} left={30} />
            <ContactPolygon variant="red" top={0} right={30} />
            <ContactPolygon variant="orange" bottom={-50} right={50} />
            <img src={womanImage} alt="" />
          </div>
          <div className="texts">
            <ContactTitle>Registration form to join brida</ContactTitle>
            <ContactDescription>
              Here are the reasons why objects can be the most popular school
              today
            </ContactDescription>
          </div>
        </ContactMain>
        <ContactForm onSubmit={handleSubmit(handleRegistration)}>
          <input
            type="text"
            required
            placeholder="Full Name"
            {...register('fullName')}
          />
          <input
            type="text"
            required
            placeholder="Phone Number"
            {...register('phoneNumber')}
          />
          <input
            type="text"
            required
            placeholder="Phone Number"
            {...register('phoneNumberValidation')}
          />
          <ContactFormRoleTitle>Select Role</ContactFormRoleTitle>
          <Controller
            control={control}
            name="role"
            render={({ field }) => {
              return (
                <ContactFormRole
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <ContactFormRoleButton
                    value="software-enginering"
                    {...register('role')}
                  >
                    <div className="circle"></div>
                    <span>ROLE</span> Software Enginering
                  </ContactFormRoleButton>
                  <ContactFormRoleButton value="teacher" {...register('role')}>
                    <div className="circle"></div>
                    <span>ROLE</span> Teacher
                  </ContactFormRoleButton>
                  <ContactFormRoleButton
                    value="admin-staff"
                    {...register('role')}
                  >
                    <div className="circle"></div>
                    <span>ROLE</span> Admin Staff
                  </ContactFormRoleButton>
                  <ContactFormRoleButton
                    value="visual-design"
                    {...register('role')}
                  >
                    <div className="circle"></div>
                    <span>ROLE</span> Visual Designer
                  </ContactFormRoleButton>
                </ContactFormRole>
              );
            }}
          />
          <Button
            label="Apply"
            variant="big"
            full
            type="submit"
            disabled={isSubmitting}
          />
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};
