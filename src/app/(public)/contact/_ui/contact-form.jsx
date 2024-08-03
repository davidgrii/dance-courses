'use client';

import { Spinner } from '@/shared/ui/spinner';
import React from 'react';
import { Button } from '@/shared/ui/button';
import CheckboxWithText from '@/features/auth/login/_ui/login-checkbox';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '@/app/validationSchemas';
import { EmailIcon, NameIcon, PhoneNumberIcon } from '@/app/(public)/contact/icons/icons';

const ContactForm = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange'
  });


  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert(`Failed to send message: ${result.error}`);
      }

    } catch (error) {
      alert('An error occurred while sending the message.');
      console.error('Error:', error);
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-left font-light">
          <div className="sm:col-span-2">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                placeholder="Your First Name"
                className="block w-full border-1 rounded-full py-5 text-lg px-7 bg-background/0 placeholder-foreground/70"
                {...register('name')}
              />
              {errors.name && <p className="text-red-500 pt-3">{errors.name.message}</p>}
              <i className="absolute right-[25px] top-[18px] opacity-80">
                {<NameIcon />}
              </i>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2 relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                autoComplete="email"
                className="block w-full border-1 rounded-full py-5 text-lg px-7 bg-background/0 placeholder-foreground/70"
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 pt-3">{errors.email.message}</p>}
              <i className="absolute right-[25px] top-[18px] opacity-80">
                {<EmailIcon />}
              </i>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                id="phone-number"
                placeholder="Your Phone"
                autoComplete="tel"
                className="block w-full border-1 rounded-full py-5 text-lg px-7 bg-background/0 placeholder-foreground/70"
                {...register('phoneNumber')}
              />
              {errors.phoneNumber && <p className="text-red-500 pt-3">{errors.phoneNumber.message}</p>}
              <i className="absolute right-[25px] top-[18px] opacity-80">
                {<PhoneNumberIcon />}
              </i>
            </div>
          </div>
          <div className="sm:col-span-2 relative">
            <div className="mt-2.5">
              <textarea
                name="message"
                placeholder="Message"
                id="message"
                rows={4}
                className="block w-full border rounded-[1.5rem] py-5 text-lg px-7 bg-background/0 placeholder-foreground/70"
                {...register('message')}
              />
              {errors.message && <p className="text-red-500 pt-3">{errors.message.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <Controller
              name="agreeToTerms"
              control={control}
              defaultValue={true}
              render={({ field }) => (
                <CheckboxWithText
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            {errors.agreeToTerms && <p className="text-red-500 pt-3">{errors.agreeToTerms.message}</p>}
          </div>
        </div>
        <div className="mt-6">
          <Button
            type="submit"
            className="rounded-full mt-5 w-full px-20 py-8 bg-background/0 font-medium tracking-wide text-2xl text-foreground border-solid border border-border"
          >
            {isSubmitting ?
              <Spinner
                className="h-2 w-2 animate-spin"
                aria-label="Loading"
              />
              : 'SEND'
            }
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
