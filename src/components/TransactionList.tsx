import React, { useState } from 'react';

interface Transaction {
  type: string;
  amount: number;
  date: string;
  category: string;
  notes: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const [sortField, setSortField] = useState<keyof Transaction>('date');
  const [filterCategory, setFilterCategory] = useState<string>('');

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortField === 'amount') {
      return b.amount - a.amount;
    } else if (sortField === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  const filteredTransactions = filterCategory
    ? sortedTransactions.filter((t) => t.category === filterCategory)
    : sortedTransactions;

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Transaction History</h2>

      {/* Sorting and Filtering Controls */}
      <div className="mb-4 flex gap-4">
        <select
          onChange={(e) => setSortField(e.target.value as keyof Transaction)}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
          <option value="category">Sort by Category</option>
        </select>

        <input
          type="text"
          placeholder="Filter by Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
      </div>

      <ul className="space-y-4">
        {filteredTransactions.map((transaction, index) => (
          <li
            key={index}
            className="p-4 border-b border-gray-300 flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{transaction.category}</p>
              <p className="text-sm text-gray-500">{transaction.notes}</p>
            </div>
            <div className="text-right">
              <p
                className={`font-bold ${
                  transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {transaction.type === 'income' ? '+' : '-'}₦{transaction.amount}
              </p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
