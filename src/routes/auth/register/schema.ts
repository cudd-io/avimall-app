import { z } from 'zod';

export const registerSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required',
    })
    .min(3, 'Username must be at least 3 characters long')
    .max(20, 'Username may not be longer than 20 characters'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email must be a valid email'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters long'),
  passwordConfirm: z.string({
    required_error: 'Confirm password is required',
  }),
  termsOfService: z.boolean({
    required_error: 'You must agree to the terms of service',
  }),
});

export type RegisterSchema = typeof registerSchema;
