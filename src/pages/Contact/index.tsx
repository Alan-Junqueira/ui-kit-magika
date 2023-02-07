import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { ContactContainer, ContactContent } from './styled';

const formInfoSchema = z.object({
  fullName: z.string().min(5, { message: 'Digite seu nome completo' }),
  phoneNumber: z.number(),
  phoneNumberValidation: z.number(),
  role: z.string()
});

type ApplyFormInputs = z.infer<typeof formInfoSchema>;

interface IContact extends React.HTMLAttributes<HTMLDivElement> {}

export const Contact = ({ ...props }: IContact) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<ApplyFormInputs>({
    resolver: zodResolver(formInfoSchema)
  });

  return (
    <ContactContainer {...props}>
      <ContactContent>fasfsadfsad</ContactContent>
    </ContactContainer>
  );
};
