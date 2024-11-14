import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface FinanceChartProps {
  transactions: { type: string; amount: number }[];
}

const FinanceChart: React.FC<FinanceChartProps> = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Amount (₦)',
        data: [income, expenses],
        backgroundColor: ['#4CAF50', '#FF5252'],
        borderColor: ['#388E3C', '#D32F2F'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Income vs Expenses</h2>
      <Bar data={data} />
    </div>
  );
};

export default FinanceChart;
