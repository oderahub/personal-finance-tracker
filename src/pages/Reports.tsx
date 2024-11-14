import React from 'react';
import FinanceChart from '../components/FinanceChart';

interface Transaction {
  type: string;
  amount: number;
  date: string;
  category: string;
  notes: string;
}

interface ReportsProps {
  transactions: Transaction[];
}

const Reports: React.FC<ReportsProps> = ({ transactions }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      <FinanceChart transactions={transactions} />
    </div>
  );
};

export default Reports;
