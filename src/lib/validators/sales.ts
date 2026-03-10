import { z } from 'zod';

export const reviewsSearchSchema = z.object({
  query: z.string().min(2),
  keywords: z.array(z.string().min(2)).min(1)
});

export const leadSearchSchema = z.object({
  query: z.string().min(2)
});

export const romCreateSchema = z.object({
  propertyName: z.string().min(2),
  address: z.string().min(5),
  solutionType: z.string().min(2),
  rooms: z.number().int().nonnegative(),
  notes: z.string().optional()
});

export const pricingItemUpdateSchema = z.object({
  itemId: z.string().uuid(),
  qty: z.number().nonnegative(),
  unitPrice: z.number().nonnegative(),
  comments: z.string().max(500).optional()
});
