import React from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import FinanceChart from '../components/FinanceChart';

interface Transaction {
  type: string;
  amount: number;
  date: string;
  category: string;
  notes: string;
}

interface HomeProps {
  transactions: Transaction[];
  onAddTransaction: (transaction: Transaction) => void;
}

const Home: React.FC<HomeProps> = ({ transactions, onAddTransaction }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Personal Finance Tracker</h1>
      <TransactionForm onSubmit={onAddTransaction} />
      <TransactionList transactions={transactions} />
      <FinanceChart transactions={transactions} />
    </div>
  );
};

export default Home;
