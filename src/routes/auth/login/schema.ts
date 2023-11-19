import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email must be a valid email'),
  password: z.string({
    required_error: 'Password is required',
  }),
  rememberMe: z.boolean().optional(),
});

export type LoginSchema = typeof loginSchema;
