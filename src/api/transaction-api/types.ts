import { z } from 'zod';

export const TransactionSchema = z.object({
    id: z.number(),
    budget_id: z.number(),
    transaction_amount: z.number(),
    transaction_date: z.date(),
    transaction_description: z.string(),
    transaction_type_id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type Transaction = z.infer<typeof TransactionSchema>;


export interface TransactionsAPIResponse {
    data: Transaction[];
    message: string;
}

export interface TransactionAPIResponse {
    data: Transaction;
    message: string;
}