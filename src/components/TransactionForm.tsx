import React, { useState } from 'react';

interface TransactionFormProps {
  onSubmit: (transaction: {
    type: string;
    amount: number;
    date: string;
    category: string;
    notes: string;
  }) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ type, amount: Number(amount), date, category, notes });
    setAmount('');
    setDate('');
    setCategory('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
