export interface Transaction {
    id:                      number;
    budget_id:               number;
    transaction_amount:      number;
    transaction_date:        Date;
    transaction_description: string;
    transaction_type_id:     number;
    createdAt:               Date;
    updatedAt:               Date;
}


export interface TransactionsAPIResponse {
    data:    Transaction[];
    message: string;
}

export interface TransactionAPIResponse {
    data:    Transaction;
    message: string;
}