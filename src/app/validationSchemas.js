import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2).nonempty('First name is required'),
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  phoneNumber: z.string().nonempty('Phone number is required'),
  message: z.string().optional()
});

export const registerFormSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  fullName: z.string().nonempty('Name is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long').nonempty('Password is required')
});

export const loginFormSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  password: z.string().min(8, 'Password is incorrect').nonempty('Password is required')
});
