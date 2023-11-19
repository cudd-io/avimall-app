import { z } from 'zod';

export const resetSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email must be a valid email'),
});

export type ResetSchema = typeof resetSchema;
