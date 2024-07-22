'use client';

import { Button } from '@/shared/ui/button';
import CheckboxWithText from '@/features/auth/register/_ui/register-checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerFormSchema } from '@/app/validationSchemas';
import { EmailIcon, NameIcon, PasswordIcon } from '@/shared/icons/icons';

const RegisterForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerFormSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left" action="#" method="POST">
      <div className="relative">
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your Email"
            className="block w-full border-1 font-light rounded-full py-5 text-lg px-7 bg-background/0 placeholder-foreground/70"
            {...register('email')}
          />
          {errors.email && <p className="text-red-500 pt-3">{errors.email.message}</p>}
          <i className="absolute right-[25px] top-[18px] opacity-80">
            {<EmailIcon />}
          </i>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="name"
            placeholder="Your Name"
            autoComplete="name"
            className="block w-full border-1 font-light rounded-full py-5 text-lg px-7 bg-background/0 placeholder-foreground/70"
            {...register('fullName')}
          />
          {errors.fullName && <p className="text-red-500 pt-3">{errors.fullName.message}</p>}
          <i className="absolute right-[25px] top-[18px] opacity-80">
            {<NameIcon />}
          </i>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Your Password"
            autoComplete="current-password"
            className="block w-full border-1 font-light rounded-full py-5 text-lg px-7 bg-background/0 placeholder-foreground/70"
            {...register('password')}
          />
          {errors.password && <p className="text-red-500 pt-3">{errors.password.message}</p>}
          <i className="absolute right-[25px] top-[18px] opacity-80">
            {<PasswordIcon />}
          </i>
        </div>
      </div>
      <CheckboxWithText />
      <div>
        <Button
          type="submit"
          className="rounded-full w-full px-20 py-8 bg-background/0 font-medium tracking-wide text-2xl text-foreground border-solid border border-border"
        >
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
