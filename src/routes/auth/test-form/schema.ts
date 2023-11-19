// test schema
import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(3, 'Name must be at least 3 characters long')
    .max(20, 'Name may not be longer than 20 characters'),
  description: z
    .string({
      required_error: 'Description is required',
    })
    .min(3, 'Description must be at least 3 characters long')
    .max(256, 'Description may not be longer than 256 characters'),
});

export type FormSchema = typeof formSchema;
