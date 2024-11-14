# Personal Finance Tracker

A React-based personal finance tracking application that helps users manage income and expenses, track transactions, and visualize finances with charts.

## Features
- **Add Transactions**: Record income and expenses with details like date, category, and amount.
- **Categorization & Filtering**: View transactions sorted and filtered by date, category, and amount.
- **Visual Charts**: Get a quick overview of income vs. expenses using dynamic bar charts.
- **Data Persistence**: Data is stored in local storage, so users can return to their data on page refresh.

## Installation & Setup
### Prerequisites
- Ensure you have Node.js and npm installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/oderahub/personal-finance-tracker.git
   ```
2. Navigate to the project folder:
   ```bash
   cd personal-finance-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm start
   ```

## Branching Strategy
- `main`: Stable, production-ready code.
- `feature/*`: Individual branches for each feature or enhancement.
- `bugfix/*`: Branches dedicated to fixing specific bugs.

## Git Workflow
- Each feature is developed in its own branch and reviewed via a pull request before merging into the main branch.

## License
[MIT License](LICENSE)
