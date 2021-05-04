import React, { FC } from 'react'
import * as ContactFormStyles from './styled'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
  firstName: string
  telNumber: string
  email: string
  customerMsg: string
}

const ContactForm: FC = () => {
  const { register, errors, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => alert(JSON.stringify(data))

  return (
    <ContactFormStyles.Wrapper>
      <ContactFormStyles.Form onSubmit={handleSubmit(onSubmit)}>
        <ContactFormStyles.FormField>
          <ContactFormStyles.Label htmlFor="firstName">Jūsų vardas *</ContactFormStyles.Label>
          <ContactFormStyles.Input
            name="firstName"
            ref={register({ required: 'Būtina užpildyti' })}
          />
          {errors.firstName && (
            <ContactFormStyles.Error>{errors.firstName.message}</ContactFormStyles.Error>
          )}
        </ContactFormStyles.FormField>

        <ContactFormStyles.FormField>
          <ContactFormStyles.Label htmlFor="telNumber">Tel. Nr. *</ContactFormStyles.Label>
          <ContactFormStyles.Input
            name="telNumber"
            ref={register({
              required: 'Būtina užpildyti',
              pattern: {
                value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                message: 'Neteisingas telefono numerio formatas',
              },
            })}
          />
          {errors.telNumber && (
            <ContactFormStyles.Error>{errors.telNumber?.message}</ContactFormStyles.Error>
          )}
        </ContactFormStyles.FormField>

        <ContactFormStyles.FormField>
          <ContactFormStyles.Label htmlFor="email">El. Paštas *</ContactFormStyles.Label>
          <ContactFormStyles.Input
            name="email"
            ref={register({
              required: 'Būtina užpildyti',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Neteisingas pašto adresas',
              },
            })}
          />
          {errors.email && (
            <ContactFormStyles.Error>{errors.email.message}</ContactFormStyles.Error>
          )}
        </ContactFormStyles.FormField>

        <ContactFormStyles.FormField>
          <ContactFormStyles.Label htmlFor="customerMsg">Žinutė *</ContactFormStyles.Label>
          <ContactFormStyles.TextArea
            name="customerMsg"
            ref={register({ required: 'Būtina užpildyti' })}
          />
          {errors.customerMsg && (
            <ContactFormStyles.Error>{errors.customerMsg.message}</ContactFormStyles.Error>
          )}
        </ContactFormStyles.FormField>

        <ContactFormStyles.SubmitBtn type="submit">Siųsti</ContactFormStyles.SubmitBtn>
      </ContactFormStyles.Form>
    </ContactFormStyles.Wrapper>
  )
}

export default ContactForm
