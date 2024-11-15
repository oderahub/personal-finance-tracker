import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';

interface Transaction {
  type: string;
  amount: number;
  date: string;
  category: string;
  notes: string;
}

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <Router basename="/personal-finance-tracker">
      <Routes>
        <Route
          path="/"
          element={<Home transactions={transactions} onAddTransaction={handleAddTransaction} />}
        />
        <Route path="/reports" element={<Reports transactions={transactions} />} />
      </Routes>
    </Router>
  );
};

export default App;
