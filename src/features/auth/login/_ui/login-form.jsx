'use client';

import { Button } from '@/shared/ui/button';
import CheckboxWithText from '@/features/auth/login/_ui/login-checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from '@/app/validationSchemas';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { EmailIcon, PasswordIcon } from '@/shared/icons/icons';

const LoginForm = () => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = async (data) => {

    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    });

    if (res && !res.error) {
      router.push('/');
    } else {
      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left" action="#" method="POST">
      <div className="relative">
        <div className="mt-2 flex items-center">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your Email"
            className="block w-full font-light border-1 rounded-full py-4 text-lg px-7 bg-background/0 placeholder-foreground/70 xs:py-5"
            {...register('email')}
          />
          <i className="absolute right-[25px] flex items-center h-full opacity-80">
            {<EmailIcon />}
          </i>
        </div>
        {errors.email && <p className="text-center text-red-500 pt-3">{errors.email.message}</p>}
      </div>

      <div className="relative mt-4">
        <div className="mt-2 flex items-center">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Your Password"
            autoComplete="current-password"
            className="block w-full font-light border-1 rounded-full py-4 text-lg px-7 bg-background/0 placeholder-foreground/70 xs:py-5"
            {...register('password')}
          />
          <i className="absolute right-[25px] flex items-center h-full opacity-80">
            {<PasswordIcon />}
          </i>
        </div>
        {errors.password && <p className="text-center text-red-500 pt-3">{errors.password.message}</p>}

      </div>
      <CheckboxWithText id="1" />
      <div>
        <Button
          type="submit"
          className="rounded-full w-full px-20 py-7 bg-background/0 font-medium tracking-wide text-lg text-foreground border-solid border border-border xs:text-2xl xs:py-8"
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
